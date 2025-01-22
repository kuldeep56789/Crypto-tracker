import React, { useContext } from 'react'
import './Navbar.css'
import CryptoK from '../../assets/CryptoK.png'
import arrow_icon from '../../assets/arrow_icon.png'
import {CoinContext} from '../../Context/CoinContext'
import {Link} from 'react-router-dom'
import About from './About.jsx'


const Navbar = () => {

    const {setCurrency} = useContext(CoinContext);

    const currencyHandler =  (event)=>{
        switch(event.target.value){
          case "usd" : {
            setCurrency({name: 'usd' , symbol : '$'});
            break;
          }

          case "eur" : {
            setCurrency({name: 'eur' , symbol : '€'});
            break;
          }

          case "inr" : {
            setCurrency({name: 'inr' , symbol : '₹'});
            break;
          }

          default : {
            setCurrency({name: 'usd' , symbol : '$'});
            break;
          }
        }
    }

  return (
    <div className='navbar'>
        <Link to={'/'}>
        
          <img src={CryptoK} className='logo' alt="" />
        </Link>
        <ul>
        <Link to={'/'}><li>Home</li></Link>
        
        <li>
          <Link to={"/pricing"}>Pricing</Link> 
        </li>
        <li>
          <Link to={"/blog"}>Blog</Link> 
        </li>

        <li>
          <Link to={"/about"}>About</Link> 
        </li>
        </ul>

        <div className="nav-right">
            <select name="" id="" onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="inr">INR</option>
            </select>
            <p className='All'>Select Currency</p>
        </div>

    </div>
  )
}

export default Navbar