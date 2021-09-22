import React from "react";
import { Search } from "react-feather";
import { Input } from "reactstrap";
import SearchCss from './CustomSearch.module.css';


const CustomSearch = ({ onSearch, inputValue, plcHolder="جستجوی دوره" }) => {
  return (
    <div className="col-11 position-relative has-icon-left mb-1">
      <Input
        value={inputValue}
        onChange={(e) => onSearch(e)}
        placeholder={plcHolder}
      />
      <div className={`form-control-position ${SearchCss.searchPosition}`}>
        <Search size="15" />
      </div>
    </div>
  );
};

export default CustomSearch;
