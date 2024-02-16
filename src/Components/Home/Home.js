import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postRequest } from '../../Redux/Actions/postActions';
import { addCart } from '../../Redux/Actions/cartAction';
import DropDown from '../common/DropdownComponent';
import InputComponent from '../common/InputComponent';

import "./style.css";

const Home = () => {

    const {data} = useSelector((state)=>state.post);

    const [searchByName,setSearchByName] = useState("");
    const [searchByPrice,setSearchByPrice] = useState('')

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(postRequest());
    },[])

    function calculateBuyPrice(actualPrice, discount){
            const discountAmnt = actualPrice * (discount/100);
            return Math.round(actualPrice - discountAmnt);
        }

        function addToCart(product){
            dispatch(addCart(product));
            alert("Product added to Cart");
        }

        //()=>dispatch(addCart(product))

        let filteredProducts = data.products ? data.products.filter(
            (product)=> product.title.trim().toLowerCase().includes(searchByName.trim().toLowerCase())
            ) : [];

            filteredProducts = filteredProducts.filter((product)=>{
                if(searchByPrice === "Under Rs. 100"){
                    return product.price <= 100;
                }else if(searchByPrice === 'Rs. 100 - 500'){
                    return product.price >= 100 && product.price <= 500;
                }else if(searchByPrice === 'Above Rs. 500'){
                    return product.price >= 500;
                } else{
                    return true;
                }
            })

            console.log(filteredProducts);


        const options = ['Under Rs. 100','Rs. 100 - 500','Above Rs. 500'];

  return (
    <div>
        <div className='header'><h1>All Items</h1></div>
        <div className='search-bar'>
            <div style={{width:"40%"}}>
            <InputComponent type="text" placeholder={"Search by product name"} state={searchByName} setState={setSearchByName}/>
            </div>
            <div style={{width:"40%"}}>
            <DropDown state={searchByPrice} setState={setSearchByPrice} options={options} />
            </div>  
        </div>
        <div className='container'>

            {
                 filteredProducts.length > 0 && filteredProducts.map((product,index)=>(
                    
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
                            <button className='btn' onClick={()=>addToCart(product)}>Add to cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Home