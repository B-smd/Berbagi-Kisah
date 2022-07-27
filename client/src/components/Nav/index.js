import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
            <nav className="displayed" >
                <h4 id="navlinks">
                    <Link to="/">Welcome</Link>
                    <Link to="home">Home</Link>
                    <Link to="donate">Donate</Link>
                </h4>

            </nav>
    );
}
      
