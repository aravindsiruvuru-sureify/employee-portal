import React from "react";
import { PropTypes } from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import colors from "../../EmployeePortal/themes/colors";

const useStyles = makeStyles({
  loginButton: {
    fontSize: "14px",
    backgroundColor: colors.primary,
    "&:focus": {
      backgroundColor: "#234e6e",
    },
    "&:hover": {
      backgroundColor: "#1b496b",
    },
    textTransform: "none",
  },
});

const PrimaryButton = ({ isDisabled, handleClick, label, size, cssClass }) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="primary"
      disabled={isDisabled}
      onClick={handleClick}
      className={`${classes.loginButton} ${cssClass}`}
      size={size}
    >
      {label}
    </Button>
  );
};

PrimaryButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["large", "medium", "small"]),
  cssClass: PropTypes.string,
};

PrimaryButton.defaultProps = {
  size: "medium",
  cssClass: "",
};

export default PrimaryButton;
