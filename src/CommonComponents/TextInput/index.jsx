import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { PropTypes } from 'prop-types';
import colors from '../../EmployeePortal/themes/colors';

const useStyles = makeStyles((theme) => ({
  field: {
    width: '100%',
    marginBottom: '5px',
    minWidth: 260,
    height: '60px',
    animation: `$myEffect 1500ms ${theme.transitions.easing.easeInOut}`,
    '& .MuiFilledInput-root:after ': {
      borderColor: `${colors.primary} !important`,
    },
  },
  inputLabel: {
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

const TextInput = ({
  id,
  error,
  helperText,
  onChange = () => {},
  onBlur = () => {},
  onKeyDown,
  label,
  defaultValue,
  cssClass,
  type = 'text',
  isDisabled = false,
  isMultiline = false,
  fullWidth = false,
  value,
  hasIcon = false,
  placeholder = '',
}) => {
  const classes = useStyles();

  return (
    <TextField
      id={id}
      key={id}
      disabled={isDisabled}
      type={type}
      className={`${classes.field} ${cssClass} ${classes.animatedItem}`}
      label={label}
      variant="filled"
      defaultValue={defaultValue}
      value={value}
      onChange={(e) => {
        onChange(e);
      }}
      onBlur={onBlur}
      multiline={isMultiline}
      rows={isMultiline ? 4 : 0}
      InputLabelProps={{
        classes: {
          focused: classes.inputLabel,
        },
      }}
      onKeyPress={onKeyDown}
      error={error}
      helperText={error ? helperText : ''}
      fullWidth={fullWidth}
      InputProps={
        hasIcon && {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon style={{ marginBottom: '12px' }} />
            </InputAdornment>
          ),
        }
      }
      placeholder={placeholder}
    />
  );
};

TextInput.defaultProps = {
  cssClass: null,
};

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  helperText: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  cssClass: PropTypes.object,
  isMultiline: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  hasIcon: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default TextInput;
