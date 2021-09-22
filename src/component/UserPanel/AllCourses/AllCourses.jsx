import React, { useMemo, Fragment, useState, useEffect } from "react";
import { ALLCOLUMNS } from "../../../core/AllCoursesColumns";
import { paginate } from "../../../core/utils/paginate";
import CustomSearch from "./CustomSearch/CustomSearch";
import Pagination from "../../common/Pagination/Pagination";
import SelectOption from "../../common/SelectOption/SelectOption";
import Heading from "./../../common/Heading/Heading";
import PreRingLoader from '../../common/PreLoader/PreRingLoader';
import { Terms } from "../../../core/services/api/terms.api";
import {
  ReactTableFiltedredRowsData,
  ReactTableComponent
} from "../ReactTableComponent/ReactTableComponent";
import { toast } from "react-toastify";
import TableCss from "./AllCourses.module.css";

const AllCourses = ({ active }) => {
  const [allData, setAllData] = useState([]);
  const [getPageSize, setPageSize] = useState(5);
  const [searchValue, setSearchValue] = useState("");
  const [getCurrentPage, setCurrentPage] = useState(1);
  const [flag, setFlag] = useState(false);

  const getData = async () => {
    try {
      const data = await Terms();
      setAllData(data.result);
      setFlag(true);
    } catch (error) {
      toast.error("خطایی رخ داده است");
    }
  };

  useEffect(() => {
    if (active === 2) getData();
  }, [active]);

  const columns = useMemo(() => ALLCOLUMNS, []);

  // handlePageChange function
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // handleCapacityChange function
  const handleCapacityChange = (e) => {
    setPageSize(e.target.value);
  };

  // handle Next and Previous Button
  const handlePageExchange = (e) => {
    if (e.target.name === "Next") {
      setCurrentPage(prevState => prevState + 1);
    } else if (e.target.name === "Previous") {
      setCurrentPage(prevState => prevState - 1);
    }
  }

  // handleSearch function
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  // ReactTableFiltedredRowsData
  const { filteredData, count } = ReactTableFiltedredRowsData(columns, allData, searchValue);

  // PaginatedRows function
  const PaginatedRows = paginate(filteredData, getCurrentPage, getPageSize);

  return (
    <Fragment>
      <Heading head="لیست دوره ها" />
      {!flag ? (
        <PreRingLoader />
      ) : (
        <Fragment>
          <div className="row d-flex justify-content-between">
            <div className="col-lg-5 col-7 mx-auto mb-2 mb-lg-0">
              <CustomSearch onSearch={handleSearch} inputValue={searchValue} />
            </div>
            <div className="col-lg-4 col-7 mx-auto ms-lg-0">
              <label className={`ms-1 ${TableCss.capacity}`} htmlFor="capacity">
                ظرفیت :{" "}
              </label>
              <SelectOption
                onCapacityChange={handleCapacityChange}
                capacity={getPageSize}
              />
            </div>
          </div>
          <ReactTableComponent
            tableColumns={columns}
            allData={allData}
            PaginatedRows={PaginatedRows}
          >
            <Pagination
              itemsCount={count}
              pageSize={getPageSize}
              currentPage={getCurrentPage}
              onPageChange={handlePageChange}
              onPageExchange={handlePageExchange}
            />
          </ReactTableComponent>
        </Fragment>
      )
      }
    </Fragment>
  );
};

export default AllCourses;
