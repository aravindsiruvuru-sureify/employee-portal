import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Card } from "@material-ui/core";
import { isEmpty } from "lodash";

import { PrimaryButton } from "../../../CommonComponents";

import { CardActions, JobTitle, PostedLabel } from "./styles";

import Modal from "../../../CommonComponents/Modal";

import ReferralForm from "../../components/ReferralForm";
import JobDetails from "../../components/JobDetails";

import { JobDetailsShort } from "./shared";

const useStyles = makeStyles({
  card: {
    width: "75%",
    margin: "16px",
    padding: "26px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  learnMoreButton: {
    color: "#1B496B",
    marginLeft: "16px",
    textTransform: "none",
    fontSize:'14px',
  },
  applyButton: {
    backgroundColor: "#009933",
    fontSize:'14px',
    "&:focus": {
      backgroundColor: "#336600",
    },
    "&:hover": {
      backgroundColor: "#336600",
    },
  },
});

const JobCard = (props) => {
  const { job } = props;
  const classes = useStyles();
  const [selectedJob, setSelectedJob] = useState(null);

  const handleCardClick = (job) => {
    setSelectedJob(job);
  };

  const getApplicationForm = () => {
    return (
      <ReferralForm
        onClickCrossIcon={() => {
          setSelectedJob(null);
        }}
        onClickSubmitButton={() => {}}
        referral={job}
      />
    );
  };

  const getModalContent = () => {
    return isEmpty(selectedJob) ? (
      getApplicationForm()
    ) : (
      <JobDetails
        jobDetails={selectedJob}
        onClickCrossIcon={() => {
          setSelectedJob(null);
        }}
      />
    );
  };

  return (
    <>
      <Modal open={!!selectedJob} handleClose={() => {}}>
        {getModalContent()}
      </Modal>
      <Card className={classes.card}>
        <JobTitle>{job.title}</JobTitle>
        <JobDetailsShort job={job} />
        <CardActions>
          <PrimaryButton
            handleClick={() => {
              handleCardClick({});
            }}
            label="Apply"
            cssClass={classes.applyButton}
          />
          <Button
            color="primary"
            className={classes.learnMoreButton}
            onClick={() => {
              handleCardClick(job);
            }}
          >
            Learn More
          </Button>
        </CardActions>
        <div style={{ display: "flex", marginTop: "12px" }}>
          <PostedLabel>
            <i> Posted on: {job.postedOn}</i>
          </PostedLabel>
        </div>
      </Card>
    </>
  );
};

export default JobCard;
