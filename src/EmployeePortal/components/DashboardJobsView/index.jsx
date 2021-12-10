import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { get } from "lodash";
import { makeStyles } from "@material-ui/core/styles";

import MainContainer from "../../components/MainContainer";

import Table from "../../../CommonComponents/Table";
import Modal from "../../../CommonComponents/Modal";
import PrimaryButton from "../../../CommonComponents/PrimaryButton";

import { getDashboardPageJobsList } from "../../store/employeeStore/actions";
import HRJobApplicationForm from "../HRJobApplicationForm";

import JobDetailsApplicationForm from "../JobDetailsApplicationForm";

import { createJob } from "../../services/ApiService/actions";
import { Container } from "../DashboardContainer";
import AlertDialog from "../../../CommonComponents/AlertDialog";

import SearchBarComponent from "../SearchBarComponent";

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

const DashboardJobsView = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [menuItem, setMenuItem] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);

  const store = useSelector((state) => get(state, ["employeeStore"], {}));
  const jobsData = get(store, "jobsData", {});
  const loader = get(store, "loader", false);

  useEffect(() => {
    dispatch(getDashboardPageJobsList());
  }, []);

  const resetModal = () => {
    setMenuItem(null);
    setSelectedJob(null);
  };

  const getMenuModalContent = () => {
    switch (menuItem) {
      case "Edit":
      case "Add":
        return (
          <HRJobApplicationForm
            onClickCrossIcon={() => {
              resetModal();
            }}
            onClickSubmitButton={(data) => {
              console.log(data);
              createJobData({ ...data, publish: false, empId: "1" });
              dispatch(getDashboardPageJobsList());
              resetModal();
            }}
            applicationData={selectedJob}
          />
        );
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

  const createJobData = async (data) => {
    await createJob(data);
  };

  const updateJob = async (job) => {
    await createJobData({ ...job });
    await dispatch(getDashboardPageJobsList());
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
          text="Are you sure, You want to delete this job?"
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
          <SearchBarComponent />
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
          data={jobsData.content}
          columnKeys={[
            { id: "ref", label: "Job code" },
            { id: "title", label: "Title" },
            { id: "experience", label: "Experience" },
            { id: "location", label: "Location" },
            { id: "contractType", label: "Contract type" },
            { id: "primarySkill", label: "Primary skill" },
          ]}
          rowsPerPage={jobsData.numberOfElements}
          count={jobsData.totalPages}
          totalElements={jobsData.totalElements}
          onSelectMenuItem={({ menu, job }) => {
            if (menu === "Publish" || menu === "Unpublish") {
              updateJob({ ...job, publish: !job.publish });
            } else {
              setMenuItem(menu);
              setSelectedJob(job);
            }
          }}
          onSelectTableRow={(row) => {
            setSelectedJob(row);
          }}
        />
      </>
    </Container>
  );
};

export default DashboardJobsView;
