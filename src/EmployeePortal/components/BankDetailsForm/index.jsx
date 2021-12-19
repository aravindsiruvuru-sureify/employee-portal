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

const { bankName, accountNumber, ifscCode, branchName, location } =
  EMPLOYEE_DETAILS.BANK_DETAILS_IDS;

const BankDetailsForm = ({
  onClickCrossIcon,
  onClickSubmitButton,
  empData = {},
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
          id={bankName}
          label="Bank Name"
          onChange={handleChange}
          error={error[bankName]}
          cssClass={classes.field}
          defaultValue={empData[bankName]}
        />
        <TextInput
          id={accountNumber}
          label="Account Number"
          onChange={handleChange}
          error={error[accountNumber]}
          cssClass={classes.field}
          defaultValue={empData[accountNumber]}
        />
        <TextInput
          id={ifscCode}
          label="IFSC Code"
          onChange={handleChange}
          error={error[ifscCode]}
          cssClass={classes.field}
          defaultValue={empData[ifscCode]}
        />
        <TextInput
          id={branchName}
          label="Branch Name"
          onChange={handleChange}
          error={error[branchName]}
          cssClass={classes.field}
          defaultValue={empData[branchName]}
        />
        <TextInput
          id={location}
          label="Location"
          onChange={handleChange}
          error={error[location]}
          cssClass={classes.field}
          defaultValue={empData[location]}
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

BankDetailsForm.propTypes = {
  onClickCrossIcon: PropTypes.func.isRequired,
  onClickSubmitButton: PropTypes.func.isRequired,
  referral: PropTypes.object.isRequired,
};
export default BankDetailsForm;
