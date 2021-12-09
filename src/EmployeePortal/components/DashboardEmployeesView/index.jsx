import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { get } from "lodash";
import { makeStyles } from "@material-ui/core/styles";

import Table from "../../../CommonComponents/Table";
import Modal from "../../../CommonComponents/Modal";
import PrimaryButton from "../../../CommonComponents/PrimaryButton";

import { getDashboardPageCoursesList } from "../../store/employeeStore/actions";

import CourseApplicationForm from "../CourseApplicationForm";
import { createCourse } from "../../services/ApiService/actions";
import { Container } from "../DashboardContainer";
import AlertDialog from "../../../CommonComponents/AlertDialog";

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

const DashboardEmployeesView = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [menuItem, setMenuItem] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const store = useSelector((state) => get(state, ["employeeStore"], {}));
  const coursesData = get(store, "coursesData", {});
  const loader = get(store, "loader", false);

  useEffect(() => {
    dispatch(getDashboardPageCoursesList());
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
              createCourseData({ ...data, publish: false, empId: "1" });
            }}
            onClickCrossIcon={() => {
              resetModal();
            }}
            course={selectedCourse}
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
    await dispatch(getDashboardPageCoursesList());
  };

  const updateCourse = async (course) => {
    await createCourseData({ ...course });
    await dispatch(getDashboardPageCoursesList());
  };

  const renderDeleteAlert = () => {
    if (menuItem === "Delete") {
      return (
        <AlertDialog
          handleAgreeClick={() => {
            resetModal();
          }}
          handleDisagreeClick={() => {
            resetModal();
          }}
          text="Are you sure, You want to delete this course?"
        />
      );
    }
  };

  const showModal = () => {
    return menuItem === null || menuItem === "Edit" || menuItem === "Add";
  };

  return (
    <Container loader={loader}>
      <>
        {renderDeleteAlert()}
        {showModal() && (
          <Modal open={!!(menuItem || selectedCourse)} handleClose={() => {}}>
            {getModalContent()}
          </Modal>
        )}
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
            { id: "courseCode", label: "Course code" },
            { id: "courseName", label: "Course name" },
            { id: "trainer", label: "Trainer" },
            { id: "type", label: "Type" },
            { id: "startDate", label: "Start date" },
            { id: "fee", label: "Fee" },
          ]}
          rowsPerPage={coursesData.numberOfElements}
          count={coursesData.totalPages}
          totalElements={coursesData.totalElements}
          onSelectMenuItem={({ menu, course }) => {
            if (menu === "Publish" || menu === "Unpublish") {
              updateCourse({ ...course, publish: course.publish });
            } else {
              setMenuItem(menu);
              setSelectedCourse(course);
            }
          }}
          onSelectTableRow={(row) => {
            setSelectedCourse(row);
          }}
        />
      </>
    </Container>
  );
};

export default DashboardEmployeesView;
