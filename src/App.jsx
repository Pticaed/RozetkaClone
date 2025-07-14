import { BrowserRouter, Routes, Route } from 'react-router-dom' // исправлено: 'react-router-dom', а не 'react-router'
import './App.css'
import { MainNavBarCatalogCombo } from './components/Combo/MainNavBarCatalogCombo'
import { CategoriesData, PartLeftBarCatalogData } from './components/Catalog/Catalog'




function App() {
  const data = CategoriesData();
  data.forEach(el => {
    console.log(el[2])
  })
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainNavBarCatalogCombo />}>
          {data.map(el => (
            <Route path={`/categories/${el[0]}`} element={el[2]} /> 
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
