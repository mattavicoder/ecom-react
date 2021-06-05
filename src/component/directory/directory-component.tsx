import React from "react";
import MenuItem from "./../menuitem/menuitem-component";
import { TypeMenu } from "./../../types/menuitem-type";
import "./directory-styles.scss";
import { createStructuredSelector } from "reselect";
import { getDirectoriesSelector } from "../../redux/Reducers/Directory/DirectorySelector";
import { connect } from "react-redux";
type Sections = {
  dataSections: TypeMenu[];
};

const Directory: React.FC<Sections> = ({ dataSections }) => {
  return (
    <div className="directory-menu">
      {dataSections.map(({ id, ...otherData }) => {
        return <MenuItem key={id} typeMenu={{ ...otherData }}></MenuItem>;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  dataSections: getDirectoriesSelector,
});

export default connect(mapStateToProps)(Directory);
