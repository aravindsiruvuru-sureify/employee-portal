/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import ChipInput from 'material-ui-chip-input';
import { makeStyles } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';
import colors from '../../EmployeePortal/themes/colors';

const useStyles = makeStyles((theme) => ({
  field: {
    background: `${colors.white} `,
    width: '100%',
    maxWidth: 360,
    marginTop: '0px',
    padding: '10px',
    animation: `$myEffect 1500ms ${theme.transitions.easing.easeInOut}`,
    '& > p': {
      marginBottom: 0,
    },
    '& > label': {
      paddingLeft: '10px',
      paddingTop: '10px',
      color: '#8b8484 !important',
    },
    '&:focus-within > div:after': {
      borderColor: `${colors.primary} !important`,
    },
    '&:focus-within > label': {
      color: `${colors.primary} !important`,
    },
    '& > .WAMuiChipInput-standard-23:after': {
      borderColor: `${colors.primary} !important`,
    },
  },
  inptuLabel: {
    color: `${colors.primary} !important`,
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

const ChipsInput = ({
  id,
  label,
  onChange,
  defaultValue = [],
  cssClass,
  helperText,
  hasError = false,
}) => {
  const classes = useStyles();
  const [value, setvalue] = useState(defaultValue);
  const handleDelete = (chipToDelete) => {
    setvalue((chips) => chips.filter((chip) => chip !== chipToDelete));
  };
  useEffect(() => {
    onChange({
      target: { id, value },
    });
  }, [value]);
  return (
    <ChipInput
      id={id}
      key={`${id}_chipid`}
      value={value}
      className={`${cssClass} ${classes.field}`}
      // error={hasError}
      // helperText={hasError ? helperText : ''}
      label={label}
      onDelete={handleDelete}
      onChange={(e) => {
        if (value) {
          setvalue((val) => [...val, e[e.length - 1].trim()]);
        } else {
          setvalue([e[e.length - 1].trim()]);
        }
      }}
      onBlur={() => {
        const inputValue = document.getElementById(id).value;
        if (inputValue.trim().length) {
          if (value) {
            setvalue((val) => [...val, inputValue]);
          } else {
            setvalue([inputValue]);
          }
        }
      }}
    />
  );
};

ChipsInput.defaultProps = {
  cssClass: null,
};

ChipsInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  helperText: PropTypes.string.isRequired,
  hasError: PropTypes.bool.isRequired,
  defaultValue: PropTypes.string.isRequired,
  cssClass: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

export default ChipsInput;
