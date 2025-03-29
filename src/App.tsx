import React from 'react'
import Header from './components/Header'
import LightningNetwork from './components/LightningNetwork'
import Compliance from './components/Compliance'
import UseCases from './components/UseCases'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <LightningNetwork />
      <Compliance />
      <UseCases />
      <Footer />
    </div>
  )
}

export default App
