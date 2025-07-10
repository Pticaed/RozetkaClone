import { BrowserRouter, Routes, Route } from 'react-router-dom' // исправлено: 'react-router-dom', а не 'react-router'
import './App.css'
<<<<<<< HEAD
import { MainNavBar } from './components/mainNavBar/mainNavBar'
import { LeftbarMainPage } from './components/left-bar-mainpage/leftbar'
=======
import { MainNavBarCatalogCombo } from './components/Combo/MainNavBarCatalogCombo'
>>>>>>> origin

function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<LeftbarMainPage />} />
=======
        <Route path="/" element={<MainNavBarCatalogCombo />} />
>>>>>>> origin
      </Routes>
    </BrowserRouter>
  )
}

export default App
