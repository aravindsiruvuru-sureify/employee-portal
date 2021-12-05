import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import AccountCircle from "@material-ui/icons/AccountCircle";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  label: {
    fontSize: "14px",
    marginRight: "40px",
    cursor: "pointer",
    outline: "none",
    userSelect: "none",
  },
  title: {
    flexGrow: 1,
    cursor: "pointer",
    outline: "none",
    userSelect: "none",
  },
  logo: {
    height: "40px",
  },
  menu: {
    fontSize: "40px",
  },
  profile: {
    fontSize: "16px",
    fontWeight: "500",
    marginLeft: "10px",
    outline: "none",
    userSelect: "none",
  },
  popOver: {
    marginTop: "50px",
  },
  option: {
    fontSize: "16px",
  },
}));

const StyledButton = withStyles({
  root: {
    background: "black",
    color: "white",
    padding: "0 12px",
    position: "fixed",
    top: 0,
    zIndex: 1210,
  },
})(AppBar);

const headerLabels = [
  "ABOUT US",
  "IT SERVICES",
  "SOLUTIONS",
  "CAREERS",
  "TRAINING",
  "EMPLOYEES",
  "CUSTOMERS",
  "BLOGS",
  "CONTACT US",
];

const Header = ({ isDashboard = false }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();

  const can_access_dashboard = true;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const renderMenu = () => (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={() => {
        setAnchorEl(null);
      }}
      className={classes.popOver}
    >
      <MenuItem className={classes.option}>Profile details</MenuItem>
      <MenuItem className={classes.option}>option-2</MenuItem>
      <MenuItem className={classes.option}>Logout</MenuItem>
    </Menu>
  );

  //   const onClickHeaderLabel = (label) => {
  //     switch (label) {
  //       case home:
  //         gotoHomePage({ history });
  //         break;
  //       case employees:
  //         navigateToPage({ history, route: EMPLOYEES_PAGE_ROUTE });
  //         break;
  //       case projects:
  //         navigateToPage({ history, route: PROJECTS_PAGE_ROUTE });
  //         break;
  //       case referrals:
  //         navigateToPage({ history, route: REFERRALS_PAGE_ROUTE });
  //         break;
  //       case intros:
  //         navigateToPage({ history, route: INTROS_PAGE_ROUTE });
  //         break;
  //       default:
  //         break;
  //     }
  //   };

  const HeaderItems = () => {
    return headerLabels.map((label) => (
      <Typography
        variant="subtitle1"
        className={classes.label}
        key={label}
        onClick={() => {
          if (label === "EMPLOYEES") {
            history.push("/dashboard");
          }
        }}
      >
        {label}
      </Typography>
    ));
  };

  return (
    <StyledButton position="static">
      {/* {isLoading && <FormLoader />} */}
      <Toolbar variant="dense">
        <a class="navbar-brand logo-top page-scroll" href="#header">
          <i class="h4 fa fa-vk"></i>
        </a>
        <Typography variant="h5" className={classes.title}></Typography>
        <HeaderItems />
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={classes.menu}
          onClick={(e) => {
            e && e.stopPropagation();
            e && e.preventDefault();
            handleClick(e);
          }}
        >
          {isDashboard && (
            <>
              <img
                alt="profilepic"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                style={{ height: "1em", width: "1em", borderRadius: "50%" }}
              />
              <Typography variant="subtitle1" className={classes.profile}>
                user
              </Typography>
            </>
          )}
        </IconButton>
        {renderMenu()}
      </Toolbar>
    </StyledButton>
  );
};

export default Header;
