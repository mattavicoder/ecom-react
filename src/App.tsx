import React, { Dispatch } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./page/homepage/homepage-component";
import ShopPage from "./page/shop/shop.component";
import Header from "./component/header/header-component";
import { SignInSignUp } from "./page/sign-in-and-sign-up/sign-in-and-sign-up-component";
import { auth, createUserProfileDocument } from "./firebase/firebase-util";
import { AnyAction } from "redux";
import { setCurrentUser } from "./redux/Reducers/UserAction";
import { UserReduxModel } from "./redux/Models/UserReduxModel";
import { connect } from "react-redux";

type IProps = {
  setCurrentUser: typeof setCurrentUser;
  UserName: string;
};
class App extends React.Component<IProps, UserReduxModel> {
  userAuthChangeSubscription: any;

  // eslint-disable-next-line no-empty-pattern
  constructor(props: any) {
    super(props);

    this.state = { UserName: "", Email: "" };
  }

  componentDidMount() {
    this.userAuthChangeSubscription = auth.onAuthStateChanged(async (user) => {
      console.log(user);
      if (user) {
        const userRef = await createUserProfileDocument(user, {});
        userRef?.onSnapshot((snapShot) => {
          this.setSnapShotUserModel(snapShot.data());
        });
      } else {
        this.props.setCurrentUser({
          UserName: "",
          Email: "",
        });
      }
    });
  }

  setSnapShotUserModel(data: any) {
    console.log(data);
    this.props.setCurrentUser({
      UserName: data.displayName,
      Email: data.email,
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
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.UserName ? (
                <Redirect to="/" />
              ) : (
                <SignInSignUp></SignInSignUp>
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  UserName: state.userRedux.UserName,
});

const mapDispatchToProps = (dispatchEvent: Dispatch<AnyAction>) => {
  return {
    setCurrentUser: (user: UserReduxModel) =>
      dispatchEvent(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
