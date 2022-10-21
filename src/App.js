import './App.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView'
import ContactView from './views/ContactsView'
import NotFoundView from './views/NotFoundView';
import Products from './views/Products';
import ProductDetailsView from './views/ProductDetailsView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/contacts" element={<ContactView />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:name" element={<ProductDetailsView />} />

        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;