import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { OrderSummary } from './components/OrderSummary';
import { NoMatch } from './components/NoMatch';
import { Products } from './components/Products';
import { NewProducts } from './components/NewProducts';
import { FeaturedProducts } from './components/FeaturedProducts';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/order-summary" element={<OrderSummary />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
        <Route path="/products" element={<Products />}>
          <Route path="/featured" element={<FeaturedProducts />} />
          <Route path="/new" element={<NewProducts />} />

        </Route>




      </Routes>

    </div>
  );
}

export default App;
