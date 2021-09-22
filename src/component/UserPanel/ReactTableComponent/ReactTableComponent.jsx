import React, { Fragment } from 'react';
import { Table } from "reactstrap";
import { useSortBy, useTable } from "react-table";
import Alert from "../../common/Alert/Alert";
import styles from './ReactTableComponent.module.css';


// ReactTable Component
const ReactTableComponent = ({ tableColumns, allData, PaginatedRows, getCustomProps = null, children = null }) => {
  // React Table's Data
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns: tableColumns,
        data: allData,
      },
      useSortBy
    );

  return (
    <Fragment>
      {rows.length === 0 ? (
        <Alert />
      ) : (
        <Table {...getTableProps()} responsive className="my-3">
          <thead className={`${styles.tableHead}`}>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className={`${styles.tableBody}`}>
            {PaginatedRows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="mb-5">
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()} className="align-middle">
                        {cell.render("Cell", getCustomProps)}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
      {
        children
      }
      {/* {rows.length > 5 ? (
      ) : null} */}
    </Fragment>
  );
}

// React Table Filtered Rows Data function
const ReactTableFiltedredRowsData = (tableColumns, allData, searchValue, searchBase = "course.courseName") => {
  // React Table's Data
  const { rows } = useTable({
    columns: tableColumns,
    data: allData,
  });

  let data = [];
  data = rows.filter((row) => {
    if (searchValue === "") {
      return row;
    } else if (
      row.values[searchBase]
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    ) {
      return row;
    }
  });
  return { filteredData: data, count: data.length };
};


export { ReactTableComponent, ReactTableFiltedredRowsData };

export default ReactTableComponent;
