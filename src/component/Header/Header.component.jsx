import React, {useRef,useState,  useEffect} from 'react';
import {Link} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import  {ReactComponent as Logo} from '../../assets/headerIcon/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import { connect } from "react-redux";
import CartIcon from '../../component/cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {cartHidden} from '../../redux/cart/cart.selector';
import {seletedUser} from '../../redux/user/user.selector'
import './Header.styles.scss';


const Header = ({ currentUser, hidden}) => {
  const headerRef = useRef()
  const [isSticky, setSticky] = useState(false);
 

  const handleScroll = () => {
    if (headerRef.current) {
      setSticky(headerRef.current.getBoundingClientRect().top <= 0);
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    
  }, [])

  console.log('header',  currentUser)
  
  return (
    <div ref={headerRef} className={`header ${isSticky ? "sticky" : ""}`}>
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

const mapStateToProps = createStructuredSelector({
    currentUser: seletedUser,
    hidden: cartHidden
});





export default connect(mapStateToProps)(Header);