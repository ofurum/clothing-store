/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/Homepage/Homepage.component';
import ShopPage from './pages/shopPage/shop.component'

const HatPage = () => (
  <h3>Hat page</h3>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
