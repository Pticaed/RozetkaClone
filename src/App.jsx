import { BrowserRouter, Routes, Route } from 'react-router-dom' // исправлено: 'react-router-dom', а не 'react-router'
import './App.css'
import { MainNavBar } from './components/mainNavBar/mainNavBar'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainNavBar />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
