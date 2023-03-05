import { useState } from "react"
import { CajaPais } from "./components/CajaPais"
import { InputPais } from "./components/InputPais"
import './css/App.css'

function App() {

  const [pais, setPais] = useState([])

  const handlePais = (value) => {
    setPais([value, ...pais])
  }

  return (
    <>
      <h1 className="title">Pais App</h1>

      <InputPais newValue={handlePais} />
      <hr />

      <div className="app-caja">
        {
          pais.map(country => (
            <CajaPais key={country} pais={country} />
          ))
        }
      </div>

    </>
  )
}

export default App
