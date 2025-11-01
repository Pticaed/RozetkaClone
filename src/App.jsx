import { BrowserRouter, Routes, Route } from 'react-router-dom' // исправлено: 'react-router-dom', а не 'react-router'
import './App.css'
import { useEffect, useState } from 'react'
import { MainNavBarCatalogCombo } from './components/Combo/MainNavBarCatalogCombo'
import { CategoriesData, PartLeftBarCatalogData } from './components/Catalog/Catalog'
import {MainPage} from "./components/MainPage/MainPage.jsx";
import { ErrorPage } from './components/ErrorPage/ErrorPage.jsx';
import AppContext from './features/context/AppContext.jsx'
import Base64 from './app/shared/Base64.js'
import CreateBrand from './components/AdminComponents/CreateBrand/CreateBrand.jsx'
import CreateProduct from './components/AdminComponents/CreateProduct/CreateProduct.jsx'
import CreateProductGroup from './components/AdminComponents/CreateProductGroup/CreateProductGroup.jsx'
import CombineAdminComponents from './components/AdminComponents/CombineComponents/CombineAdminComponents.jsx'

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const data = CategoriesData();
  const backUrl = "https://localhost:7082"
  const tokenKey = "authData"
  const request = (url, conf) => new Promise((resolve, reject) => {
    if(url.startsWith('/')) {
      url = backUrl + url;
      // додаємо токен до кожного запиту, що іде до бекенду - Authorization: Bearer token
      if(token) {
        if(typeof conf == 'undefined') {
          conf = {};
        }
        if(typeof conf.headers == 'undefined') {
          conf.headers = {};
        }
        if(typeof conf.headers['Authorization'] == 'undefined') {
          conf.headers['Authorization'] = 'Bearer ' + token;
        }
      }
    }
    
    fetch(url, conf)
        .then(r => r.json())
        .then(j => {
            if(j.status.isOk) {
                resolve(j.data);
            }
            else {
                reject(j);
            }
        });
  });

    useEffect(() => {
  const savedToken = localStorage.getItem(tokenKey);
  if (savedToken) {
    const payload = Base64.jwtDecodePayload(savedToken);
    const exp = payload['exp'];
    console.log(exp);
    setToken(savedToken);
  }
  
}, []); // ← вот сюда нужно закрытие и зависимости

  useEffect(() => {
    if(token) {
      setUser( Base64.jwtDecodePayload(token) );
      localStorage.setItem(tokenKey, token)
    }
    else {
      setUser(null);
      localStorage.removeItem(tokenKey);
    }
  }, [token]);

  return (
    <AppContext.Provider value={ { request, backUrl, setToken, token }}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainNavBarCatalogCombo />}>
          <Route path="/" element={<MainPage />} />
          {data.map(el => (
            <Route
              path={`/categories/${el[0]}`}
              element={el[2] === null ? <ErrorPage/> : el[2]}
              errorElement={<ErrorPage/>}/>
          ))}/
          <Route path="*" element={<ErrorPage />} />
          <Route path="AdminComponents" element={<CombineAdminComponents /> } />
        </Route>
      </Routes>
    </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App