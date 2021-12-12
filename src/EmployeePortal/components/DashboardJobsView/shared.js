import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

import {
  getJobApplicants,
  getCourseApplicants,
} from "../../services/ApiService/actions";

import Table from "../../../CommonComponents/Table";

const useStyles = makeStyles({
  root: {
    top: "30px",
    right: "30px",
    position: "absolute",
    cursor: "pointer",
  },
});
export const DisplayUsers = ({
  row,
  isCourse = false,
  onClickCrossIcon = () => {},
}) => {
  const [data, setData] = useState({});
  const classes = useStyles();

  const getApplicants = async () => {
    let res = {};
    if (isCourse) {
      res = await getCourseApplicants({ courseId: row.courseCode, page: 0 });
    } else {
      res = await getJobApplicants({ jobId: row.ref, page: 0 });
    }
    console.log(res.data.content);
    setData(res.data);
  };

  useEffect(() => {
    getApplicants();
  }, []);

  return (
    <div style={{ padding: "40px 0", position: "relative" }}>
      <CloseOutlinedIcon
        className={classes.root}
        onClick={onClickCrossIcon}
        style={{ color: "black" }}
      />
      <Table
        data={data.content || []}
        columnKeys={[
          { id: "firstName", label: "First Name" },
          { id: "lastName", label: "Last Name" },
          { id: "emailId", label: "Email Id" },
          { id: "location", label: "Location" },
          { id: "phoneNo", label: "Phone Number" },
        ]}
        page={data.number}
        count={data.totalElements}
        rowsPerPage={data.numberOfElements}
      />
    </div>
  );
};
