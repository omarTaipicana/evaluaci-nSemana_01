import { useState } from 'react'
import './App.css'
import quotes from "./componentes/quotes.json"
import QuoteBox from './componentes/QuoteBox'
const colors = ["black", "blue", "green", "brown", "#0E0A14", "#494454", "#032720", "#32554C", "#251F34", "#4B4261", "#220200", "#38210D"]

function App() {

  const randomIndex = Math.floor(Math.random() * quotes.length)
  const [index, setIndex] = useState(randomIndex)
  const changerUser = () => {
    setIndex(randomIndex)
  }

  const randomColor = Math.floor(Math.random() * colors.length)
  document.body.style = `background:${colors[randomColor]}`
  return (
    <div className="App">
      <QuoteBox quotes={quotes} changerUser={changerUser} index={index} colors={colors} randomColor={randomColor} />
    </div>
  )
}

export default App
