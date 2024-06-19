import React from "react"
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'

const ProductDisplay = (props) => {
    const {product} = props;
    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="product__img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="product-img">
                    <img className="main__product-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="product__star-rating">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="product-price">
                    <div className="old-price">
                        ${product.old_price}
                    </div>
                    <div className="new_price">
                        ${product.new_price}
                    </div>
                </div>
                    <div className="product-description">
                        A lightweight, usally knitted, pullover sweater with long sleeves, which is worn over a shirt or blouse.
                    </div>
                    <div className="product-size">
                        <h1>Select Size</h1>
                        <div className="product-sizes">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                    </div>
                    <button>ADD TO CART</button>
                    <p className="product-category"><span>Category:</span> Ladies, T-Shirt, Crop Top</p>
                    <p className="product-category"><span>Tags:</span> Modern, Latest </p>
                
            </div>
        </div>
    )
}
export default ProductDisplay