import React,{useEffect,useState} from 'react';
import {  NavLink } from "react-router-dom";
import "./style.css";
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../../Redux/Actions/userAction';
import { ShoppingCart} from 'react-feather';

const Navbar = () => {

  const user = useSelector((state => state.user));
  const cart = useSelector(state => state.cart);

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

  function handleLogOut(){
    dispatch(clearUser());
    localStorage.clear();
  }

  function calculateBuyPrice(actualPrice, discount){
    const discountAmnt = actualPrice * (discount/100);
    return Math.round(actualPrice - discountAmnt);
}

  console.log(user);

  return (
    <div id="navBar">
        <div className="nav-left">
            <p>Shopping Cart</p>
        </div>

        <div className="nav-right">
            {
              !user.user && <NavLink className={"nav"} to={"/"}>LogIn</NavLink>
            }
            <NavLink className="nav hover" to={"/home"}>Home</NavLink>
            <NavLink className="nav hover" to={"/cart"}>
              <div className='cart-img'>
                <ShoppingCart size={30} />
                <span className='cart-count'>{cart.length}</span>
                <p className='cart-value'>Rs.{total}</p>
              </div>
            </NavLink>
           
            {
              user.user && <button className="nav logout-btn hover" onClick={handleLogOut}> LogOut </button>
            }
        </div>
    </div>
  )
}

export default Navbar;