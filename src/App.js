import React, { useEffect, useState } from 'react'
import './App.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView'
import ContactView from './views/ContactsView'
import NotFoundView from './views/NotFoundView';
import Products from './views/Products';
import ProductDetailsView from './views/ProductDetailsView';
import CategoryView from './views/CategoryView';
import { ProductContext, FeaturedProductsContext, FlashsaleProductContext, SaleProductContext } from './contexts/contexts'

function App() {
  const [products, setProducts] = useState([])
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [flashsaleProducts, setFlashsaleProducts] = useState([])
  const [saleProducts, setSaleProducts] = useState([])
  
  useEffect(() => {
    const fetchAllData = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts(await result.json())
    }
    fetchAllData()

    const fetchFeaturedData = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setFeaturedProducts(await result.json())
    }
    fetchFeaturedData()

    const fetchFlashsaleData = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setFlashsaleProducts(await result.json())
    }
    fetchFlashsaleData()

    const fetchSaleData = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=3')
      setSaleProducts(await result.json())
    }
    fetchSaleData()

  }, [setProducts, setFeaturedProducts, setFlashsaleProducts, setSaleProducts])

  return (
    <BrowserRouter>
      <ProductContext.Provider value={products}>
      <FeaturedProductsContext.Provider value={featuredProducts}>
      <FlashsaleProductContext.Provider value={flashsaleProducts}>
      <SaleProductContext.Provider value={saleProducts}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/contacts" element={<ContactView />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:name" element={<ProductDetailsView />} />
          <Route path="/category" element={<CategoryView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </SaleProductContext.Provider>
      </FlashsaleProductContext.Provider>
      </FeaturedProductsContext.Provider>
      </ProductContext.Provider>
    </BrowserRouter>
  );
}

export default App;