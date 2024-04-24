import React, { useEffect, useState, useMemo } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import AdminActions from "./AdminActions";
import { useValue } from "C:/Users/Dell/OneDrive/Desktop/SD/datagrid test/datagridtest/src/context/ContextProvider";
import { blueGrey, grey, red } from "@mui/material/colors";

//import data from './dataSource'
const HRAccess = () => {
  const [rowId, setrowId] = useState(null);

  const rows = [
    {
      name: "John",
      surname: "Doe",
      email: "john.doe@gmail.com",
      emp_type: "Staff",
      id: 1,
    },
    {
      name: "Jenny",
      surname: "Doe",
      email: "john.doe@gmail.com",
      emp_type: "Staff",
      id: 2,
    },
    {
      name: "Emily",
      surname: "Doe",
      email: "john.doe@gmail.com",
      emp_type: "Staff",
      id: 3,
    },
    {
      name: "John",
      surname: "Doe",
      email: "john.doe@gmail.com",
      emp_type: "Staff",
      id: 4,
    },
    {
      name: "John",
      surname: "Doe",
      email: "john.doe@gmail.com",
      emp_type: "Staff",
      id: 5,
    },
    {
      name: "John",
      surname: "Doe",
      email: "john.doe@gmail.com",
      emp_type: "Staff",
      id: 6,
    },
    {
      name: "John",
      surname: "Doe",
      email: "john.doe@gmail.com",
      emp_type: "Staff",
      id: 7,
    },
    {
      name: "John",
      surname: "Doe",
      email: "john.doe@gmail.com",
      emp_type: "Staff",
      id: 8,
    },
  ];
  const columns = [
    {
      field: "name",
      headerName: "Name",
      headerClassName: "headername",
      //headerAlign: 'center',
      width: 140,
    },
    {
      field: "surname",
      headerName: "Surname",
      width: 140,
      headerClassName: "headername",
    },
    {
      field: "emp_type",
      headerName: "Employee Type",
      width: 200,
      type: "singleSelect",
      valueOptions: ["staff", "manager", "admin"],
      editable: true,
      headerClassName: "headername",
    },
    {
      field: "Emp_ID",
      headerName: "ID",
      headerClassName: "headername",
      width: 100,
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      //renderCell: (params) => <AdminActions {...(params, rowId, setrowId)} />,
      renderCell: (params) => <button {...(params, rowId, setrowId)} />,
    },
  ];

  return (
    <Box
      sx={{
        height: 300,
        width: "100%",
        backgroundColor: red,
        padding: 8,
        "& .headername": {
          backgroundColor: "#456073",
          color: "white",
        },
      }}
    >
      <DataGrid
        rows={rows}
        onRowDoubleClick={
          (ids) => {
            const selectedIDs = new Set(ids);
            const selectedRowData = rows.filter((row) =>
              selectedIDs.has(row.id)
            );
            console.log(selectedRowData);
            console.log(selectedIDs);
          }
          // onRowSelectionModelChange={(ids) => {
          //   const selectedIDs = new Set(ids);
          //   const selectedRowData = rows.filter((row) => selectedIDs.has(row.id));
          //   console.log(selectedRowData);
          //   console.log(selectedIDs);
          // }}
        }
        columns={columns}
        sx={{
          height: 600,
          width: "90%",
          gap: 5,
          textAlign: "center",
          boxShadow: 2,
          border: 2,
          borderColor: "black",
          backgroundColor: "#ECF0EF",
          fontFamily: "sans-serif",
        }}
      />
    </Box>
  );
};

export default HRAccess;
