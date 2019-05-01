import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUser, faTags } from '@fortawesome/free-solid-svg-icons';

import './Sidebar.css';

const Sidebar = () => (
    <nav className="sidebar bg-light d-none d-md-block">
        <div className="sidebar-sticky">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link to="/book" className="nav-link" >
                        <FontAwesomeIcon icon={faBook} size="1x" className="feather" />
                        Book
                    </Link>
                </li>
                <li>
                    <Link to="/author" className="nav-link">
                        <FontAwesomeIcon icon={faUser} size="1x" className="feather" />
                        Author
                    </Link>
                </li>
                <li>
                    <Link to="/genre" className="nav-link">
                        <FontAwesomeIcon icon={faTags} size="1x" className="feather" />
                        Genre
                    </Link>
                </li>

            </ul>
        </div>
    </nav>
)

export default Sidebar;