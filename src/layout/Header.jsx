import React from 'react';

const Header = () => {
    return (
        <nav className="deep-purple lighten-3">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">React Movies</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="https://github.com/sizonenkodm/React-movies" target='_blank'>Repo</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;