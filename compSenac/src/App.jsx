import { useState } from 'react'
import Intro from "./components/Intro"
import Header from "./components/header"
import Formulario from "./components/formulario"
import Ocupacoes from "./components/ocupacoes"
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Ocupacoes />
      <Formulario />
    </>
  )
}

export default App