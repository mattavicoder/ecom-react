import React from "react";
import { StaticContext } from "react-router";
import { match, Route, RouteComponentProps } from "react-router-dom";
import CategoryCollectionPage from "../Category/category.collection.component";
import CollectionsOverView from "./../../component/collections-overview/collections-overview-component";

export default class ShopPage extends React.Component<RouteComponentProps> {
  render() {
    console.log(this.props.match);
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${this.props.match.path}`}
          component={CollectionsOverView}
        />

        <Route
          path={`${this.props.match.path}/:id`}
          component={CategoryCollectionPage}
        />
      </div>
    );
  }
}
