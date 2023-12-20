import { useState, useEffect } from "react"
import Formulario from "./assets/components/Formulario"
import Header from "./assets/components/Header"
import ListadoPacientes from "./assets/components/ListadoPacientes"

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setpaciente] = useState({})

  useEffect(() => {
    const obtenerLs = () => {
      const pacientesLs = JSON.parse(localStorage.getItem('pacientes')) ?? []
      setPacientes(pacientesLs)
    }
    obtenerLs()
  }, [])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [paciente])

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }
  return (
    <>

      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setpaciente={setpaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setpaciente={setpaciente}
          eliminarPaciente={eliminarPaciente}


        />
      </div>
    </>
  )
}

export default App
