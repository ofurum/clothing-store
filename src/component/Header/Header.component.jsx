import React from 'react';
import {Link} from 'react-router-dom';
import  {ReactComponent as Logo} from '../../assets/headerIcon/crown.svg';
import {auth} from '../../firebase/firebase.utils'
import './Header.styles.scss';
const Header = ({ currentUser }) => (
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
        <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
      ) : (
        <Link className="option" to="/sign-in-page">
          Sign In
        </Link>
      )}
    </div>
  </div>
);

export default Header;