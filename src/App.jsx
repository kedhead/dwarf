import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StoneNavbar from './components/StoneNavbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductRequest from './pages/ProductRequest';
import About from './pages/About';
import Events from './pages/Events';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import { ProductsProvider } from './context/ProductsContext';
import { ContentProvider } from './context/ContentContext';

function App() {
    return (
        <Router>
            <ContentProvider>
                <ProductsProvider>
                    <div className="app-container">
                        <StoneNavbar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/shop" element={<Shop />} />
                            <Route path="/shop/request/:id" element={<ProductRequest />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/events" element={<Events />} />
                            <Route path="/admin" element={<AdminLogin />} />
                            <Route path="/admin/dashboard" element={<AdminDashboard />} />
                        </Routes>
                    </div>
                </ProductsProvider>
            </ContentProvider>
        </Router>
    );
}

export default App;
