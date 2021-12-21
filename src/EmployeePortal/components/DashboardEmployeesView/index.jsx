import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { get } from "lodash";
import { makeStyles } from "@material-ui/core/styles";

import Table from "../../../CommonComponents/Table";
import Modal from "../../../CommonComponents/Modal";
import PrimaryButton from "../../../CommonComponents/PrimaryButton";

import { getEmployeesList } from "../../store/employeeStore/actions";

import CourseApplicationForm from "../CourseApplicationForm";
import { createCourse } from "../../services/ApiService/actions";
import { Container } from "../DashboardContainer";
import AlertDialog from "../../../CommonComponents/AlertDialog";
import SearchBarComponent from "../SearchBarComponent";

const useStyles = makeStyles({
  root: {
    fontSize: "14px",
    textTransform: "none",
  },
});

const DashboardEmployeesView = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [menuItem, setMenuItem] = useState(null);
  const [selectedEmployee, setselectedEmployee] = useState(null);

  const store = useSelector((state) => get(state, ["employeeStore"], {}));
  const employees = get(store, "employees", {});
  const loader = get(store, "loader", false);

  useEffect(() => {
    dispatch(getEmployeesList({ page: 0 }));
  }, []);

  const resetModal = () => {
    setMenuItem(null);
    setselectedEmployee(null);
  };

  const getMenuModalContent = () => {
    switch (menuItem) {
      case "Edit":
      case "Add":
        return <h1>Add employee</h1>;
      default:
        break;
    }
    return <h1>{menuItem}</h1>;
  };

  const getEmployeeDetailsModalContent = () => {
    return <h1>Course details</h1>;
  };

  const getModalContent = () => {
    if (menuItem && selectedEmployee) {
      return getMenuModalContent();
    }
    if (selectedEmployee) {
      return getEmployeeDetailsModalContent();
    }
    return null;
  };

  // const createEmployeeData = async (data) => {
  //   await createCourse(data);
  //   await dispatch(getEmployeesList());
  // };

  // const updateEmployee = async (course) => {
  //   await createEmployeeData({ ...course });
  //   await dispatch(getEmployeesList());
  // };

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
          text="Are you sure, you want to delete this employee?"
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
          <Modal open={!!(menuItem || selectedEmployee)} handleClose={() => {}}>
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
              setselectedEmployee({});
            }}
            label="Add"
          />
        </div>
        <Table
          data={employees.content}
          dashboard
          noCount={false}
          columnKeys={[
            { id: "emailId", label: "Email Id" },
            { id: "firstName", label: "First Name" },
            { id: "lastName", label: "Last Name" },
            { id: "designation", label: "Designation" },
            { id: "skills", label: "Skills" },
            { id: "location", label: "Location" },
          ]}
          rowsPerPage={employees.numberOfElements}
          count={employees.totalPages}
          totalElements={employees.totalElements}
          onSelectMenuItem={({ menu, course }) => {
            if (menu === "Publish" || menu === "Unpublish") {
              // updateCourse({ ...course, publish: course.publish });
            } else {
              setMenuItem(menu);
              setselectedEmployee(course);
            }
          }}
          onSelectTableRow={(row) => {
            setselectedEmployee(row);
          }}
        />
      </>
    </Container>
  );
};

export default DashboardEmployeesView;
