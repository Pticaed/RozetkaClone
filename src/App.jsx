import { BrowserRouter, Routes, Route } from 'react-router-dom' // исправлено: 'react-router-dom', а не 'react-router'
import './App.css'
import { MainNavBarCatalogCombo } from './components/Combo/MainNavBarCatalogCombo'
import { Footer } from './components/Footer/Footer'
import { HouseholdApps } from './components/HouseholdAppliances/Household'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HouseholdApps />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
