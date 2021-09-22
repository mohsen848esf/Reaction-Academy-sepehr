import React, { Fragment, useEffect } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const MultiSelect = ({ className, optionsData, onSelectedValue }) => {
  return (
    <div className={className}>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        onChange={(e) => onSelectedValue(e)}
        defaultValue={[]}
        isMulti
        options={optionsData}
        placeholder="انتخاب براساس ..."
        className="React"
        classNamePrefix="select"
      />
    </div>
  );
};

export default MultiSelect;
