/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

import { PropTypes } from "prop-types";

import { handleButtonIsDisabled, handleHasError } from "../../utils/formUtils";
import {
  courseApplicationConstants,
  COURSE_APPLICATION_IDS,
} from "../../constants";
import { YourReferralText } from "./styles";
import {
  TextInput,
  PrimaryButton,
  UploadButton,
  DatePicker,
} from "../../../CommonComponents";
import colors from "../../themes/colors";
import { Fields, ModalInputsWrapper } from "../index";

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
  courseName,
  courseContent,
  courseCode,
  trainer,
  type,
  mode,
  startDate,
  regEndDate,
  timings,
  duration,
  fee,
} = COURSE_APPLICATION_IDS;

const CourseApplicationForm = ({
  onClickCrossIcon,
  onClickSubmitButton = () => {},
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

  useEffect(() => {
    setIsDisabled(handleButtonIsDisabled(error, 3));
  }, [error]);

  const handleClick = () => {
    onClickSubmitButton({ ...data, publish: false });
  };

  return (
    <ModalInputsWrapper>
      <CloseOutlinedIcon className={classes.root} onClick={onClickCrossIcon} />
      <YourReferralText>Fill your course application</YourReferralText>
      <Fields>
        <TextInput
          id={courseName}
          label={courseApplicationConstants.courseName}
          onChange={handleChange}
          error={error[courseName]}
          cssClass={classes.field}
        />
        <TextInput
          id={courseContent}
          label={courseApplicationConstants.courseContent}
          onChange={handleChange}
          error={error[courseContent]}
          cssClass={classes.field}
        />
        <TextInput
          id={courseCode}
          label={courseApplicationConstants.courseCode}
          onChange={handleChange}
          error={error[courseCode]}
          cssClass={classes.field}
        />
        <TextInput
          id={trainer}
          label={courseApplicationConstants.trainer}
          onChange={handleChange}
          error={error[trainer]}
          cssClass={classes.field}
        />
        <TextInput
          id={type}
          label={courseApplicationConstants.type}
          onChange={handleChange}
          error={error[type]}
          cssClass={classes.field}
        />
        <TextInput
          id={mode}
          label={courseApplicationConstants.mode}
          onChange={handleChange}
          error={error[mode]}
          cssClass={classes.field}
        />
        <DatePicker
          handleChange={handleChange}
          id={startDate}
          label={courseApplicationConstants.startDate}
          cssClass={classes.datePicker}
        />
        <DatePicker
          handleChange={handleChange}
          id={regEndDate}
          label={courseApplicationConstants.regEndDate}
          cssClass={classes.datePicker}
        />
        <TextInput
          id={timings}
          label={courseApplicationConstants.timings}
          onChange={handleChange}
          error={error[timings]}
          cssClass={classes.field}
        />
        <TextInput
          id={duration}
          label={courseApplicationConstants.duration}
          onChange={handleChange}
          error={error[duration]}
          cssClass={classes.field}
        />
        <TextInput
          id={fee}
          label={courseApplicationConstants.fee}
          onChange={handleChange}
          error={error[fee]}
          cssClass={classes.field}
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

CourseApplicationForm.propTypes = {
  onClickCrossIcon: PropTypes.func.isRequired,
  onClickSubmitButton: PropTypes.func.isRequired,
  referral: PropTypes.object.isRequired,
};
export default CourseApplicationForm;
