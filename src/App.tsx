import React from 'react';
import {Route, Switch} from 'react-router-dom'
import HomePage from './page/homepage/homepage-component';
import ShopPage from './page/shop/shop.component';
import {Header} from './component/header/header-component';
import {SignInSignUp} from './page/sign-in-and-sign-up/sign-in-and-sign-up-component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
