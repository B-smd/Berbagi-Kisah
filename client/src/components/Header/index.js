import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth'

const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <header className="text-light mb-4 py-3 flex-row align-center">
            <div className="container flex-row justify-space-between-lg justify-center align-center">
                <div>
                    <Link className="text-light " to="/">
                        <h1 className="m-0">Story Sharing</h1>
                    </Link>
                <p className="m-0">Share your story ...</p>
                    <Link style={{"margin": "auto"}} to="/"><img src="https://img.icons8.com/color/48/000000/start--v1.png" alt="Welcome" className="icon" width={"40"}/></Link>
                    <Link style={{"margin": "auto"}} to="home"><img src="https://img.icons8.com/fluent/48/000000/home--v1.png" alt="Home" className="icon" width={"40"}/></Link>
                    <Link style={{"margin": "auto"}} to="donate"><img src="https://img.icons8.com/color/48/000000/donate.png" alt="Donate" className="icon" width= "40" /></Link>

                </div>
                <div>
                    {Auth.loggedIn() ? (
                        <>
                            <Link className="btn btn-lg btn-info m-2" to="/me">
                                {Auth.getProfile().data.username}'s profile
                            </Link>
                            <button className="btn btn-lg btn-light m-2" onClick={logout}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link className="btn btn-lg btn-info m-2" to="/login">
                                Login
                            </Link>
                            <Link className="btn btn-lg btn-light m-2" to="/signup">
                                Signup
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
// Comment
export default Header;