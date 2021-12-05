import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { get } from "lodash";
import { makeStyles } from "@material-ui/core/styles";

import MainContainer from "../../components/MainContainer";

import Table from "../../../CommonComponents/Table";
import Modal from "../../../CommonComponents/Modal";
import PrimaryButton from "../../../CommonComponents/PrimaryButton";

import { getCoursesList } from "../../store/employeeStore/actions";
import colors from "../../themes/colors";

export const Container = styled.div`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: none !important;
  margin-bottom: unset !important;
`;

const useStyles = makeStyles({
  root: {
    fontSize: "14px",
    // backgroundColor: colors.primary,
    // "&:focus": {
    //   backgroundColor: "#234e6e",
    // },
    // "&:hover": {
    //   backgroundColor: "#1b496b",
    // },
    textTransform: "none",
  },
});

const DashboardCoursesView = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [loader, setLoader] = useState(true);
  const [menuItem, setMenuItem] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const store = useSelector((state) => get(state, ["employeeStore"], {}));
  const coursesData = get(store, "coursesData", {});
  useEffect(() => {
    setLoader(true);
    dispatch(getCoursesList());
    setLoader(false);
  }, []);

  const getModalContent = () => {
    switch (menuItem) {
      case "Edit":
      case "Add":
        return <h1>Add</h1>;
      default:
        break;
    }
    return <h1>{menuItem}</h1>;
  };

  return (
    <Container>
      <Modal open={!!menuItem} handleClose={() => {}}>
        {getModalContent()}
      </Modal>
      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "flex-end",
          padding: "20px 0",
        }}
      >
        <PrimaryButton
          className={classes.root}
          handleClick={() => {
            setMenuItem("Add");
          }}
          label="Add"
        />
      </div>
      <Table
        data={coursesData.content}
        columnKeys={[
          "courseName",
          "courseCode",
          "type",
          "duration",
          "regEndDate",
          "fee",
        ]}
        rowsPerPage={coursesData.numberOfElements}
        count={coursesData.totalPages}
        totalElements={coursesData.totalElements}
      />
    </Container>
  );
};

export default DashboardCoursesView;
