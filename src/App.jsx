import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import AgendaTable from './components/AgendaTable'
import NewVisitForm from './components/NewVisitForm'
import DataService from './service/data-service'
import GeneralAgenda from './components/GeneralAgenda'

function App() {
  const [allRegistrations, setAllRegistrations] = useState([]);

  useEffect(() => {
    fetchAllData()
  }, [])

  const service = new DataService()

  const fetchAllData = () => {
    service
      .fetchAllData()
      .then(response => setAllRegistrations(response))
      .catch(err => console.log(err))
  }

  return (
    <div style={{boxSizing: 'border-box'}}>
      <NavBar />
      <NewVisitForm fetchAllData={fetchAllData} />
      <AgendaTable allRegistrations={allRegistrations} fetchAllData={fetchAllData} />
      <GeneralAgenda allRegistrations={allRegistrations} fetchAllData={fetchAllData} />
    </div>
  )
}

export default App
