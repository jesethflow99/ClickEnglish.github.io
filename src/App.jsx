import React from 'react'
import Header from './layout/Header'
import Hero from './layout/Hero'
import Section1 from './layout/Section1'
import Section2 from './layout/Section2'
import Section3 from './layout/Section3'
const App = () => {
  return (
    <div className='app'>
      <Header/>
      <Hero/>
      <Section1/>
      <Section2/>
      <Section3/>
    </div>
  )
}

export default App
