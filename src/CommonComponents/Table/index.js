import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import { Table as MuiTable } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import JobDetailsApplicationForm from "../../EmployeePortal/components/JobDetailsApplicationForm";

import Modal from "../Modal";

const Table = ({ data=[], columnKeys, rowsPerPage, count }) => {
  const [page, setPage] = useState(0);
  const [selectedJob, setSelectedJob] = useState(null);
  const columns = columnKeys.map((ck) => {
    return {
      id: ck,
      label: ck,
      align: "center",
    };
  });
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
  };

  const handleRowClick = (row) => () => {
    setSelectedJob(row);
  };

  const getModalContent = () => {
    return (
      selectedJob && (
        <JobDetailsApplicationForm
          jobDetails={selectedJob}
          onClickCrossIcon={() => {
            setSelectedJob(null);
          }}
        />
      )
    );
  };

  return (
    <>
      <Modal open={!!selectedJob} handleClose={() => {}}>
        {selectedJob && getModalContent()}
      </Modal>
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
                      onClick={handleRowClick(row)}
                      style={{ cursor: "pointer" }}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: 100, fontSize: 14 }}
                          >
                            {value === "number" ? column.format(value) : value}
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
        />
      </Paper>
    </>
  );
};

export default Table;
