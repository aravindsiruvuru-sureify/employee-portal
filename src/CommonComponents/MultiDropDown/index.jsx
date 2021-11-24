import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';
import {
  Chip,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import colors from '../../EmployeePortal/themes/colors';

const useStyles = makeStyles((theme) => ({
  input: {
    color: `${colors.primary} !important`,
  },
  formControl: {
    width: '100%',
    padding: '2px auto',
    height: '60px',
    background: 'transparant',
    color: `${colors.primary} !important`,
    margin: '0',
    '&:after ': {
      borderColor: `${colors.primary} !important`,
    },
    '& > label': {
      paddingLeft: '10px',
      color: '#8b8484 !important',
    },
    '&:focus-within > label': {
      paddingTop: '10px',
      color: `${colors.primary} !important`,
    },
    '& .MuiSelect-select:focus': {
      padding: '0px',
      height: 'auto',
      background: 'transparent',
    },
  },
  container: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '4px 4px 0px 0px',
    animation: `$myEffect 1500ms ${theme.transitions.easing.easeInOut}`,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: 'white',
  },
  chip: {
    margin: 1,
  },
  noLabel: {
    marginTop: theme.spacing(0),
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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const MultiDropDown = ({
  id,
  label = '',
  onChange,
  defaultValue = [],
  cssClass = '',
  menuItems = [],
  displayPropertyName = '',
}) => {
  const getItems = (items) => {
    return items.map((el) => el[displayPropertyName]);
  };

  const classes = useStyles();
  const theme = useTheme();
  const [values, setValues] = useState(getItems(defaultValue));

  const modifyReturnValues = (items) => {
    const selectedItems = [];
    items.forEach((item) => {
      selectedItems.push(
        ...menuItems.filter((el) => el[displayPropertyName] === item)
      );
    });
    return selectedItems;
  };

  const handleChange = (event) => {
    setValues(event.target.value);
    const selectedItems = modifyReturnValues(event.target.value);
    onChange({
      target: {
        id,
        value: selectedItems,
      },
    });
  };

  return (
    <div className={`${classes.container} ${cssClass}`}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-chip-label" className={classes.input}>
          {label}
        </InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          key={`${id}_mutiple-chip`}
          multiple
          value={values}
          onChange={handleChange}
          className={classes.formControl}
          input={<Input id="select-multiple-chip" />}
          renderValue={(pers) => (
            <div className={classes.chips}>
              {pers.map((val) => (
                <Chip
                  key={val}
                  id={val}
                  className={classes.chip}
                  label={val}
                  value={val}
                />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {getItems(menuItems).map((item) => (
            <MenuItem
              key={item}
              value={item}
              style={getStyles(item, values, theme)}
            >
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

MultiDropDown.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.array.isRequired,
  menuItems: PropTypes.array.isRequired,
  cssClass: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  displayPropertyName: PropTypes.string.isRequired,
};

export default MultiDropDown;
