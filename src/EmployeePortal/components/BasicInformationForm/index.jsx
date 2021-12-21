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
  EMPLOYEE_DETAILS,
  UploadTypes,
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

const {
  id,
  emailId,
  firstName,
  lastName,
  shortName,
  designation,
  personalEmailId,
  phoneNumber,
  dateOfBirth,
  skills,
  startDate,
  endDate,
} = EMPLOYEE_DETAILS.BASIC_INFORMATION_IDS;

const BasicInformationForm = ({
  onClickCrossIcon,
  onClickSubmitButton,
  empData = {}
}) => {
  const classes = useStyles();
  const [error, setError] = useState({});
  const [data, setData] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);

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


  useEffect(() => {
    setIsDisabled(handleButtonIsDisabled(error, 3));
  }, [error]);

  const handleClick = () => {
    onClickSubmitButton(data);
  };
  return (
    <ModalInputsWrapper>
      <CloseOutlinedIcon className={classes.root} onClick={onClickCrossIcon} />
      <YourReferralText>Fill Basic Information application</YourReferralText>
      <Fields>
        <TextInput
          id={id}
          label="Id"
          onChange={handleChange}
          error={error[id]}
          cssClass={classes.field}
          defaultValue={empData.id}
        />
        <TextInput
          id={emailId}
          label="Email Id"
          onChange={handleChange}
          error={error[emailId]}
          cssClass={classes.field}
          defaultValue={empData.emailId}
        />
        <TextInput
          id={firstName}
          label={jobApplicationConstants.firstName}
          onChange={handleChange}
          error={error[firstName]}
          cssClass={classes.field}
          defaultValue={empData.firstName}
        />
        <TextInput
          id={lastName}
          label={jobApplicationConstants.lastName}
          onChange={handleChange}
          error={error[lastName]}
          cssClass={classes.field}
          defaultValue={empData.lastName}
        />
        <TextInput
          id={shortName}
          label="Short Name"
          onChange={handleChange}
          error={error[shortName]}
          cssClass={classes.field}
          defaultValue={empData.shortName}
        />
        <TextInput
          id={designation}
          label="Designation"
          onChange={handleChange}
          error={error[designation]}
          cssClass={classes.field}
          defaultValue={empData.designation}
        />
        <TextInput
          id={personalEmailId}
          label="Personal Email"
          onChange={handleChange}
          error={error[personalEmailId]}
          cssClass={classes.field}
          defaultValue={empData.personalEmailId}
        />
        <TextInput
          id={phoneNumber}
          label="Phone Number"
          onChange={handleChange}
          error={error[phoneNumber]}
          cssClass={classes.field}
          defaultValue={empData.phoneNumber}
        />
        <TextInput
          id={dateOfBirth}
          label="Date Of Birth"
          onChange={handleChange}
          error={error[dateOfBirth]}
          cssClass={classes.field}
          defaultValue={empData.dateOfBirth}
        />
        <TextInput
          id={skills}
          label="Skills"
          onChange={handleChange}
          error={error[skills]}
          cssClass={classes.field}
          defaultValue={empData.skills}
        />
        <TextInput
          id={startDate}
          label="Start Date"
          onChange={handleChange}
          error={error[startDate]}
          cssClass={classes.field}
          defaultValue={empData.startDate}
        />
        <TextInput
          id={endDate}
          label="End Date"
          onChange={handleChange}
          error={error[endDate]}
          cssClass={classes.field}
          defaultValue={empData.endDate}
        />
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

BasicInformationForm.propTypes = {
  onClickCrossIcon: PropTypes.func.isRequired,
  onClickSubmitButton: PropTypes.func.isRequired,
  referral: PropTypes.object.isRequired,
};
export default BasicInformationForm;
