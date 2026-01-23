import { useState } from 'react'
import './App.css'
import HomePage from './Componenets/Homepage'
import AnchorHero from './Componenets/Hero'
import Hero from './Componenets/Next-hero'
import FinancialReadinessSection from './Componenets/Fininance-detail'
import AnchorScoreMeasures from './Componenets/Anchor-score'
import ReadinessStates from './Componenets/Redness-State'
import ClassificationSection from './Componenets/Classification'
import InfrastructureSection from './Componenets/InfrastructureSection'
import Footer from './Componenets/Footer'
import FinancialReadinessModal from './Componenets/POP'

function App() {
const [open, setOpen] = useState(false);

  return (
    <>
    <AnchorHero/>
    <Hero/>
    <FinancialReadinessSection/>
    <AnchorScoreMeasures/>
    <ReadinessStates/>
    <ClassificationSection />
    <InfrastructureSection/>
    <Footer/>

    <FinancialReadinessModal/>
    </>
  )
}

export default App
