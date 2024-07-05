import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Category from './pages/Category';
import ShoppingList from './pages/ShoppingList';
import PurchaseEntry from './pages/PurchaseEntry';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/category/:categoryName" element={<Category />} />
                <Route path="/shopping-list" element={<ShoppingList />} />
                <Route path="/purchase-entry" element={<PurchaseEntry />} />
            </Routes>
        </Router>
    );
};

export default App;