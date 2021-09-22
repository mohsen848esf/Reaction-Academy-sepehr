import React, { createContext, useState } from 'react';
import { useContext } from 'react';
import { getCourseFilteredData } from '../../core/utils/getFilteredData';

const CourseContext = createContext();
CourseContext.displayName = "CourseContext";

const CourseContextSetState = createContext();
CourseContextSetState.displayName = "CourseContextSetState";

export const CourseContextProvider = ({ children }) => {
  const [getCourses, setCourses] = useState([]);
  const [selectedValue, setSelectedValue] = useState([]);
  const [getSearchValue, setSearchValue] = useState("");

  return (
    <CourseContext.Provider
      value={{
        courses: getCourses,
        selectedValue: selectedValue,
        searchValue: getSearchValue
      }}
    >
      <CourseContextSetState.Provider
        value={{
          setCourses,
          setSelectedValue,
          setSearchValue
        }}
      >
        {children}
      </CourseContextSetState.Provider>
    </CourseContext.Provider>
  );
};


//getState
const useCourseState = () => {
  return useContext(CourseContext);
}


//setState
const useCourseSetState = () => {
  return useContext(CourseContextSetState);
}


//Actions
const useCourseActions = () => {
  const { setSearchValue, setSelectedValue } = useCourseSetState();
  const { courses, searchValue, selectedValue } = useCourseState();

  const onHandleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSelectedValue = (e) => {
    setSelectedValue(e.map((item) => item.value));
  }

  const getFilterData = () => {
    const { count, filteredItems } = getCourseFilteredData(
      courses,
      searchValue,
      selectedValue
    );
    return { count, filteredItems };
  }

  return { onHandleChange, getFilterData, handleSelectedValue };
}


export {
  useCourseState,
  useCourseSetState,
  useCourseActions
}

export default CourseContextProvider;
