// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import Account from './pages/Account/Account';
import Wishlist from './pages/Wishlist/Wishlist';
import PrivateRoute from './PrivateRoute';
import Notfound from "./pages/Notfound/Notfound";
import { AuthProvider } from './AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <AppProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="about" element={<About />} />
              <Route path="book" element={<BookList />} />
              <Route path="/book/:id" element={<BookDetails />} />
            </Route>

            <Route path= "account"  element={<Account />} /> 
       {/* Use standard Route for Wishlist without PrivateRoute */}
       <Route path="/wishlist" element={<Wishlist />} />


            <Route path="*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </AppProvider>

);
