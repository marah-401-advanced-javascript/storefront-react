import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Categories from './components/categories/categories.js';
import Products from './components/products/products.js';


function App() {
  return (
    <>
      <CssBaseline >
        <Header />
        <Categories />
        <Products />
        <Footer />
      </CssBaseline>

    </>
  );
}

export default App;
