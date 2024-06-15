import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
    return (
        <div className="newsletter">
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div className="input-group">
                <input type="email" className="form-control" placeholder="Enter your email" />
                <button className="btn">Subscribe</button>
            </div>
        </div>
    )
}
export default NewsLetter;