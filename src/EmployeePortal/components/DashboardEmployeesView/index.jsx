import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get } from "lodash";
import { makeStyles } from "@material-ui/core/styles";

import Table from "../../../CommonComponents/Table";
import PrimaryButton from "../../../CommonComponents/PrimaryButton";

import { getEmployeesList } from "../../store/employeeStore/actions";

import { Container } from "../DashboardContainer";
import AlertDialog from "../../../CommonComponents/AlertDialog";
import SearchBarComponent from "../SearchBarComponent";
import EmployeeDetailsView from "../../components/EmployeeDetailsView";

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
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const store = useSelector((state) => get(state, ["employeeStore"], {}));
  const employees = get(store, "employees", {});
  const loader = get(store, "loader", false);

  useEffect(() => {
    dispatch(getEmployeesList({ page: 0 }));
  }, []);

  const resetModal = () => {
    setMenuItem(null);
    setSelectedEmployee(null);
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
          text="Are you sure, you want to delete this Employee?"
        />
      );
    }
  };

  const renderContent = () => {
    switch (menuItem) {
      case "Edit":
      case "Add":
      case "View":
        return (
          <EmployeeDetailsView
            employeeData={selectedEmployee}
            handleBackButtonClick={() => {
              resetModal();
            }}
          />
        );
      default:
        return renderEmployeeList();
    }
  };

  const renderEmployeeList = () => {
    return (
      <>
        {renderDeleteAlert()}
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
              setSelectedEmployee({});
            }}
            label="Add"
          />
        </div>
        <Table
          data={employees.content}
          dashboard
          noCount
          noPublish
          columnKeys={[
            { id: "personalEmailId", label: "Email Id" },
            { id: "firstName", label: "First Name" },
            { id: "lastName", label: "Last Name" },
            { id: "designation", label: "Designation" },
            { id: "skills", label: "Skills" },
            { id: "personalNumber", label: "Phone Number" },
          ]}
          rowsPerPage={employees.numberOfElements}
          count={employees.totalPages}
          totalElements={employees.totalElements}
          onSelectMenuItem={({ menu, row }) => {
            console.log(menu, row);
            setMenuItem(menu);
            setSelectedEmployee(row);
          }}
          onSelectTableRow={(row) => {
            setMenuItem("View");
            setSelectedEmployee(row);
          }}
        />
      </>
    );
  };

  return <Container loader={loader}>{renderContent()}</Container>;
};

export default DashboardEmployeesView;
