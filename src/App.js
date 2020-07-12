import React from 'react';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Categories from './components/categories/categories.js';
import Products from './components/products/products.js';

function App() {
  return (
    <>
      <Header />
      <Categories />
      <Products />
      <Footer />
    </>
  );
}

export default App;
