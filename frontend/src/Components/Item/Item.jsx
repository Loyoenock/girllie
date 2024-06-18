import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, image, name, new_price, old_price }) => {
  return (
    <div className='item'>
       <Link to={`/product/${id}`}> <img src={image} alt='' width={250} /> </Link>
        <p>{name}</p>
        <div className='item-prices'>
            <div className='item_price-new'>
                ${new_price}
            </div>
            <div className='item_price-old'>
                ${old_price}
            </div>
        </div>
    </div>
  )
}

export default Item