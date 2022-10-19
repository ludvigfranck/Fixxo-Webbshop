import './App.min.css';
import Banners from './components/Banners';
import FeaturedProducts from './components/FeaturedProducts';
import Flashsale from './components/Flashsale';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <FeaturedProducts />
      <Banners />
      <Flashsale />
    </>
  );
}

export default App;