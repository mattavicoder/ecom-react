import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import CollectionItem from "../../component/collection-item/collection-item";
import { getCategoryCollections } from "../../redux/Reducers/Shop/ShopSelector";
import "./category.collection.styles.scss";

const CategoryCollection: React.FC = (props: any) => {
  const { title, items } = props.collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((i: any) => (
          <CollectionItem key={i.id} CartItems={i} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any, ownProps: any) => ({
  collection: getCategoryCollections(ownProps.match.params.id)(state),
});

export default connect(mapStateToProps)(CategoryCollection);
