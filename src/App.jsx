import { BrowserRouter, Routes, Route } from 'react-router-dom' // исправлено: 'react-router-dom', а не 'react-router'
import './App.css'
<<<<<<< HEAD
import { MainNavBarCatalogCombo } from './components/Combo/MainNavBarCatalogCombo'
import { CategoriesData, PartLeftBarCatalogData } from './components/Catalog/Catalog'


=======
import {MainPage} from "./components/MainPage/MainPage.jsx";
>>>>>>> 4c7acfbfb612e439345287c8e5370bf61caaf2a7


function App() {
  const data = CategoriesData();
  data.forEach(el => {
    console.log(el[2])
  })
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<MainNavBarCatalogCombo />}>
          {data.map(el => (
            <Route path={`/categories/${el[0]}`} element={el[2]} /> 
          ))}
        </Route>
=======
        <Route path="/" element={<MainPage/>} />
>>>>>>> 4c7acfbfb612e439345287c8e5370bf61caaf2a7
      </Routes>
    </BrowserRouter>
  )
}

export default App