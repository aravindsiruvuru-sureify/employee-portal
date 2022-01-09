/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

import { PropTypes } from "prop-types";

import { handleButtonIsDisabled, handleHasError } from "../../utils/formUtils";
import {
  courseApplicationConstants,
  COURSE_APPLICATION_IDS,
  DROPDOWN_ERROR_TEXT,
  MIN10CHARS_ERROR_TEXT,
  MIN3CHARS_ERROR_TEXT,
} from "../../constants";
import { YourReferralText } from "./styles";
import {
  TextInput,
  PrimaryButton,
  UploadButton,
  DatePicker,
  Dropdown,
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
  course = {},
}) => {
  const classes = useStyles();
  const [error, setError] = useState({});
  const [data, setData] = useState(course);
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
    setIsDisabled(handleButtonIsDisabled(error, 9));
  }, [error]);

  useEffect(() => {
    Object.keys(course).forEach((key) => {
      const e = {
        target: {
          id: key,
          value: course[key],
        },
      };
      handleChange(e);
    });
  }, [course]);

  const isNewApplication = () => !!!data.courseCode;

  const handleClick = () => {
    onClickSubmitButton({
      ...data,
      ...(isNewApplication() ? { publish: false } : { publish: data.publish }),
    });
  };

  return (
    <ModalInputsWrapper>
      <CloseOutlinedIcon className={classes.root} onClick={onClickCrossIcon} />
      <YourReferralText>Fill your course application</YourReferralText>
      <Fields>
        <TextInput
          id={courseCode}
          label={courseApplicationConstants.courseCode}
          onChange={handleChange}
          error={error.courseCode}
          cssClass={classes.field}
          defaultValue={data.courseCode}
          helperText={MIN3CHARS_ERROR_TEXT}
        />
        <TextInput
          id={courseName}
          label={courseApplicationConstants.courseName}
          onChange={handleChange}
          error={error.courseName}
          cssClass={classes.field}
          defaultValue={data.courseName}
          helperText={MIN3CHARS_ERROR_TEXT}
        />
        <TextInput
          id={trainer}
          label={courseApplicationConstants.trainer}
          onChange={handleChange}
          error={error[trainer]}
          cssClass={classes.field}
          defaultValue={data.trainer}
          helperText={MIN3CHARS_ERROR_TEXT}
        />
        <Dropdown
          inputLabel={courseApplicationConstants.type}
          name={type}
          onChange={handleChange}
          menuItems={["PERSONAL", "REGULAR", "FASTTRACK"]}
          cssClass={classes.field}
          defaultValue={data.type}
          helperText={DROPDOWN_ERROR_TEXT}
        />
        <Dropdown
          inputLabel={mode}
          name={mode}
          onChange={handleChange}
          menuItems={["CLASSROOM", "OFFLINE_RECORDS", "ONLINE"]}
          cssClass={classes.field}
          defaultValue={data.mode}
          helperText={DROPDOWN_ERROR_TEXT}
        />
        <DatePicker
          handleChange={handleChange}
          id={startDate}
          label={courseApplicationConstants.startDate}
          cssClass={classes.datePicker}
          defaultValue={data.startDate}
        />
        <DatePicker
          handleChange={handleChange}
          id={regEndDate}
          label={courseApplicationConstants.regEndDate}
          cssClass={classes.datePicker}
          defaultValue={data.regEndDate}
        />
        <TextInput
          id={timings}
          label={courseApplicationConstants.timings}
          onChange={handleChange}
          error={error[timings]}
          cssClass={classes.field}
          defaultValue={data.timings}
          helperText={MIN3CHARS_ERROR_TEXT}
        />
        <TextInput
          id={duration}
          label={courseApplicationConstants.duration}
          onChange={handleChange}
          error={error[duration]}
          cssClass={classes.field}
          defaultValue={data.duration}
          helperText={MIN3CHARS_ERROR_TEXT}
        />
        <TextInput
          id={fee}
          label={courseApplicationConstants.fee}
          onChange={handleChange}
          error={error[fee]}
          cssClass={classes.field}
          defaultValue={data.fee}
          helperText={MIN3CHARS_ERROR_TEXT}
        />
        <TextInput
          id={courseContent}
          label={courseApplicationConstants.courseContent}
          onChange={handleChange}
          error={error[courseContent]}
          cssClass={classes.field}
          helperText={MIN10CHARS_ERROR_TEXT}
          defaultValue={data.courseContent}
          isMultiline
        />
      </Fields>
      <PrimaryButton
        // isDisabled={isDisabled}
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
