import React from 'react';
import './error-page.css'
import imageError from '../../../assets/svg/page_not_found.svg'

export const ErrorPage = () => {
    return ( <div className="container">
        <div className="text">
            <h1>Page Not Found</h1>
            <p style={{color: "#fff"}}>We can't seem to find the page you're looking for. Please check the URL for any typos.</p>
            <ul className="menu">
                <li><a href="#">Go to Homepage</a></li>
            </ul>
        </div>
        <div><img className="image" src={imageError} alt="Page Not Found"/></div>
    </div>);
};
