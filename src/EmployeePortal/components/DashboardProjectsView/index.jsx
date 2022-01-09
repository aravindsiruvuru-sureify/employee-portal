import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { get } from "lodash";
import { makeStyles } from "@material-ui/core/styles";

import MainContainer from "../../components/MainContainer";

import Table from "../../../CommonComponents/Table";
import Modal from "../../../CommonComponents/Modal";
import PrimaryButton from "../../../CommonComponents/PrimaryButton";

import {
  getDashboardPageJobsList,
  getProjectsList,
} from "../../store/employeeStore/actions";
import HRJobApplicationForm from "../HRJobApplicationForm";

import JobDetailsApplicationForm from "../JobDetailsApplicationForm";

import { createJob } from "../../services/ApiService/actions";
import { Container } from "../DashboardContainer";
import AlertDialog from "../../../CommonComponents/AlertDialog";

import SearchBarComponent from "../SearchBarComponent";

import { deleteJobById } from "../../services/ApiService/actions";

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

const DashboardProjectsView = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [menuItem, setMenuItem] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);

  const store = useSelector((state) => get(state, ["employeeStore"], {}));
  const projects = get(store, "projects", {});
  const loader = get(store, "loader", false);

  useEffect(() => {
    dispatch(getProjectsList({ page: 0 }));
  }, []);

  const resetModal = () => {
    setMenuItem(null);
    setSelectedJob(null);
  };

  const createJobData = async (data) => {
    await createJob(data);
    await dispatch(getDashboardPageJobsList({ page: 0 }));
  };

  const updateJob = async (job) => {
    await createJobData({ ...job });
    await dispatch(getDashboardPageJobsList({ page: projects.number }));
  };

  const getMenuModalContent = () => {
    switch (menuItem) {
      case "Edit":
      case "Add":
        return <p>Add</p>;
      default:
        break;
    }
    return <h1>{menuItem}</h1>;
  };

  const getJobDetailsModalContent = () => {
    return (
      <JobDetailsApplicationForm
        jobDetails={selectedJob}
        onClickCrossIcon={() => {
          resetModal();
        }}
        dashboard
      />
    );
  };

  const getModalContent = () => {
    if (menuItem && selectedJob) {
      return getMenuModalContent();
    }
    if (selectedJob) {
      return getJobDetailsModalContent();
    }
    return null;
  };

  const renderDeleteAlert = () => {
    if (menuItem === "Delete") {
      return (
        <AlertDialog
          handleAgreeClick={async () => {
            await deleteJobById({ id: selectedJob.ref });
            await dispatch(getDashboardPageJobsList({ page: 0 }));
            resetModal();
          }}
          handleDisagreeClick={() => {
            resetModal();
          }}
          text="Are you sure, you want to delete this job?"
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
  console.log(projects);
  return (
    <Container loader={loader}>
      <>
        {renderDeleteAlert()}
        {showModal() && (
          <Modal
            open={!!(menuItem || selectedJob)}
            handleClose={() => {
              resetModal();
            }}
          >
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
            onRequestSearch={(val) => {
              console.log(val);
            }}
          />
          <PrimaryButton
            className={classes.root}
            handleClick={() => {
              setMenuItem("Add");
              setSelectedJob({});
            }}
            label="Add"
          />
        </div>
        <Table
          dashboard
          page={projects.number}
          data={projects}
          columnKeys={[
            { id: "projectName", label: "Project Name" },
            { id: "client", label: "Client" },
            { id: "clientLocation", label: "Location" },
            { id: "startDate", label: "Start Date" },
            { id: "endDate", label: "End Date" },
          ]}
          rowsPerPage={projects.numberOfElements}
          count={projects.totalElements}
          onSelectMenuItem={({ menu, row }) => {
            if (menu === "Publish" || menu === "Unpublish") {
              updateJob({ ...row, publish: !row.publish });
            } else {
              setMenuItem(menu);
              setSelectedJob(row);
            }
          }}
          onSelectTableRow={(row) => {
            setSelectedJob(row);
          }}
          gotoNextPage={(page) => {
            dispatch(getDashboardPageJobsList({ page }));
          }}
          handleCountClick={({ row, menu }) => {
            setMenuItem(menu);
            setSelectedJob(row);
          }}
        />
      </>
    </Container>
  );
};

export default DashboardProjectsView;
