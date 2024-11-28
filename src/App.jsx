
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home';
import ProductInfo from './components/pages/frontend/product-info/ProductInfo';
import { StoreProvider } from './components/store/storeContext';

const App = () => {
  return (
    <StoreProvider>
      <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/product/:slug" element={<ProductInfo />} />
      </Routes>
    </Router>
    </StoreProvider>
    

  )
}

export default App;
