import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav>
                <h4 className="displayed" id="navlinks">
                    <Link to="/">Home</Link>
                    <Link to="stories">Stories</Link>
                    <Link to="projects">Sign Up</Link>
                    <Link to="contact">Login</Link>
                    <Link to="resume">Donate</Link>
                </h4>
            </nav>

            <h1 style={{ color: "dodgerblue"}}>Life Stories Sharing</h1>
            <h4 style= {{color: "aliceblue"}}>Sharing your life story to help another 
                people who are struggling to move on and have positive life. Every story 
                shared is a change to make someone feel less alone</h4>
    </header>
    );
}
      
