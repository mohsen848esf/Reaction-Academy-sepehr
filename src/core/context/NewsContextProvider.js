import React, { createContext, useState } from 'react';
import { useContext } from 'react';
import { getNewsFilteredData } from '../../core/utils/getFilteredData';

const NewsContext = createContext();
NewsContext.displayName = "NewsContext";

const NewsContextSetState = createContext();
NewsContextSetState.displayName = "NewsContextSetState";

export const NewsContextProvider = ({ children }) => {
  const [getNews, setNews] = useState([]);
  const [selectedValue, setSelectedValue] = useState([]);
  const [getSearchValue, setSearchValue] = useState("");

  return (
    <NewsContext.Provider
      value={{
        getNews: getNews,
        selectedValue: selectedValue,
        searchValue: getSearchValue
      }}
    >
      <NewsContextSetState.Provider
        value={{
          setNews,
          setSelectedValue,
          setSearchValue
        }}
      >
        {children}
      </NewsContextSetState.Provider>
    </NewsContext.Provider>
  );
};


//getState
const useNewsState = () => {
  return useContext(NewsContext);
}


//setState
const useNewsSetState = () => {
  return useContext(NewsContextSetState);
}


//Actions
const useNewsActions = () => {
  const { setSearchValue, setSelectedValue } = useNewsSetState();
  const { getNews, searchValue, selectedValue } = useNewsState();

  const onHandleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSelectedValue = (e) => {
    setSelectedValue(e.map((item) => item.value));
  }

  const getFilterData = () => {
    const { count, filteredItems } = getNewsFilteredData(
      getNews,
      searchValue,
      selectedValue
    );
    return { count, filteredItems };
  }

  return { onHandleChange, getFilterData, handleSelectedValue };
}


export {
  useNewsState,
  useNewsSetState,
  useNewsActions
}

export default NewsContextProvider;
