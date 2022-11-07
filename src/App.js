import React, { useEffect, useState } from 'react'
import './App.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView'
import ContactView from './views/ContactsView'
import NotFoundView from './views/NotFoundView';
import Products from './views/Products';
import ProductDetailsView from './views/ProductDetailsView';
import CategoryView from './views/CategoryView';
import { ProductContext } from './contexts/contexts'

function App() {
  const [products, setProducts] = useState({
    allProducts: [],
    featuredProducts: [],
    flashSaleProducts: [],
    topPicksProducts: []
  })
  
  useEffect(() => {
    const fetchAllProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts({...products, allProducts: await result.json()})
    }
    fetchAllProducts()

    const fetchFeaturedProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setProducts({...products, featuredProducts: await result.json()})
    }
    fetchFeaturedProducts ()

    const fetchFlashSaleProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setProducts({...products, flashSaleProducts: await result.json()})
    }
    fetchFlashSaleProducts ()

    const fetchTopPicksProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setProducts({...products, topPicksProducts: await result.json()})
    }
    fetchTopPicksProducts ()

  }, [])

  return (
    <BrowserRouter>
      <ProductContext.Provider value={products}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/contacts" element={<ContactView />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:name" element={<ProductDetailsView />} />
          <Route path="/category" element={<CategoryView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </ProductContext.Provider>
    </BrowserRouter>
  );
}

export default App;