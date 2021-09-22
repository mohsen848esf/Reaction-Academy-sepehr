import React, { useState } from "react";
import { Search } from "react-feather";
import MultiSelect from "../SelectOption/MultiSelect";
import pageSearchCss from "./PageSearch.module.css";

const PageSearch = ({ title, placeHolder, onHandleChange, PageSearchPic, optionsData, handleSelectedValue }) => {
  return (
    <div>
      <div className="row">
        <figure className="figure mx-auto">
          <img
            src={PageSearchPic}
            alt="NO_IMAGE"
            className={`img-fluid figure-img ${pageSearchCss.pageSearchImg}`}
          />
          <h4>{title}</h4>
        </figure>
      </div>
      <div className="row container mx-auto justify-content-around justify-content-md-between">
        <MultiSelect
          className="col-10 my-3 col-md-6 col-lg-4 mt-5"
          optionsData={optionsData}
          onSelectedValue={handleSelectedValue}
        />
        <div className="col-10 my-3 col-md-6 col-lg-5 mt-5">
          <div className="input-group mb-3">
            <input
              type="text"
              className={`form-control ${pageSearchCss.pageSearchInput}`}
              placeholder={placeHolder}
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
              onChange={(e) => onHandleChange(e)}
            />
            <button
              className={`px-3 ${pageSearchCss.pageSearchBtn}`}
              type="button"
              id="button-addon1"
            >
              <Search size={20} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PageSearch;
