import React from 'react'
import './App.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView'
import ContactView from './views/ContactsView'
import NotFoundView from './views/NotFoundView';
import Products from './views/Products';
import ProductDetailsView from './views/ProductDetailsView';
import CategoryView from './views/CategoryView';
import { ProductProvider } from './contexts/ProductContext';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';


function App() {

  return (
    <BrowserRouter>
      <ShoppingCartProvider>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/contacts" element={<ContactView />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:name" element={<ProductDetailsView />} />
          <Route path="/category" element={<CategoryView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </ProductProvider>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;