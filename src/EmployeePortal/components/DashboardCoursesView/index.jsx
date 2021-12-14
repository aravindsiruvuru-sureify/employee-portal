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
import SearchBarComponent from "../SearchBarComponent";

import { deleteCourseById } from "../../services/ApiService/actions";

import CoursesDetails from "../CoursesDetails";
import { DisplayUsers } from "../DashboardJobsView/shared";

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
  const [menuItem, setMenuItem] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const store = useSelector((state) => get(state, ["employeeStore"], {}));
  const coursesData = get(store, "coursesData", {});
  const loader = get(store, "loader", false);

  useEffect(() => {
    dispatch(getDashboardPageCoursesList({ page: 0 }));
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
              createCourseData({ ...data, empId: "1" });
              resetModal();
            }}
            onClickCrossIcon={() => {
              resetModal();
            }}
            course={selectedCourse}
          />
        );
      case "count":
        return (
          <DisplayUsers
            row={selectedCourse}
            isCourse
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
    return (
      <CoursesDetails
        courseDetails={selectedCourse}
        onClickCrossIcon={() => {
          resetModal();
        }}
        isDashboard={true}
      />
    );
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
    await dispatch(getDashboardPageCoursesList({ page: 0 }));
  };

  const updateCourse = async (course) => {
    await createCourseData({ ...course });
    await dispatch(getDashboardPageCoursesList({ page: coursesData.number }));
  };

  const renderDeleteAlert = () => {
    if (menuItem === "Delete") {
      return (
        <AlertDialog
          handleAgreeClick={async () => {
            console.log(selectedCourse);
            await deleteCourseById({ id: selectedCourse.courseCode });
            await dispatch(getDashboardPageCoursesList({ page: 0 }));
            resetModal();
          }}
          handleDisagreeClick={() => {
            resetModal();
          }}
          text="Are you sure, you want to delete this course?"
        />
      );
    }
  };

  const showModal = () => {
    return (
      menuItem === null ||
      menuItem === "Edit" ||
      menuItem === "Add" ||
      menuItem === "count"
    );
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
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 0",
          }}
        >
          <SearchBarComponent
            onCancelSearch={() => {}}
            onRequestSearch={() => {}}
          />
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
          page={coursesData.number}
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
          count={coursesData.totalElements}
          onSelectMenuItem={({ menu, row }) => {
            if (menu === "Publish" || menu === "Unpublish") {
              updateCourse({ ...row, publish: !row.publish });
            } else {
              setMenuItem(menu);
              setSelectedCourse(row);
            }
          }}
          onSelectTableRow={(row) => {
            setSelectedCourse(row);
          }}
          gotoNextPage={(page) => {
            dispatch(getDashboardPageCoursesList({ page }));
          }}
          handleCountClick={({ row, menu }) => {
            setMenuItem(menu);
            setSelectedCourse(row);
          }}
        />
      </>
    </Container>
  );
};

export default DashboardCoursesView;
