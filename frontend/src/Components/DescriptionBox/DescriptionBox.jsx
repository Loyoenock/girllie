import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () =>{
    return(
        <div className="description-box">
            <div className='description__box-navigator'>
                <div className='description__box-nav-box'> Description </div>
                <div className='description__box-nav-box fade'>Reviews (122) </div>
            </div>
            <div className='description__box-description'>
                <p>An ecommerce website is a website people can directly buy products from. You’ve probably used a number of ecommerce websites before, most big brands and plenty of smaller ones have one. Any website that includes a shopping cart and a way for you to provide credit card information to make a purchase falls into this category.</p>
                <p>ecommerce typically refers to buying and selling goods and services online, but there is more to it than that. It also includes the entire online process of developing, marketing, selling, delivering, servicing and paying for products and services. 
                </p>
            </div>
        </div>
    )
}
export default DescriptionBox;