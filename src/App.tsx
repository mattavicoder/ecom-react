import React from 'react';
import {Route, Switch} from 'react-router-dom'
import HomePage from './page/homepage/homepage-component';
import ShopPage from './page/shop/shop.component';
import {Header} from './component/header/header-component';
import {SignInSignUp} from './page/sign-in-and-sign-up/sign-in-and-sign-up-component';
import { authUser } from './types/auth';
import { auth } from './firebase/firebase-util';

export default class App extends React.Component<{}, authUser> {
 
  userAuthChangeSubscription : any;

  constructor(props: {} | Readonly<{}>){
    super(props);

    this.state = {userName: ""};
  }

  componentDidMount(){

    this.userAuthChangeSubscription = auth.onAuthStateChanged(user => {
      this.setState({userAuth: user, userName: user?.displayName?.toString() || ""});
      console.log(user);
    })

  }

  componentWillUnmount(){
    this.userAuthChangeSubscription();
  }


  render(){

  return (
    <div>
      <Header userName={this.state.userName}/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
}
}

