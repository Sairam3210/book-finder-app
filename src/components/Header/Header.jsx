import React from 'react';
import Navbar from "../Navbar/Navbar.jsx";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
               <p className="header-text fs-18 fw-3"> Discover books across every genre — from classics to modern reads.  Search by title and explore book details instantly.</p>

                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header