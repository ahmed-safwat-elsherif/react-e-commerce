import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import NavBar from './components/navbar/Navbar';
import FeaturedProducts from './pages/Products/FeaturedProducts';
import IndexProducts from './components/products/Index';
import NewProducts from './pages/Products/NewProducts';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import ProductItemPage from './pages/Products/ProductItemPage';
import Products from './pages/Products';
import LazyWrapper from './lazy-pages/LazyWrapper';
import { LazyAbout } from './lazy-pages/LazyAbout';

function App() {
  return <div className='App'>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='products' element={<Products />}>
        <Route path='featured' element={<FeaturedProducts />} />
        <Route path='new' element={<NewProducts />} />
        <Route path=':id' element={<ProductItemPage />} />
        <Route index element={<IndexProducts />} />
      </Route>
      <Route path='about' element={<LazyWrapper>
        <LazyAbout />
      </LazyWrapper>}></Route>
      <Route path='*' element={<NoMatch />}></Route>
    </Routes>
  </div>;
}

export default App;
