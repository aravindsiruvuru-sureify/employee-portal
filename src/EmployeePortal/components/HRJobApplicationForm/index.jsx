/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { isEmpty } from "lodash";

import { PropTypes } from "prop-types";

import { handleButtonIsDisabled, handleHasError } from "../../utils/formUtils";

import {
  hrJobApplicationConstants,
  HR_JOB_APPLICATION,
  MIN10CHARS_ERROR_TEXT,
  EXPERIENCE_LEVELS,
  CONTRACT_TYPES,
} from "../../constants";
import { YourReferralText } from "./styles";
import {
  TextInput,
  PrimaryButton,
  UploadButton,
  Dropdown,
  DatePicker,
} from "../../../CommonComponents";
import { Fields, ModalInputsWrapper } from "../index";
import colors from "../../themes/colors";
import { TimeToLeave } from "@material-ui/icons";

const experienceLevelOptions = ["Experienced", "Fresher"];

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
  title,
  description,
  primarySkill,
  secondarySkill,
  salary,
  ref,
  experienceLevel,
  experience,
  contractType,
  contractDuration,
  location,
  endDate,
} = HR_JOB_APPLICATION;

const HRJobApplicationForm = ({
  onClickCrossIcon,
  onClickSubmitButton,
  applicationData = {},
}) => {
  const classes = useStyles();
  const [error, setError] = useState({});
  const [data, setData] = useState(applicationData);
  const [isDisabled, setIsDisabled] = useState(true);

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

  const isNewApplication = () => !!!data.ref;

  const handleClick = () => {
    onClickSubmitButton({
      ...data,
      ...(isNewApplication() ? { publish: false } : { publish: data.publish }),
    });
  };

  const isExperienced = () => data.experienceLevel === "Experienced";

  const isContractTypedJob = () => data.contractType === "Contract";

  return (
    <ModalInputsWrapper>
      <YourReferralText>
        {isEmpty(applicationData)
          ? "Fill your job application"
          : "Edit job application"}
      </YourReferralText>
      <CloseOutlinedIcon className={classes.root} onClick={onClickCrossIcon} />
      <Fields>
        <TextInput
          id={ref}
          label={hrJobApplicationConstants.ref}
          onChange={handleChange}
          error={error[ref]}
          cssClass={classes.field}
          defaultValue={data.ref}
        />
        <TextInput
          id={title}
          label={hrJobApplicationConstants.title}
          onChange={handleChange}
          error={error[title]}
          cssClass={classes.field}
          defaultValue={data.title}
        />
        <Dropdown
          name={experienceLevel}
          inputLabel={hrJobApplicationConstants.experienceLevel}
          onChange={handleChange}
          menuItems={EXPERIENCE_LEVELS}
          cssClass={classes.field}
          defaultValue={data.experienceLevel}
        />
        <TextInput
          id={experience}
          label={hrJobApplicationConstants.experience}
          onChange={handleChange}
          error={error[experience]}
          cssClass={classes.field}
          isDisabled={!isExperienced()}
          defaultValue={data.experience}
        />
        <Dropdown
          inputLabel={hrJobApplicationConstants.contractType}
          name={contractType}
          onChange={handleChange}
          menuItems={CONTRACT_TYPES}
          cssClass={classes.field}
          defaultValue={data.contractType}
        />
        <TextInput
          id={contractDuration}
          label={hrJobApplicationConstants.contractDuration}
          onChange={handleChange}
          error={error[contractDuration]}
          cssClass={classes.field}
          isDisabled={!isContractTypedJob()}
          defaultValue={data.contractDuration}
        />
        <TextInput
          id={salary}
          label={hrJobApplicationConstants.salary}
          onChange={handleChange}
          error={error[salary]}
          cssClass={classes.field}
          defaultValue={data.salary}
        />
        <TextInput
          id={primarySkill}
          label={hrJobApplicationConstants.primarySkill}
          onChange={handleChange}
          error={error[primarySkill]}
          cssClass={classes.field}
          defaultValue={data.primarySkill}
        />
        <TextInput
          id={secondarySkill}
          label={hrJobApplicationConstants.secondarySkill}
          onChange={handleChange}
          error={error[experienceLevel]}
          cssClass={classes.field}
          defaultValue={data.secondarySkill}
        />
        <TextInput
          id={location}
          label={hrJobApplicationConstants.location}
          onChange={handleChange}
          error={error[location]}
          cssClass={classes.field}
          defaultValue={data.location}
        />
        <DatePicker
          handleChange={handleChange}
          id={endDate}
          label={hrJobApplicationConstants.endDate}
          cssClass={classes.datePicker}
          defaultValue={data.endDate}
        />
        <TextInput
          id={description}
          label={hrJobApplicationConstants.description}
          onChange={handleChange}
          error={error[description]}
          helperText={MIN10CHARS_ERROR_TEXT}
          cssClass={classes.field}
          defaultValue={data.description}
          isMultiline
        />
      </Fields>
      <PrimaryButton
        handleClick={handleClick}
        cssClass={classes.button}
        label="Submit"
      />
    </ModalInputsWrapper>
  );
};

HRJobApplicationForm.propTypes = {
  onClickCrossIcon: PropTypes.func.isRequired,
  onClickSubmitButton: PropTypes.func.isRequired,
  applicationData: PropTypes.object.isRequired,
};
export default HRJobApplicationForm;
