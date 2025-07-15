import { BrowserRouter, Routes, Route } from 'react-router-dom' // исправлено: 'react-router-dom', а не 'react-router'
import './App.css'
import { MainNavBarCatalogCombo } from './components/Combo/MainNavBarCatalogCombo'
import { CategoriesData, PartLeftBarCatalogData } from './components/Catalog/Catalog'
import {MainPage} from "./components/MainPage/MainPage.jsx";
import {ErrorPage} from "./components/ErrorPage/ErrorPage.jsx";

function App() {
  const data = CategoriesData();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainNavBarCatalogCombo />}>
          <Route path="/" element={<MainPage />} />
          {data.map(el => (
            <Route
              path={`/categories/${el[0]}`}
              element={el[2] === null ? <ErrorPage/> : el[2]}
              errorElement={<ErrorPage/>}/>
          ))}
          <Route path="*" element={<ErrorPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App