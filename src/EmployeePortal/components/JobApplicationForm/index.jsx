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
  MIN3CHARS_ERROR_TEXT,
  EMAIL_ERROR_TEXT,
  PHONENUMBER_ERROR_TEXT,
} from "../../constants";
import { YourReferralText } from "./styles";
import {
  TextInput,
  PrimaryButton,
  UploadButton,
  DatePicker,
} from "../../../CommonComponents";
import colors from "../../themes/colors";
import { ModalInputsWrapper, Fields } from "..";

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
    top: "30px",
    right: "30px",
    position: "absolute",
    cursor: "pointer",
  },
  button: {
    marginTop: "15px",
    width: "90px",
    fontSize: "14px",
  },
});

const { firstName, lastName, emailId, phoneNo, link, location, country } =
  JOB_APPLICATION_IDS;

const JobApplicationForm = ({
  onClickCrossIcon,
  onClickSubmitButton,
  course = false,
}) => {
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
    setIsDisabled(handleButtonIsDisabled(error, 6));
  }, [error]);

  const handleClick = () => {
    onClickSubmitButton(data);
  };
  return (
    <ModalInputsWrapper>
      <CloseOutlinedIcon className={classes.root} onClick={onClickCrossIcon} />
      <YourReferralText>
        {course ? "Fill you course enroll form" : "Fill your job application"}
      </YourReferralText>
      <Fields>
        <TextInput
          id={firstName}
          label={jobApplicationConstants.firstName}
          onChange={handleChange}
          error={error[firstName]}
          cssClass={classes.field}
          helperText={MIN3CHARS_ERROR_TEXT}
        />
        <TextInput
          id={lastName}
          label={jobApplicationConstants.lastName}
          onChange={handleChange}
          error={error[lastName]}
          cssClass={classes.field}
          helperText={MIN3CHARS_ERROR_TEXT}
        />
        <TextInput
          id={emailId}
          label={jobApplicationConstants.email}
          onChange={handleChange}
          error={error[emailId]}
          cssClass={classes.field}
          helperText={EMAIL_ERROR_TEXT}
        />
        <TextInput
          id={location}
          label={jobApplicationConstants.location}
          onChange={handleChange}
          error={error[location]}
          cssClass={classes.field}
          helperText={MIN3CHARS_ERROR_TEXT}
        />
        <TextInput
          id={country}
          label={jobApplicationConstants.country}
          onChange={handleChange}
          error={error[country]}
          cssClass={classes.field}
          helperText={MIN3CHARS_ERROR_TEXT}
        />
        <TextInput
          id={phoneNo}
          label={jobApplicationConstants.number}
          onChange={handleChange}
          error={error[phoneNo]}
          cssClass={classes.field}
          helperText={PHONENUMBER_ERROR_TEXT}
        />
        {!course && (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <UploadButton
              label="Upload Resume"
              setUrl={setUrl}
              dir="referral"
              type={UploadTypes.file}
              prevUrl={resumeUrl}
            />
            {!course && resumeUrl && (
              <PrimaryButton
                handleClick={() => {
                  window.open(resumeUrl);
                }}
                label="View"
              />
            )}
          </div>
        )}
      </Fields>

      <PrimaryButton
        handleClick={handleClick}
        cssClass={classes.button}
        label="Submit"
        isDisabled={isDisabled}
      />
    </ModalInputsWrapper>
  );
};

JobApplicationForm.propTypes = {
  onClickCrossIcon: PropTypes.func.isRequired,
  onClickSubmitButton: PropTypes.func.isRequired,
  referral: PropTypes.object.isRequired,
};
export default JobApplicationForm;
