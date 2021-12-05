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
} from "../../constants";
import { Fields, YourReferralText } from "./styles";
import {
  TextInput,
  PrimaryButton,
  UploadButton,
  Dropdown,
} from "../../../CommonComponents";
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
} = HR_JOB_APPLICATION;

const HRJobApplicationForm = ({
  onClickCrossIcon,
  onClickSubmitButton,
  applicationData = {},
}) => {
  const classes = useStyles();
  const [error, setError] = useState({});
  const [data, setData] = useState({});
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
  console.log("----", data);
  useEffect(() => {
    setIsDisabled(handleButtonIsDisabled(error, 3));
  }, [error]);

  const handleClick = () => {
    onClickSubmitButton(data);
  };

  return (
    <Fields>
      <CloseOutlinedIcon className={classes.root} onClick={onClickCrossIcon} />
      <YourReferralText>
        {isEmpty(applicationData)
          ? "Fill your job application"
          : "Edit job application"}
      </YourReferralText>
      <TextInput
        id={title}
        label={hrJobApplicationConstants.title}
        onChange={handleChange}
        error={error[title]}
        cssClass={classes.field}
      />
      <TextInput
        id={description}
        label={hrJobApplicationConstants.description}
        onChange={handleChange}
        error={error[description]}
        helperText={MIN10CHARS_ERROR_TEXT}
        // defaultValue={(defaultVals && defaultVals.about_me) || ""}
        cssClass={classes.field}
        isMultiline
      />
      <TextInput
        id={salary}
        label={hrJobApplicationConstants.salary}
        onChange={handleChange}
        error={error[salary]}
        cssClass={classes.field}
      />
      {/* <Dropdown
        id={experienceLevel}
        inputLabel={hrJobApplicationConstants.experienceLevel}
        name={experienceLevel}
        onChange={handleChange}
        menuItems={experienceLevelOptions}
      /> */}
      <TextInput
        id={experienceLevel}
        label={hrJobApplicationConstants.experienceLevel}
        onChange={handleChange}
        error={error[experienceLevel]}
        cssClass={classes.field}
      />
      <TextInput
        id={experience}
        label={hrJobApplicationConstants.experience}
        onChange={handleChange}
        error={error[experience]}
        cssClass={classes.field}
      />
      <TextInput
        id={contractType}
        label={hrJobApplicationConstants.contractType}
        onChange={handleChange}
        error={error[contractType]}
        cssClass={classes.field}
      />
      <TextInput
        id={contractDuration}
        label={hrJobApplicationConstants.contractDuration}
        onChange={handleChange}
        error={error[contractDuration]}
        cssClass={classes.field}
      />
      <TextInput
        id={location}
        label={hrJobApplicationConstants.location}
        onChange={handleChange}
        error={error[location]}
        cssClass={classes.field}
      />
      <PrimaryButton
        handleClick={handleClick}
        cssClass={classes.button}
        label="Submit"
        isDisabled={isDisabled}
      />
    </Fields>
  );
};

HRJobApplicationForm.propTypes = {
  onClickCrossIcon: PropTypes.func.isRequired,
  onClickSubmitButton: PropTypes.func.isRequired,
  applicationData: PropTypes.object.isRequired,
};
export default HRJobApplicationForm;
