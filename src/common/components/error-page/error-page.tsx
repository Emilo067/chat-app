import React from 'react';
import './error-page.css'

export const ErrorPage = () => {
    return ( <div className="container">
        <div className="text">
            <h1>Page Not Found</h1>
            <p>We can't seem to find the page you're looking for. Please check the URL for any typos.</p>
            <div className="input-box">
                <input type="text" placeholder="Search..."/>
                    <button><i className="fa-solid fa-search"></i></button>
            </div>
            <ul className="menu">
                <li><a href="#">Go to Homepage</a></li>
                <li><a href="#">Visit our Blog</a></li>
                <li><a href="#">Contact support</a></li>
            </ul>
        </div>
        <div><img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc59yywjBMG-WqlVrGEH8pgNn-jQ4zp5npdg&s" alt=""/></div>
    </div>);
};