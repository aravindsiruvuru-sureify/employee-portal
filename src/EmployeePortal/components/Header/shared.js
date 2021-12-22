import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

import { Heading, PasswordBlock } from "./styles";

import { TextInput, PrimaryButton } from "../../../CommonComponents";
const useStyles = makeStyles({
  field: {
    margin: "15px 0",
    width: "350px",
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
    height: "36px",
  },
});
export const Password = ({ onClickCrossIcon = () => {} }) => {
  const classes = useStyles();

  return (
    <PasswordBlock>
      <CloseOutlinedIcon className={classes.root} onClick={onClickCrossIcon} />

      <Heading>Change password</Heading>
      <div style={{ display: "flex", marginTop: "24px" }}>
        <TextInput
          id={"password"}
          label={"Current password"}
          onChange={() => {}}
          //   error={error[fir÷stName]}
          cssClass={classes.field}
          type="password"
        />
        <TextInput
          id={"password"}
          label={"New password"}
          onChange={() => {}}
          //   error={error[fir÷stName]}
          cssClass={classes.field}
          type="password"
        />
      </div>
      <PrimaryButton
        handleClick={() => {}}
        label="Update"
        cssClass={classes.button}
      />
    </PasswordBlock>
  );
};
