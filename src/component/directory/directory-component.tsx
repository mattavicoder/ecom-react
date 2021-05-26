import React from "react";
import MenuItem from "./../menuitem/menuitem-component";
import { TypeMenu } from "./../../types/menuitem-type";
import "./directory-styles.scss";
type Sections = {
  menus: TypeMenu[];
};

export default class Directory extends React.Component<{}, Sections> {
  constructor(props: any) {
    super(props);

    this.state = {
      menus: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.menus.map(({ id, ...otherData }) => {
          return <MenuItem key={id} typeMenu={{ ...otherData }}></MenuItem>;
        })}
      </div>
    );
  }
}
