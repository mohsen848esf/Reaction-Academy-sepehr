import React, { useState, useEffect, useMemo, Fragment } from "react";
import { getAllEmployee } from "../../../../../../core/services/api/AdminApi/employeeManegment.api";
import { toast } from "react-toastify";
import PreRingLoader from "src/component/common/PreLoader/PreRingLoader";
import ReactTableComponent, {
  ReactTableFiltedredRowsData,
} from "../../../../../../component/UserPanel/ReactTableComponent/ReactTableComponent";
import { paginate } from "../../../../../../core/utils/paginate";
import Heading from "../../../../../../component/common/Heading/Heading";
import CustomSearch from "../../../../../../component/UserPanel/AllCourses/CustomSearch/CustomSearch";
import SelectOption from "../../../../../../component/common/SelectOption/SelectOption";
import Pagination from "../../../../../../component/common/Pagination/Pagination";
import styles from "./EmployeeTable.module.css";
import { EMPLOYEE_TABLECOLUMNS } from "./EmployeeTableColumns";

const EmployeeTable = () => {
  const [allData, setAllData] = useState([]);
  const [getPageSize, setPageSize] = useState(5);
  const [searchValue, setSearchValue] = useState("");
  const [getCurrentPage, setCurrentPage] = useState(1);
  const [flag, setFlag] = useState(false);

  const getData = async () => {
    try {
      const data = await getAllEmployee();
      setAllData(data.result);
      setFlag(true);
    } catch (error) {
      toast.error("خطایی رخ داده است");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = useMemo(() => EMPLOYEE_TABLECOLUMNS, []);

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
      setCurrentPage((prevState) => prevState + 1);
    } else if (e.target.name === "Previous") {
      setCurrentPage((prevState) => prevState - 1);
    }
  };

  // handleSearch function
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  // ReactTableFiltedredRowsData
  const { filteredData, count } = ReactTableFiltedredRowsData(
    columns,
    allData,
    searchValue,
    "fullName"
  );

  // PaginatedRows function
  const PaginatedRows = paginate(filteredData, getCurrentPage, getPageSize);

  return (
    <Fragment>
      <section className={` mx-auto rounded py-3 px-5 bg-white`}>
        <Heading head="لیست ادمین ها" />
        {!flag ? (
          <PreRingLoader />
        ) : (
          <Fragment>
            <div className="row d-flex justify-content-between">
              <div className="col-lg-5 col-7 mx-auto mb-2 mb-lg-0">
                <CustomSearch
                  onSearch={handleSearch}
                  inputValue={searchValue}
                  plcHolder="جستجوی ادمین"
                />
              </div>
              <div className="col-lg-4 col-7 mx-auto ms-lg-0">
                <label className={`ms-1 ${styles.capacity}`} htmlFor="capacity">
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
        )}
      </section>
    </Fragment>
  );
};

export default EmployeeTable;
