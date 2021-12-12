import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import { format } from "date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { PropTypes } from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import colors from "../../EmployeePortal/themes/colors";
import { InputWrapper, InputTitle } from "../InputWrapper";

const useStyles = makeStyles((theme) => ({
  dateControl: {
    width: "100%",
    height: "53px",
    borderRadius: "4px 4px 0px 0px",
    paddingTop: "21px",
    marginTop: "15px",
    backgroundColor: "#F0F0F0",
    animation: `$myEffect 1500ms ${theme.transitions.easing.easeInOut}`,
    "& > label": {
      paddingLeft: "10px",
      paddingTop: "5px",
      color: "#8b8484 !important",
    },
    "& > div": {
      paddingLeft: "10px",
      "& > div > button": {
        marginTop: "-20px",
      },
    },
    "&:focus-within > label": {
      padding: "10px 0 0 10px",
      color: `${colors.primary} !important`,
    },
    "& > div > input": {
      backgroundColor: "transparent !important",
      fontSize: "15px",
    },
    "& .MuiInput-underline:after": {
      borderColor: `${colors.primary} !important`,
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: `${colors.primary} !important`,
    },
  },
  wrapper: {
    padding: "0px",
  },
  animatedItem: {
    animation: `$myEffect 3000ms easeInOut`,
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
}));

const DatePicker = ({
  handleChange,
  id,
  label,
  cssClass = "",
  defaultValue = null,
}) => {
  const [selectedDate, setSelectedDate] = React.useState(
    defaultValue && new Date(defaultValue)
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);

    const timestamp = Date.parse(date);
    if (!isNaN(timestamp)) {
      const formattedDate = format(new Date(date), "yyyy-MM-dd");
      handleChange({
        target: {
          id,
          value: formattedDate,
        },
      });
      return;
    }
    handleChange({
      target: {
        id,
        value: "Invalid Date",
      },
    });
  };

  const classes = useStyles();
  return (
    <InputWrapper>
      <InputTitle>{label}</InputTitle>
      <MuiPickersUtilsProvider className={classes.wrapper} utils={DateFnsUtils}>
        <KeyboardDatePicker
          className={`${cssClass} ${classes.dateControl}`}
          margin="normal"
          id="date-picker-dialog"
          key={id}
          label={""}
          format="yyyy-MM-dd"
          value={selectedDate}
          placeholder="YYYY-MM-DD"
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </MuiPickersUtilsProvider>
    </InputWrapper>
  );
};

DatePicker.propTypes = {
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  cssClass: PropTypes.string.isRequired,
};

export default DatePicker;
