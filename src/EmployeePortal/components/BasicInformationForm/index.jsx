/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

import { PropTypes } from "prop-types";

import { handleButtonIsDisabled, handleHasError } from "../../utils/formUtils";
import {
  jobApplicationConstants,
  EMPLOYEE_DETAILS,
  EMAIL_ERROR_TEXT,
  MIN3CHARS_ERROR_TEXT,
  MIN1CHARS_ERROR_TEXT,
  PHONENUMBER_ERROR_TEXT,
  INVALID_DATE,
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
  officialEmailId,
  firstName,
  lastName,
  shortName,
  designation,
  personalEmailId,
  personalNumber,
  dateOfBirth,
  skills,
  joinDate,
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
    console.log(error,id,value);
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
    console.log(error)
    setIsDisabled(handleButtonIsDisabled(error, 10));
  }, [error]);

  const handleClick = () => {
    onClickSubmitButton(data);
  };

  return (
    <ModalInputsWrapper>
      <CloseOutlinedIcon className={classes.root} onClick={onClickCrossIcon} />
      <YourReferralText>Basic Information application</YourReferralText>
      <Fields>
        <TextInput
          id={id}
          label="Id"
          onChange={handleChange}
          error={error[id]}
          cssClass={classes.field}
          defaultValue={empData.id}
          helperText={MIN1CHARS_ERROR_TEXT}
        />
        <TextInput
          id={officialEmailId}
          label="Official Email Id"
          onChange={handleChange}
          error={error[officialEmailId]}
          cssClass={classes.field}
          helperText={EMAIL_ERROR_TEXT}
          defaultValue={empData.officialEmailId}
        />
        <TextInput
          id={firstName}
          label={jobApplicationConstants.firstName}
          onChange={handleChange}
          error={error[firstName]}
          cssClass={classes.field}
          defaultValue={empData.firstName}
          helperText={MIN3CHARS_ERROR_TEXT}
        />
        <TextInput
          id={lastName}
          label={jobApplicationConstants.lastName}
          onChange={handleChange}
          error={error[lastName]}
          cssClass={classes.field}
          defaultValue={empData.lastName}
          helperText={MIN3CHARS_ERROR_TEXT}
        />
        <TextInput
          id={shortName}
          label="Short Name"
          onChange={handleChange}
          error={error[shortName]}
          cssClass={classes.field}
          defaultValue={empData.shortName}
          helperText={MIN3CHARS_ERROR_TEXT}
        />
        <TextInput
          id={designation}
          label="Designation"
          onChange={handleChange}
          error={error[designation]}
          cssClass={classes.field}
          defaultValue={empData.designation}
          helperText={MIN3CHARS_ERROR_TEXT}
        />
        <TextInput
          id={personalEmailId}
          label="Personal Email"
          onChange={handleChange}
          error={error[personalEmailId]}
          cssClass={classes.field}
          defaultValue={empData.personalEmailId}
          helperText={EMAIL_ERROR_TEXT}
        />
        <TextInput
          id={personalNumber}
          label="Phone Number"
          onChange={handleChange}
          error={error[personalNumber]}
          cssClass={classes.field}
          defaultValue={empData.personalNumber}
          helperText={PHONENUMBER_ERROR_TEXT}
        />
        <DatePicker
          handleChange={handleChange}
          id={joinDate}
          label="Join Date"
          cssClass={classes.datePicker}
          defaultValue={empData.joinDate}
          helperText={INVALID_DATE}
        />
        <TextInput
          id={skills}
          label="Skills"
          onChange={handleChange}
          error={error[skills]}
          cssClass={classes.field}
          defaultValue={empData.skills}
          helperText={MIN3CHARS_ERROR_TEXT}
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
