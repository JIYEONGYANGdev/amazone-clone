import React from 'react'
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    // eslint-disable-next-line no-unused-vars
    const [{ basket }] = useStateValue();

    return (
        <div className='checkout'>
            <div className="checkout__left">
            <img className='checkout__ad' src="https://www.lego.com/cdn/cs/set/assets/bltc8d53850bb7ca45a/40487-home-202108-Hero-Short-Large.jpg?fit=crop&format=webply&quality=80&width=1600&height=200&dpr=1" alt="" /> 
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>You have no items in your basket. To buy one or more items, click "Add to basket next to the item.</p>
                </div>
            ) : (
            <div>
                        <h2 className='checkout__title'>Your Shopping Basket</h2>
                        {basket?.map((item) => {
                            console.log(item);
                            return (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            )
                        }
                        )}
            </div>
                )}
            </div>
            {basket.length > 0 && (
                <div className="chekcout__right">
                    <Subtotal />
                </div>
            )}
            </div>
    )
}

// react-currency-format
export default Checkout
