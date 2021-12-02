/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

import { PropTypes } from "prop-types";

import { handleButtonIsDisabled, handleHasError } from "../../utils/formUtils";
import {
  jobApplicationConstants,
  ROLE,
  ROLES,
  JOB_APPLICATION_IDS,
  UploadTypes,
} from "../../constants";
import { Fields, YourReferralText } from "./styles";
import {
  TextInput,
  PrimaryButton,
  UploadButton,
} from "../../../CommonComponents";
import colors from "../../themes/colors";

const useStyles = makeStyles({
  field: {
    margin: "15px 0",
    width: "100%",
    "& .MuiFilledInput-root ": {
      fontSize: "14px",
      background: `#F0F0F0`,
    },
    "& .MuiList-root ": {
      "z-index": 1000001,
    },
    "& .MuiInputLabel-filled": {
      fontSize: "14px",
    },
  },
  root: {
    top: "20px",
    right: "10px",
    position: "absolute",
    cursor: "pointer",
  },
  button: {
    marginTop: "15px",
    width: "90px",
    fontSize: "14px",
  },
});

const { firstName, lastName, emailId, phoneNo, link } = JOB_APPLICATION_IDS;

const JobApplicationForm = ({ onClickCrossIcon, onClickSubmitButton }) => {
  const classes = useStyles();
  const [error, setError] = useState({});
  const [data, setData] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);
  const [resumeUrl, setResumeUrl] = useState("");

  const handleError = (id, value) => {
    const hasError = handleHasError(id, value);
    setError((err) => {
      return {
        ...err,
        [id]: hasError,
      };
    });
  };

  const handleChange = (e) => {
    const { id, name, value } = e.target;
    const key = id || name;
    handleError(key, value);
    setData({
      ...data,
      [key]: value,
    });
  };

  const setUrl = (url) => {
    setResumeUrl(url);
    handleChange({
      target: {
        id: link,
        value: url,
      },
    });
  };

  useEffect(() => {
    setIsDisabled(handleButtonIsDisabled(error, 3));
  }, [error]);

  const handleClick = () => {
    onClickSubmitButton(data);
  };

  return (
    <Fields>
      <CloseOutlinedIcon className={classes.root} onClick={onClickCrossIcon} />
      <YourReferralText>Fill your job application</YourReferralText>
      <TextInput
        id={firstName}
        label={jobApplicationConstants.firstName}
        onChange={handleChange}
        error={error[firstName]}
        cssClass={classes.field}
      />
      <TextInput
        id={lastName}
        label={jobApplicationConstants.lastName}
        onChange={handleChange}
        error={error[lastName]}
        cssClass={classes.field}
      />
      <TextInput
        id={emailId}
        label={jobApplicationConstants.email}
        onChange={handleChange}
        error={error[emailId]}
        cssClass={classes.field}
      />
      <TextInput
        id={phoneNo}
        label={jobApplicationConstants.number}
        onChange={handleChange}
        error={error[phoneNo]}
        cssClass={classes.field}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <UploadButton
          label="Upload Resume"
          setUrl={setUrl}
          dir="referral"
          type={UploadTypes.file}
          prevUrl={resumeUrl}
        />
        {resumeUrl && (
          <PrimaryButton
            handleClick={() => {
              window.open(resumeUrl);
            }}
            label="View"
          />
        )}
      </div>
      <PrimaryButton
        handleClick={handleClick}
        cssClass={classes.button}
        label="Submit"
        isDisabled={isDisabled}
      />
    </Fields>
  );
};

JobApplicationForm.propTypes = {
  onClickCrossIcon: PropTypes.func.isRequired,
  onClickSubmitButton: PropTypes.func.isRequired,
  referral: PropTypes.object.isRequired,
};
export default JobApplicationForm;
