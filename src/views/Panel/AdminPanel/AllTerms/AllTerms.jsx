import React, { useState, useEffect, useMemo, Fragment } from "react";
import ADMIN_ALLTERMSCOLUMNS from "./AdminAllTermsColumns";
import { Terms } from "../../../../core/services/api/terms.api";
import { toast } from "react-toastify";
import PreRingLoader from "src/component/common/PreLoader/PreRingLoader";
import { ReactTableFiltedredRowsData } from "src/component/UserPanel/ReactTableComponent/ReactTableComponent";
import { paginate } from "./../../../../core/utils/paginate";
import Heading from "./../../../../component/common/Heading/Heading";
import CustomSearch from "./../../../../component/UserPanel/AllCourses/CustomSearch/CustomSearch";
import styles from "./AllTerms.module.css";
import SelectOption from "./../../../../component/common/SelectOption/SelectOption";
import ReactTableComponent from "src/component/UserPanel/ReactTableComponent/ReactTableComponent";
import Pagination from "./../../../../component/common/Pagination/Pagination";

const AllTerms = () => {
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
    getData();
  }, []);

  const columns = useMemo(() => ADMIN_ALLTERMSCOLUMNS, []);

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
    searchValue
  );

  // PaginatedRows function
  const PaginatedRows = paginate(filteredData, getCurrentPage, getPageSize);

  return (
    <Fragment>
      <section className={` mx-auto rounded py-3 px-5 bg-white`}>
        <Heading head="لیست ترم ها" />
        {!flag ? (
          <PreRingLoader />
        ) : (
          <Fragment>
            <div className="row d-flex justify-content-between">
              <div className="col-lg-5 col-7 mx-auto mb-2 mb-lg-0">
                <CustomSearch
                  onSearch={handleSearch}
                  inputValue={searchValue}
                  plcHolder="جستجوی ترم"
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

export default AllTerms;
