import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import colors from '../../EmployeePortal/themes/colors';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 150,
    width: '100%',
    animation: `$myEffect 1500ms ${theme.transitions.easing.easeInOut}`,
    '&:focus-within > div:after': {
      borderColor: `${colors.primary} !important`,
    },
    '&:focus-within > label': {
      color: `${colors.primary} !important`,
    },
  },
  animatedItem: {
    animation: `$myEffect 3000ms easeInOut`,
  },
  '@keyframes myEffect': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
}));

const Dropdown = (props) => {
  const {
    inputLabel,
    name,
    onChange,
    labelValueItems = [],
    menuItems = [],
    cssClass = '',
    defaultValue = '',
    variant = 'filled',
  } = props;
  const classes = useStyles();
  const [value, setvalue] = useState(defaultValue);
  const handleChange = (e) => {
    setvalue(e.target.value);
    const ev = {
      target: {
        name,
        value: e.target.value,
      },
    };
    onChange(ev);
  };
  const getMenu = () => {
    if (labelValueItems.length > 0) {
      return labelValueItems.map((el) => (
        <MenuItem key={el.value} value={el.value}>
          {el.label}
        </MenuItem>
      ));
    }
    return menuItems.map((el) => {
      return (
        <MenuItem key={el} value={el}>
          {el}
        </MenuItem>
      );
    });
  };
  return (
    <FormControl
      variant={variant}
      className={`${classes.formControl} ${cssClass}`}
    >
      <InputLabel id="demo-simple-select-filled-label">{inputLabel}</InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        key={`${name}_dropdown`}
        name={name}
        onChange={handleChange}
        value={value}
      >
        {getMenu()}
      </Select>
    </FormControl>
  );
};

Dropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
  menuItems: PropTypes.array.isRequired,
  inputLabel: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  cssClass: PropTypes.string.isRequired,
  labelValueItems: PropTypes.array.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Dropdown;
