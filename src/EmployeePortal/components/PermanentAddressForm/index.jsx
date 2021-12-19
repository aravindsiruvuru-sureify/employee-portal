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
  street1,
  street2,
  landmark,
  city,
  provinceOrState,
  country,
  postalCode,
  phoneNumber,
  email,
  type,
} = EMPLOYEE_DETAILS.PERMANENT_ADDRESS_IDS;

const PermanentAddressForm = ({
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
          id={street1}
          label="Street 1"
          onChange={handleChange}
          error={error[street1]}
          cssClass={classes.field}
          defaultValue={empData[street1]}
        />
        <TextInput
          id={street2}
          label="Street 2"
          onChange={handleChange}
          error={error[street2]}
          cssClass={classes.field}
          defaultValue={empData[street2]}
        />
        <TextInput
          id={landmark}
          label="Landmark"
          onChange={handleChange}
          error={error[landmark]}
          cssClass={classes.field}
          defaultValue={empData[landmark]}
        />
        <TextInput
          id={city}
          label="city"
          onChange={handleChange}
          error={error[city]}
          cssClass={classes.field}
          defaultValue={empData[city]}
        />
        <TextInput
          id={provinceOrState}
          label="Province Or State"
          onChange={handleChange}
          error={error[provinceOrState]}
          cssClass={classes.field}
          defaultValue={empData[provinceOrState]}
        />
        <TextInput
          id={country}
          label="Country"
          onChange={handleChange}
          error={error[country]}
          cssClass={classes.field}
          defaultValue={empData[country]}
        />
        <TextInput
          id={postalCode}
          label="Postal Code"
          onChange={handleChange}
          error={error[postalCode]}
          cssClass={classes.field}
          defaultValue={empData[postalCode]}
        />
        <TextInput
          id={phoneNumber}
          label="Phone Number"
          onChange={handleChange}
          error={error[phoneNumber]}
          cssClass={classes.field}
          defaultValue={empData[phoneNumber]}
        />
        <TextInput
          id={email}
          label="Email"
          onChange={handleChange}
          error={error[email]}
          cssClass={classes.field}
          defaultValue={empData[email]}
        />
        <TextInput
          id={type}
          label="Type"
          onChange={handleChange}
          error={error[type]}
          cssClass={classes.field}
          defaultValue={empData[type]}
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

PermanentAddressForm.propTypes = {
  onClickCrossIcon: PropTypes.func.isRequired,
  onClickSubmitButton: PropTypes.func.isRequired,
  referral: PropTypes.object.isRequired,
};
export default PermanentAddressForm;
