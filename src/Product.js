import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({id, title, image, price, rating}) {
    // eslint-disable-next-line no-empty-pattern
    const [{}, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: { // 값이 이름과 같으면 key:value로 작성하지 않아도 됨
                id,
                title,
                price,
                image,
                rating
            }
        })
    }

    return (
        <div className='product'>
            <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {Array(rating).fill()
                    .map((_) => (
                    <p>⭐️</p>
                ))}
            </div>
            </div>
            {/* <div className='product_imgBox'>
                <img className='product__image' src={image} alt="" />
                </div> */}
            <img className='product__image' src={image} alt="" />
            <button onClick={addToBasket}>Add to basket</button>
        </div> 
    )
}

export default Product
