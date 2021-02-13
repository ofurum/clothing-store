/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/Homepage/Homepage.component';
import ShopPage from './pages/shopPage/shop.component';
import Header from './component/Header/Header.component'
import SignInSignUpPage from './pages/sign-in/sign-in.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'

class App extends Component  {
      constructor(){
        super()

        this.state ={
            currentUser: null,
      }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
     this.unsubsribeFromAuth = auth.onAuthStateChanged( async (userAuth ) => {
        // this.setState({currentUser: user})
        if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);


          userRef.onSnapshot(
            (snapShot) =>
              this.setState(
                {
                  currentUser: {
                    id: snapShot.id,
                    ...snapShot.data(),
                  },
                },
                () => {
                  console.log(this.state);
                }
              ),
            console.log(this.state)
          );
        }
        this.setState({ currentUser: userAuth });
      })
      
    }

    componentWillUnmount() {
      this.unsubsribeFromAuth()
    }

  render() {
    const {currentUser} = this.state
    return (
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/sign-in-page" component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  };
}

export default App;
