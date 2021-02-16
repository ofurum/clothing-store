import React from 'react';
import {Link} from 'react-router-dom';
import  {ReactComponent as Logo} from '../../assets/headerIcon/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import { connect } from "react-redux";
import  CartDropdown  from "../../component/cart-dropdown/cart-dropdown.component";
import CartIcon from '../../component/cart-icon/cart-icon.component'
import './Header.styles.scss';
const Header = ({ currentUser, hidden}) => {
  console.log('header',  currentUser)
  return (
    <div className="header">
      <Link className="logo-container" to={`/`}>
        <Logo />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>

        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/sign-in-page">
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = ({user:{currentUser}, cart:{hidden}})=> ({
   currentUser,
   hidden
})

export default connect(mapStateToProps)(Header);