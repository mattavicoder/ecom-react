import React, { Dispatch } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./page/homepage/homepage-component";
import ShopPage from "./page/shop/shop.component";
import Header from "./component/header/header-component";
import { SignInSignUp } from "./page/sign-in-and-sign-up/sign-in-and-sign-up-component";
import { authUser } from "./types/auth";
import { auth, createUserProfileDocument } from "./firebase/firebase-util";
import { AnyAction } from "redux";
import { setCurrentUser } from "./redux/Reducers/UserAction";
import { UserReduxModel } from "./redux/Models/UserReduxModel";
import { connect } from "react-redux";

type IProps = {
  setCurrentUser: typeof setCurrentUser;
};
class App extends React.Component<IProps, authUser> {
  userAuthChangeSubscription: any;

  // eslint-disable-next-line no-empty-pattern
  constructor(props: any) {
    super(props);

    this.state = { userName: "" };
  }

  componentDidMount() {
    this.userAuthChangeSubscription = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user, {});
        userRef?.onSnapshot((snapShot) => {
          this.props.setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }
      this.props.setCurrentUser({
        currentUser: { displayName: user?.displayName, email: user?.email },
      });
    });
  }

  componentWillUnmount() {
    this.userAuthChangeSubscription();
  }

  render() {
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
}

const mapDispatchToProps = (dispatchEvent: Dispatch<AnyAction>) => {
  return {
    setCurrentUser: (user: UserReduxModel) =>
      dispatchEvent(setCurrentUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(App);
