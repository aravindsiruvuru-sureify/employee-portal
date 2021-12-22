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
  MIN3CHARS_ERROR_TEXT,
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
  panNumber,
  aadharNumber,
  passportNumber,
  pfAccountNumber,
  uan,
  panCardPath,
  aadharPath,
  passportPath,
  photoPath,
  hikeLetterPath,
  promotionLatterPath,
  resumePath
} = EMPLOYEE_DETAILS.DOCUMENTS_IDS;

const EmployeeDocumentsForm = ({
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
    setIsDisabled(handleButtonIsDisabled(error, 6));
  }, [error]);

  const handleClick = () => {
    onClickSubmitButton(data);
  };
  return (
    <ModalInputsWrapper>
      <CloseOutlinedIcon className={classes.root} onClick={onClickCrossIcon} />
      <YourReferralText>Documents Form</YourReferralText>
      <Fields>
        <TextInput
          id={panNumber}
          label="Pan Number"
          onChange={handleChange}
          error={error[panNumber]}
          cssClass={classes.field}
          helperText={MIN3CHARS_ERROR_TEXT}
          defaultValue={empData[panNumber]}
        />
        <TextInput
          id={aadharNumber}
          label="Aadar Number"
          onChange={handleChange}
          error={error[aadharNumber]}
          cssClass={classes.field}
          defaultValue={empData[aadharNumber]}
          helperText={MIN3CHARS_ERROR_TEXT}
        />
        <TextInput
          id={passportNumber}
          label="Passport Number"
          onChange={handleChange}
          error={error[passportNumber]}
          cssClass={classes.field}
          defaultValue={empData[passportNumber]}
          helperText={MIN3CHARS_ERROR_TEXT}
        />
        <TextInput
          id={pfAccountNumber}
          label="PF Account Number"
          onChange={handleChange}
          error={error[pfAccountNumber]}
          cssClass={classes.field}
          defaultValue={empData[pfAccountNumber]}
          helperText={MIN3CHARS_ERROR_TEXT}
        />
        <TextInput
          id={uan}
          label="UAN"
          onChange={handleChange}
          error={error[uan]}
          cssClass={classes.field}
          defaultValue={empData[uan]}
          helperText={MIN3CHARS_ERROR_TEXT}
        />
        <TextInput
          id={panCardPath}
          label="Designation"
          onChange={handleChange}
          error={error[panCardPath]}
          cssClass={classes.field}
          defaultValue={empData[panCardPath]}
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

EmployeeDocumentsForm.propTypes = {
  onClickCrossIcon: PropTypes.func.isRequired,
  onClickSubmitButton: PropTypes.func.isRequired,
  referral: PropTypes.object.isRequired,
};
export default EmployeeDocumentsForm;
