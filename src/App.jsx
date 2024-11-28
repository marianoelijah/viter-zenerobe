
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home';
import Dashboard from './components/pages/backend/dashboard/Dashboard';
import Clothes from './components/pages/backend/clothes/Clothes';
import Category from './components/pages/backend/category/Category';
import Advertisement from './components/pages/backend/advertisement/Advertisement';

const App = () => {
  return (
    <StoreProvider>
      <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/clothes" element={<Clothes />} />
        <Route path="/admin/advertisement" element={<Advertisement />} />
        <Route path="/admin/category" element={<Category />} />
      </Routes>
    </Router>
    </StoreProvider>
    

  )
}

export default App;
