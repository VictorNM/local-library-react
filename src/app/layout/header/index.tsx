import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="fixed-top">
        <nav className="navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow">
            <Link to= "/" className="navbar-brand col-md-2" href="#">
                Local Library
            </Link>
        </nav>
    </header>
);

export default Header;