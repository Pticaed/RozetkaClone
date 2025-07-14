import { BrowserRouter, Routes, Route } from 'react-router-dom' // исправлено: 'react-router-dom', а не 'react-router'
import './App.css'
import {MainPage} from "./components/MainPage/MainPage.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App