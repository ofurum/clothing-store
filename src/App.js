/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import React, {Component} from 'react'
import { Switch, Route, Redirect} from 'react-router-dom';
import HomePage from './pages/Homepage/Homepage.component';
import ShopPage from './pages/shopPage/shop.component';
import Header from './component/Header/Header.component'
import SignInSignUpPage from './pages/sign-in/sign-in.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { connect } from 'react-redux';
import setCurrentUser from './redux/user.action'

class App extends Component  {
 
    unsubscribeFromAuth = null;

    componentDidMount() {
      const {setCurrentUser} = this.props;

     this.unsubsribeFromAuth = auth.onAuthStateChanged( async (userAuth ) => {
        // this.setState({currentUser: user})
        if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);


          userRef.onSnapshot(
            (snapShot) =>
            
                  setCurrentUser({
                    id: snapShot.id,
                    ...snapShot.data(),
                  }),
                
          );
        }
        setCurrentUser(userAuth);
      })
      
    }

    componentWillUnmount() {
      this.unsubsribeFromAuth()
    }

  render() {
    const {currentUser} =this.props
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/sign-in-page" render={() => currentUser ? <Redirect to='/' />: <SignInSignUpPage />} />
        </Switch>
      </div>
    );
  };
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
