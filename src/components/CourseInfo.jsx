const EMOJI_RE =
  /^([\u{1F000}-\u{1FAFF}\u{2190}-\u{21FF}\u{2300}-\u{27BF}\u{2B00}-\u{2BFF}]{1,8})\s*(.*)$/u

function parseLine(line) {
  const match = line.replace(/\uFE0F/g, '').match(EMOJI_RE)
  if (!match || !match[2].trim()) return null
  const emoji = match[1]
  const rest = match[2].trim()
  const parts = rest.split(/\s+[–—]\s+/)
  return parts.length > 1
    ? { emoji, title: parts[0], text: parts.slice(1).join(' – ') }
    : { emoji, title: null, text: rest }
}

function FeatureItem({ item }) {
  const full = !item.title
  return (
    <li
      className={`flex items-start gap-3 rounded-2xl bg-paper p-4 ring-1 ring-ink-950/5 ${
        full ? 'sm:col-span-2' : ''
      }`}
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-500/20 text-xl leading-none">
        {item.emoji}
      </span>
      <span className="min-w-0 text-sm leading-relaxed">
        {item.title && (
          <span className="font-display block font-bold text-ink-950">{item.title}</span>
        )}
        <span className={item.title ? 'text-ink-700/80' : 'font-medium text-ink-900'}>
          {item.text}
        </span>
      </span>
    </li>
  )
}

export default function CourseInfo({ info }) {
  const blocks = []
  let items = []
  let prose = []

  const flushItems = () => {
    if (items.length) {
      blocks.push({ type: 'features', items })
      items = []
    }
  }

  const flushProse = () => {
    if (prose.length) {
      blocks.push({ type: 'prose', lines: prose })
      prose = []
    }
  }

  for (const raw of info.split('\n')) {
    const line = raw.trim()
    if (!line) {
      flushItems()
      flushProse()
      continue
    }
    const parsed = parseLine(line)
    if (parsed) {
      flushProse()
      items.push(parsed)
    } else {
      flushItems()
      prose.push(line)
    }
  }
  flushItems()
  flushProse()

  let leadUsed = false

  return (
    <div className="space-y-5">
      {blocks.map((block, bi) =>
        block.type === 'features' ? (
          <ul key={bi} className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {block.items.map((item, ii) => (
              <FeatureItem key={ii} item={item} />
            ))}
          </ul>
        ) : (
          <div key={bi} className="space-y-3">
            {block.lines.map((line, li) => {
              if (!leadUsed) {
                leadUsed = true
                return (
                  <p
                    key={li}
                    className="border-l-4 border-brand-500 pl-4 text-[15px] font-semibold leading-relaxed text-ink-900"
                  >
                    {line}
                  </p>
                )
              }
              if (line.endsWith(':')) {
                return (
                  <h4
                    key={li}
                    className="flex items-center gap-2 pt-2 font-display text-sm font-bold uppercase tracking-wider text-ink-950"
                  >
                    <span aria-hidden="true" className="h-4 w-1 rounded-full bg-brand-500" />
                    {line.replace(/:$/, '')}
                  </h4>
                )
              }
              return (
                <p key={li} className="text-sm leading-relaxed text-ink-700">
                  {line}
                </p>
              )
            })}
          </div>
        ),
      )}
    </div>
  )
}
