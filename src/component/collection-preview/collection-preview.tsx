import React, { FunctionComponent } from "react";
import "./collection-preview.scss";
import { ShopItem, ShopCategory } from "./../../types/shopitems-type";
import CollectionItem from "../collection-item/collection-item";

export const CollectionPreview: FunctionComponent<ShopCategory> = ({
  title,
  items,
}) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((i) => {
            return <CollectionItem key={i.id} CartItems={i} />;
          })}
      </div>
    </div>
  );
};
