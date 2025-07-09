import { BrowserRouter, Routes, Route } from 'react-router-dom' // исправлено: 'react-router-dom', а не 'react-router'
import './App.css'
import { MainNavBar } from './components/mainNavBar/mainNavBar'
import { LeftbarMainPage } from './components/left-bar-mainpage/leftbar'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LeftbarMainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
