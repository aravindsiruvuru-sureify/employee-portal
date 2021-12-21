import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import "date-fns";
import { Card } from "@material-ui/core";

import {
  DatePicker,
  Dropdown,
  TextInput,
  FormLoader,
  PrimaryButton,
} from "../../../CommonComponents";

import colors from "../../themes/colors";
import { font30BlackLatoNormal as Font30N } from "../../themes/typos";
import { handleButtonIsDisabled, handleHasError } from "../../utils/formUtils";
import {
  EMAIL_ERROR_TEXT,
  MIN3CHARS_ERROR_TEXT,
  PASSWORD_ERROR_TEXT,
  GENDERS,
  INPUTTYPE,
  PERSONAL_DETAILS,
  PROFESSIONAL_DETAILS,
  REGISTERATION_FIELDS,
} from "../../constants";
import { LOGIN_PAGE_ROUTE } from "../../constants/RouterConstants";
import { navigateToPage } from "../../utils/RouterUtils";

import { CardActions, Fields } from "./styles";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  card: {
    minWidth: 500,
    minHeight: 600,
    width: "60%",
    padding: "40px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    "@media (max-width: 960px)": {
      minWidth: 300,
      width: "80vw",
      maxWidth: 450,
    },
  },
  loginButton: {
    padding: "0px 35px",
    backgroundColor: colors.primary,
    fontSize: "18px",
    height: "48px",
  },
  createAccountButton: {
    color: "#6B97EC",
  },
  cardContent: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  datePicker: {
    backgroundColor: `${colors.primaryBG}`,
    "& > p": {
      backgroundColor: `${colors.white}`,
    },
  },
});

const { firstName, lastName, dob, gender } = PERSONAL_DETAILS;
const { email, role } = PROFESSIONAL_DETAILS;
const { password, confirmPassword } = REGISTERATION_FIELDS;

const RegistrationCard = () => {
  const history = useHistory();
  const classes = useStyles();
  const [data, setData] = useState({});
  const [error, setError] = useState({});
  const [roles, setRoles] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordsMatch, setpasswordsMatch] = useState(false);

  const handleError = (id, value) => {
    const hasError = handleHasError(id, value);
    setError({
      ...error,
      [id]: hasError,
    });
  };

  useEffect(() => {
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (
      data[password] &&
      data[confirmPassword] &&
      data[password] !== data[confirmPassword]
    ) {
      setpasswordsMatch(false);
    } else {
      setpasswordsMatch(true);
    }
  }, [data[password], data[confirmPassword]]);

  useEffect(() => {
    setIsDisabled(
      handleButtonIsDisabled(error, 8) ||
        data[password] !== data[confirmPassword]
    );
  }, [error]);

  const handleChange = (e) => {
    const { id, name, value } = e.target;
    const key = id || name;
    handleError(key, value);
    setData({
      ...data,
      [key]: value,
    });
  };

  const handleLogin = () => {
    navigateToPage({ history, route: LOGIN_PAGE_ROUTE });
  };

  const onSuccess = (response) => {
    setIsLoading(false);
    navigateToPage({ history, route: LOGIN_PAGE_ROUTE });
  };

  const onFailure = () => {
    setIsLoading(false);
  };

  const getLayoutType = () => 12;

  const handleRegister = () => {
    setIsLoading(true);
  };
  return (
    <>
      <Card className={classes.card}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Font30N>Create a New Account</Font30N>
          </Grid>
          <Grid item xs={getLayoutType()}>
            <Fields>
              <TextInput
                id={firstName}
                error={error[firstName]}
                helperText={MIN3CHARS_ERROR_TEXT}
                onChange={handleChange}
                label="First Name"
              />
            </Fields>
          </Grid>
          <Grid item xs={getLayoutType()}>
            <Fields>
              <TextInput
                id={lastName}
                error={error[lastName]}
                helperText={MIN3CHARS_ERROR_TEXT}
                onChange={handleChange}
                label="Last Name"
              />
            </Fields>
          </Grid>
          <Grid item xs={getLayoutType()}>
            <Fields>
              <TextInput
                id={email}
                error={error[email]}
                helperText={EMAIL_ERROR_TEXT}
                onChange={handleChange}
                label="Email Address"
              />
            </Fields>
          </Grid>
          <Grid item xs={getLayoutType()}>
            <Fields>
              <DatePicker
                cssClass={classes.datePicker}
                handleChange={handleChange}
                id={dob}
                label="Date Of Birth"
              />
            </Fields>
          </Grid>
          <Grid item xs={getLayoutType()}>
            <Fields>
              <Dropdown
                inputLabel="Gender"
                name={gender}
                onChange={handleChange}
                menuItems={GENDERS}
              />
            </Fields>
          </Grid>
          <Grid item xs={getLayoutType()}>
            <Fields>
              <Dropdown
                inputLabel="Role"
                name={role}
                onChange={handleChange}
                menuItems={roles}
              />
            </Fields>
          </Grid>
          <Grid item xs={getLayoutType()}>
            <Fields>
              <TextInput
                id={password}
                error={error[password]}
                type={INPUTTYPE.password}
                helperText={PASSWORD_ERROR_TEXT}
                onChange={handleChange}
                label="Password"
              />
            </Fields>
          </Grid>
          <Grid item xs={getLayoutType()}>
            <TextInput
              id={confirmPassword}
              error={error[confirmPassword]}
              helperText={PASSWORD_ERROR_TEXT}
              onChange={handleChange}
              onKeyDown={(ev) =>
                ev.key === "Enter" && !isDisabled && handleRegister()
              }
              type={INPUTTYPE.password}
              label="Confirm Password"
            />
          </Grid>
        </Grid>
        <CardActions>
          <PrimaryButton
            isDisabled={isDisabled}
            handleClick={handleRegister}
            label="Register"
          />
          <Button
            color="primary"
            className={classes.createAccountButton}
            onClick={handleLogin}
          >
            Login
          </Button>
        </CardActions>
        {!passwordsMatch && (
          <p style={{ marginRight: "28px", color: "red" }}>
            * passwords donot match
          </p>
        )}
      </Card>
      {/* {isLoading && <FormLoader />} */}
    </>
  );
};

export default RegistrationCard;
