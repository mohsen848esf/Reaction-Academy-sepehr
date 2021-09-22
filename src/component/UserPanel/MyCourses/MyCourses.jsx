import React, { useMemo, Fragment, useState, useEffect } from "react";
import { MYCOURSECOLUMNS } from "../../../core/MyCoursesColumns";
import { paginate } from "../../../core/utils/paginate";
import CustomSearch from "../AllCourses/CustomSearch/CustomSearch";
import Pagination from "../../common/Pagination/Pagination";
import SelectOption from "../../common/SelectOption/SelectOption";
import Heading from "./../../common/Heading/Heading";
import { Terms } from "../../../core/services/api/terms.api";
import { toast } from "react-toastify";
import { getItem } from "../../../core/services/storage/storage";
import {
  ReactTableComponent,
  ReactTableFiltedredRowsData
} from "../ReactTableComponent/ReactTableComponent";
import PreRingLoader from "src/component/common/PreLoader/PreRingLoader";
import TableCss from "./MyCourses.module.css";

const AllCourses = ({ active }) => {
  const [allData, setAllData] = useState([]);
  const [getPageSize, setPageSize] = useState(5);
  const [searchValue, setSearchValue] = useState("");
  const [getCurrentPage, setCurrentPage] = useState(1);
  const [flag, setFlag] = useState(false);

  const user = JSON.parse(getItem("user"));

  const getData = async () => {
    try {
      const data = await Terms();
      const studentTerms = data.result.filter((item) =>
        item.students.find((x) => x._id === user._id)
      );
      setAllData(studentTerms);
      setFlag(true);
    } catch (error) {
      toast.error("خطایی رخ داده است");
    }
  };

  useEffect(() => {
    if (active === 3) getData();
  }, [active]);

  // Table's Columns
  const columns = useMemo(() => MYCOURSECOLUMNS, []);

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
      <Heading head="دوره های من" />
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
            getCustomProps={{ setAllData }}
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
