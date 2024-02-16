import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./style.css";
import {removeCart} from '../../Redux/Actions/cartAction'



const Mycart = () => {

    const cart = useSelector((state => state.cart))

    const [total,setTotal] = useState(0);

    const dispatch = useDispatch();

    useEffect(()=>{
        if (cart.length === 0) {
            setTotal(0);
          }
          else{
            const newTotal = cart.reduce((acc, item) => acc + calculateBuyPrice(item.price,item.discountPercentage),0);
            setTotal(newTotal);
          }
    },[cart])

    console.log(cart);

    function calculateBuyPrice(actualPrice, discount){
        const discountAmnt = actualPrice * (discount/100);
        return Math.round(actualPrice - discountAmnt);
    }

  return (
    <div>
        <div className='header'><h1>My Cart</h1></div>
        <div className='main-container'>
            <div className='container-cart'>
                {
                    cart.length === 0 && <div className='cart-empty'>Cart is Empty, Add Products to Cart</div>
                }
             {
                cart.length > 0 && cart.map((product,index)=>(
                    
                    <div key={index} className='card'>
                        <div className='img-div'> 
                            <img src={product.thumbnail} alt=''/> 
                        </div>
                        <div className='description'> 
                            <div className="title-div"><p className="title">${product.title} &nbsp;  <span className="brand">{product.brand}</span></p></div>
                            <p className="price">Price : $. {product.price} <span className="discount"> - {product.discountPercentage} %</span></p>
                            <p className="buy-price">Buy Price : $. {calculateBuyPrice(product.price,product.discountPercentage)}</p>
                        </div>
                        <div className='btn-div'>
                            <button className='btn' onClick={()=>(dispatch(removeCart(product)))}>Remove from cart</button>
                        </div>
                    </div>
                    ))
                }
            </div>
            <div className='checkout-container'>
                <h1 className='sub-header'>Checkout List</h1>
               {
                cart.length > 0 && cart.map((product,index)=>(
                    
                    <div key={index} className='list'>
                        <div className="title-div"><p className="title">{product.title}</p></div>
                        <div><p>$. {calculateBuyPrice(product.price,product.discountPercentage)}</p></div>
                    </div>
                    ))
                }
                <div className='border-line'></div>
                <div className='total'>
                    <div>Total</div>
                    <div>${total}</div>
                </div>
                <div className='border-line'></div>
            </div>
        </div>
        
    </div>
  )
}

export default Mycart