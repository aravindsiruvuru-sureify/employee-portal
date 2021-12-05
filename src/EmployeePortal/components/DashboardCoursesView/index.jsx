import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { get } from "lodash";
import { makeStyles } from "@material-ui/core/styles";

import MainContainer from "../../components/MainContainer";

import Table from "../../../CommonComponents/Table";
import Modal from "../../../CommonComponents/Modal";
import PrimaryButton from "../../../CommonComponents/PrimaryButton";

import { getDashboardPageCoursesList } from "../../store/employeeStore/actions";
import colors from "../../themes/colors";

import CourseApplicationForm from "../CourseApplicationForm";
import { createCourse } from "../../services/ApiService/actions";

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
    dispatch(getDashboardPageCoursesList());
    setLoader(false);
  }, []);

  const resetModal = () => {
    setMenuItem(null);
    setSelectedCourse(null);
  };

  const getMenuModalContent = () => {
    switch (menuItem) {
      case "Edit":
      case "Add":
        return (
          <CourseApplicationForm
            onClickSubmitButton={(data) => {
              console.log(data);
              createCourseData({ ...data, publish: false });
            }}
            onClickCrossIcon={() => {
              resetModal();
            }}
          />
        );
      default:
        break;
    }
    return <h1>{menuItem}</h1>;
  };

  const getCourseDetailsModalContent = () => {
    return <h1>Course details</h1>;
  };

  const getModalContent = () => {
    console.log(menuItem, selectedCourse);
    if (menuItem && selectedCourse) {
      return getMenuModalContent();
    }
    if (selectedCourse) {
      return getCourseDetailsModalContent();
    }
    return null;
  };

  const createCourseData = async (data) => {
    await createCourse(data);
  };

  const getMenuItem = () => {
    return ["Edit", "Delete", "Publish"];
  };

  return (
    <Container>
      <Modal open={!!(menuItem || selectedCourse)} handleClose={() => {}}>
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
            setSelectedCourse({});
          }}
          label="Add"
        />
      </div>
      <Table
        data={coursesData.content}
        dashboard
        columnKeys={[
          "courseName",
          "courseCode",
          "type",
          "duration",
          "regEndDate",
          "fee",
        ]}
        rowsPerPage={coursesData.numberOfElements}
        menuItems={getMenuItem()}
        count={coursesData.totalPages}
        totalElements={coursesData.totalElements}
        onSelectMenuItem={({ menu, course }) => {
          if (menu === "Publish") {
            console.log("Publish");
            createCourseData({ ...course, publish: true });
          } else {
            setMenuItem(menu);
            setSelectedCourse(course);
          }
        }}
        onSelectTableRow={(row) => {
          setSelectedCourse(row);
        }}
      />
    </Container>
  );
};

export default DashboardCoursesView;
