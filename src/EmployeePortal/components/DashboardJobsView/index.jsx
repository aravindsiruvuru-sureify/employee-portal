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

const DashboardJobsView = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [loader, setLoader] = useState(true);
  const [menuItem, setMenuItem] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);

  const store = useSelector((state) => get(state, ["employeeStore"], {}));
  const jobsData = get(store, "jobsData", {});
  useEffect(() => {
    setLoader(true);
    dispatch(getDashboardPageJobsList());
    setLoader(false);
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
            }}
            // applicationData={selectedJob}
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
  return (
    <Container>
      <Modal
        open={!!(menuItem || selectedJob)}
        handleClose={() => {
          resetModal();
        }}
      >
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
            setSelectedJob({});
          }}
          label="Add"
        />
      </div>
      <Table
        dashboard
        data={jobsData.content}
        columnKeys={[
          "ref",
          "title",
          "experience",
          "experienceLevel",
          "location",
          "postedOn",
          "primarySkill",
        ]}
        rowsPerPage={jobsData.numberOfElements}
        count={jobsData.totalPages}
        totalElements={jobsData.totalElements}
        onSelectMenuItem={({ menu, job }) => {
          if (menu === "Publish" || menu === "Hide") {
            console.log("Publish");
            createJobData({ ...job, publish: !job.publish });
          } else {
            setMenuItem(menu);
            setSelectedJob(job);
          }
        }}
        onSelectTableRow={(row) => {
          console.log("oooo", row);
          setSelectedJob(row);
        }}
      />
    </Container>
  );
};

export default DashboardJobsView;
