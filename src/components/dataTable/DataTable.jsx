import React, { useState } from "react";
import "./dataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userRows, userColoumns } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";

function DataTable() {
  const [rowData, setRowData] = useState(userRows);
  const { pathname } = useLocation();

  function handleDelete(id) {
    setRowData(rowData.filter((user) => user.id !== id));
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`${pathname}/id`} style={{ textDecoration: "none" }}>
              <div className="viewBtn">View</div>
            </Link>
            <div
              className="deleteBtn"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="dataTable">
      <div className="dataTableTitle">
        Add New {pathname.split("/")}
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="dataGrid"
        rows={rowData}
        columns={userColoumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

export default DataTable;
