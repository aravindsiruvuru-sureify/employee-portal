import React, { useState, useEffect } from "react";
import { MenuItem, Menu, makeStyles } from "@material-ui/core";
import Paper from "@mui/material/Paper";
import { Table as MuiTable } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Checkbox from "@mui/material/Checkbox";
import check from "../../assets/svgs/check.png";
import checked from "../../assets/svgs/checked.png";

import "./style.css";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const useStyles = makeStyles((theme) => ({
  selectLabel: {
    fontSize: "14px",
  },
  menuItem: {
    fontSize: "14px",
  },
}));

const Table = ({
  data = [],
  columnKeys,
  rowsPerPage,
  count,
  dashboard = false,
  onSelectMenuItem,
  onSelectTableRow = () => {},
}) => {
  const [page, setPage] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  let columns = dashboard
    ? [{ id: "publish", label: "", align: "center" }]
    : [];
  columns = [
    ...columns,
    ...columnKeys.map((ck) => {
      return {
        ...ck,
        align: "center",
      };
    }),
    ...(dashboard ? [{ id: "more", label: "", align: "center" }] : []),
  ];
  console.log("----", columns);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
  };

  const handleRowClick = (row) => {
    onSelectTableRow(row);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    e && e.stopPropagation();
    e && e && e.preventDefault();
    setAnchorEl(null);
  };

  const renderMenu = ({ job }) => {
    let menuItems = [];

    if (job.publish) {
      menuItems = ["Edit", "Delete", "Hide"];
    } else {
      menuItems = ["Edit", "Delete", "Publish"];
    }
    return (
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={(e) => {
          e.stopPropagation();
          e.preventDefault();
          handleClose(e);
        }}
      >
        {menuItems.map((item) => {
          return (
            <MenuItem
              onClick={(e) => {
                e && e.stopPropagation();
                e && e.preventDefault();
                onSelectMenuItem({ menu: item, job });
                handleClose(e);
              }}
              className={classes.menuItem}
            >
              {item}
            </MenuItem>
          );
        })}
      </Menu>
    );
  };

  const getColumnValue = ({ row, column }) => {
    const value = row[column.id];
    if (column.id === "publish") {
      return (
        <Checkbox
          {...label}
          checked={row.publish}
          color="success"
          disableTouchRipple
          disableFocusRipple
        />
      );
    }
    if (column.id === "more") {
      return (
        <>
          <MoreVertIcon
            onClick={(e) => {
              e && e.stopPropagation();
              e && e.preventDefault();
              handleClick(e);
            }}
          />
          {renderMenu({ job: row })}
        </>
      );
    }
    return value === "number" ? column.format(value) : value;
  };

  return (
    <>
      <Paper sx={{ width: "90%", overflow: "hidden" }}>
        <TableContainer>
          <MuiTable stickyHeader aria-label="sticky table">
            <TableHead style={{ height: 80 }}>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: 100, fontSize: 14 }}
                  >
                    {`${
                      column.label.charAt(0).toUpperCase() +
                      column.label.slice(1)
                    }`}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.length &&
                data.map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.ref}
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        handleRowClick(row);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      {columns.map((column) => {
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: 100, fontSize: 14 }}
                          >
                            {getColumnValue({ row, column })}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </MuiTable>
        </TableContainer>
        <TablePagination
          // rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={count}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          className={classes.selectLabel}
        />
      </Paper>
    </>
  );
};

export default Table;
