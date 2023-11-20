// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import Account from './pages/Account/Account';
import Wishlist from './pages/Wishlist/Wishlist';
import Notfound from "./pages/Notfound/Notfound";
import AuthRequired from './AuthRequired';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <AppProvider>
  
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="about" element={<About />} />
              <Route path="book" element={<BookList />} />
              <Route path="/book/:id" element={<BookDetails />} />
            </Route>

            <Route path= "account"  element={<Account />} /> 
     
            <Route
      path="wishList"
      element={<AuthRequired><h1>Super secret info here</h1></AuthRequired>}
      loader={async () => {
        const isLoggedIn = false
        if(!isLoggedIn) {
          throw redirect("/account")
        }
        return null
      }}
    />


            <Route path="*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
  
    </AppProvider>

);
