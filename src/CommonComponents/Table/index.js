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
import CircleChecked from "@material-ui/icons/CheckCircleOutline";
import Brightness1OutlinedIcon from "@material-ui/icons/Brightness1Outlined";

import "./style.css";

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
  page = 0,
  count,
  dashboard = false,
  onSelectMenuItem,
  onSelectTableRow = () => {},
  gotoNextPage = () => {},
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  let columns = dashboard
    ? [
        { id: "publish", label: "Published", align: "center" },
        { id: "count", label: "Count" },
      ]
    : [];
  columns = [
    ...columnKeys.map((ck) => {
      return {
        ...ck,
        align: "center",
      };
    }),
    ...columns,
    ...(dashboard ? [{ id: "more", label: "", align: "center" }] : []),
  ];
  const handleChangePage = (event, newPage) => {
    gotoNextPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {};

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

  const renderMenu = ({ row }) => {
    const publishMenuItem = row.publish ? "Unpublish" : "Publish";
    console.log("----", publishMenuItem);
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
        <MenuItem
          onClick={(e) => {
            e && e.stopPropagation();
            e && e.preventDefault();
            onSelectMenuItem({ menu: "Edit", row });
            handleClose(e);
          }}
          className={classes.menuItem}
        >
          Edit
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            e && e.stopPropagation();
            e && e.preventDefault();
            onSelectMenuItem({ menu: "Delete", row });
            handleClose(e);
          }}
          className={classes.menuItem}
        >
          Delete
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            e && e.stopPropagation();
            e && e.preventDefault();
            onSelectMenuItem({
              menu: publishMenuItem,
              row,
            });
            handleClose(e);
          }}
          className={classes.menuItem}
        >
          {publishMenuItem}
        </MenuItem>
      </Menu>
    );
  };

  const getColumnValue = ({ row, column }) => {
    const value = row[column.id];
    if (column.id === "publish") {
      return row.publish ? (
        <CircleChecked style={{ color: "green" }} />
      ) : (
        <Brightness1OutlinedIcon />
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
          {renderMenu({ row })}
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
          rowsPerPageOptions={[]}
          component="div"
          count={count || 1}
          rowsPerPage={rowsPerPage || 1}
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
