import React from "react";
import { CollectionPreview } from "../../component/collection-preview/collection-preview";
import { ShopCategoryData } from "../../types/shopitems-type";
import { createStructuredSelector } from "reselect";
import { getCollectionsForPreview } from "../../redux/Reducers/Shop/ShopSelector";
import { connect } from "react-redux";
import "./collections-overview-styles.scss";

const CollectionsOverView: React.FC<ShopCategoryData> = ({
  shopCategories,
}) => {
  return (
    <div className="collections-overview">
      {shopCategories.map((item) => {
        return <CollectionPreview key={item.id} {...item} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  shopCategories: getCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverView);
