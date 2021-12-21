import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Card } from "@material-ui/core";

import {
  TextInput,
  PrimaryButton,
  FormLoader,
} from "../../../CommonComponents";

import colors from "../../themes/colors";
import { font30BlackLatoNormal as Font30N } from "../../themes/typos";
import { handleButtonIsDisabled, handleHasError } from "../../utils/formUtils";
import {
  EMAILADDRESS,
  EMAIL_ERROR_TEXT,
  INPUTTYPE,
  PASSWORD,
  PASSWORD_ERROR_TEXT,
} from "../../constants";
import { gotoHomePage, navigateToPage } from "../../utils/RouterUtils";
import { REGISTRATION_PAGE_ROUTE } from "../../constants/RouterConstants";

import { Fields, CardActions } from "./styles";

const useStyles = makeStyles({
  card: {
    minWidth: 400,
    minHeight: 500,
    padding: "60px 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "@media (max-width: 960px)": {
      width: "80vw",
      minWidth: 300,
      maxWidth: 450,
      minHeight: 400,
    },
  },
  loginButton: {
    padding: "0px 35px",
    backgroundColor: colors.primary,
    fontSize: "18px",
    height: "48px",
  },
  createAccountButton: {
    color: colors.linkButton,
  },
  cardContent: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

const LoginCard = () => {
  const classes = useStyles();
  const history = useHistory();
  const [credentials, setCredentials] = useState({});
  const [error, setError] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleError = (id, value) => {
    const hasError = handleHasError(id, value);
    setError({
      ...error,
      [id]: hasError,
    });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    handleError(id, value);
    setCredentials({
      ...credentials,
      [id]: value,
    });
  };

  useEffect(() => {
    setIsDisabled(handleButtonIsDisabled(error, 2));
  }, [error]);

  const onSuccess = (response) => {
    localStorage.setItem("access_token", response.data.token);
    setIsLoading(false);
    gotoHomePage({ history });
  };

  const onFailure = () => {
    setIsLoading(false);
  };

  const handleLogin = () => {
    setIsLoading(true);
    // api.post({
    //   url: apiEndpoints.login,
    //   requestBody: credentials,
    //   onSuccess,
    //   onFailure,
    // });
  };

  const onClickCreateAccount = () => {
    navigateToPage({ history, route: REGISTRATION_PAGE_ROUTE });
  };

  return (
    <>
      <Card className={classes.card}>
        <Font30N>LOG INTO YOUR ACCOUNT</Font30N>
        <Fields>
          <TextInput
            id={EMAILADDRESS}
            error={error[EMAILADDRESS]}
            helperText={EMAIL_ERROR_TEXT}
            onChange={handleChange}
            label="Email Address"
          />
          <TextInput
            id={PASSWORD}
            error={error[PASSWORD]}
            helperText={PASSWORD_ERROR_TEXT}
            onChange={handleChange}
            onKeyDown={(ev) =>
              ev.key === "Enter" && !isDisabled && handleLogin()
            }
            type={INPUTTYPE.password}
            label="Password"
          />
        </Fields>
        <CardActions>
          <PrimaryButton
            isDisabled={isDisabled}
            handleClick={handleLogin}
            label="LOGIN"
          />
          <Button
            color="primary"
            className={classes.createAccountButton}
            onClick={onClickCreateAccount}
          >
            Create Account
          </Button>
        </CardActions>
      </Card>
      {isLoading && <FormLoader />}
    </>
  );
};

export default LoginCard;
