import { BrowserRouter, Routes, Route } from 'react-router-dom' // исправлено: 'react-router-dom', а не 'react-router'
import './App.css'
import { MainNavBarCatalogCombo } from './components/Combo/MainNavBarCatalogCombo'



function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<HouseholdApps />} />
=======
        <Route path="/" element={<MainNavBarCatalogCombo />} />
>>>>>>> a7da98d7290cc9b022b84e90d572a93130a16205
      </Routes>
    </BrowserRouter>
  )
}

export default App
