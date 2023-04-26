import { Fragment } from 'react';
import classes from './Header.module.css';
import Mealsimage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';


export default function Header(props) {
  return (
    <Fragment>
   <header className={classes.header}>
        <h1>WELCOME TO ONLINE RESTRO </h1>
        <h5>"Enjoy The Tasty Meals"</h5>
<HeaderCartButton onClick={props.onShowCart} />   
      </header> 
    <div className={classes['main-image']}>
        <img src={Mealsimage} alt="the food"></img>
    </div>

   
    </Fragment>
  )
}
