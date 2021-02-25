/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import React, {Component} from 'react'
import { Switch, Route, Redirect} from 'react-router-dom';
import { createStructuredSelector } from "reselect";
import HomePage from './pages/Homepage/Homepage.component';
import ShopPage from './pages/shopPage/shop.component';
import Header from './component/Header/Header.component'
import CheckOut from './pages/check-out/check-out.component'
import SignInSignUpPage from './pages/sign-in/sign-in.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
// import CategoryPage from "./pages/category/category.component";
import CollectionPage from "./pages/category/category.component";
import CollectionsOverview from "./component/collection-overview/collection-overview.component";

import { connect } from 'react-redux';
import setCurrentUser from './redux/user.action'
import { seletedUser } from "./redux/user/user.selector";

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
          <Route
            exact
            path="/sign-in-page"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInSignUpPage />
            }
          />
          <Route path={"/shop/:collectionId"} component={CollectionPage} />
          <Route exact path="/check-out" component={CheckOut} />
        </Switch>
      </div>
    );
  };
}

const mapStateToProps = createStructuredSelector({
  currentUser: seletedUser,
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
