import { BrowserRouter, Routes, Route } from 'react-router-dom' // исправлено: 'react-router-dom', а не 'react-router'
import './App.css'
import { MainNavBarCatalogCombo } from './components/Combo/MainNavBarCatalogCombo'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainNavBarCatalogCombo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
