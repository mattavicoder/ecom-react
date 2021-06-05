import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { getCategoryCollections } from "../../redux/Reducers/Shop/ShopSelector";

const CategoryCollection: React.FC = (props) => {
  console.log(props);
  return <div>Category</div>;
};

const mapStateToProps = (state: any, ownProps: any) => ({
  collection: getCategoryCollections(ownProps.match.params.id)(state),
});

export default connect(mapStateToProps)(CategoryCollection);
