import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

function Header(props) {
    
   
  return (
    
    <nav >
        
        <ul className={classes.testHeader}>
              
               <NavLink activeClassName={classes.active} to='/home'> Home </NavLink>            
               <NavLink activeClassName={classes.active} to='/productpage'>Store</NavLink> 
               <NavLink activeClassName={classes.active} to='/about'>About</NavLink> 
               <NavLink activeClassName={classes.active} to='/login'>Login</NavLink>
               <NavLink activeClassName={classes.active} to='/contact'>Contact</NavLink>
               
           <div className={classes.shoppingCart}>
             <HeaderCartButton onClick={props.onShowCart}/>
           </div>
        </ul>
        <div>
        <br/>
        <br/>
        <br/>
        </div>
        
    </nav>

    
    
  )
}
export default Header;
