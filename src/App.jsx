import Header from './layout/Header'
import Hero from './layout/Hero'
import Courses from './layout/Courses'
import Philosophy from './layout/Philosophy'
import Contact from './layout/Contact'
import Footer from './layout/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Courses />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
