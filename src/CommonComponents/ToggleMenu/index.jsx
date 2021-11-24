import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import { BsFilter } from 'react-icons/bs';
import {
  Checkbox,
  ClickAwayListener,
  FormControlLabel,
} from '@material-ui/core';
import { PropTypes } from 'prop-types';
import colors from '../../EmployeePortal/themes/colors';

const useStyles = makeStyles({
  menu: {
    '& > .MuiMenu-paper': {
      top: '163px !important',
      right: '43px !important',
      left: 'auto !important',
      height: '225px',
    },
  },
});

const ToggleMenu = ({ items, setSelectedValues, selectedValues }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    if (open) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleItemCheck = (checked, value) => {
    if (checked) {
      setSelectedValues([...selectedValues, value]);
    } else {
      setSelectedValues(selectedValues.filter((i) => i !== value));
    }
  };

  const getMenuItems = () => {
    return Object.keys(items).map((o) => {
      return (
        o && (
          <MenuItem>
            <FormControlLabel
              key={o}
              control={
                <Checkbox
                  checked={selectedValues.includes(o)}
                  onChange={(e) => {
                    handleItemCheck(e.target.checked, o);
                  }}
                  color={colors.primary}
                  name="checkedA"
                />
              }
              // className={classes.checkbox}
              label={items[o]}
            />
          </MenuItem>
        )
      );
    });
  };

  return (
    <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
      <div>
        <Button
          aria-controls="fade-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <BsFilter
            size="30px"
            fontSize="20px"
            color={colors.primary}
            style={{
              margin: '-5px 10px 8px 10px',
            }}
          />
          {selectedValues.length > 0 && (
            <div
              style={{
                position: 'absolute',
                width: '12px',
                height: '12px',
                borderRadius: '12px',
                backgroundColor: 'green',
                zIndex: '1',
                top: '0px',
                right: '10px',
              }}
            />
          )}
        </Button>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={() => setAnchorEl(null)}
          TransitionComponent={Fade}
          className={classes.menu}
        >
          {getMenuItems()}
        </Menu>
      </div>
    </ClickAwayListener>
  );
};

ToggleMenu.propTypes = {
  items: PropTypes.object.isRequired,
  selectedValues: PropTypes.array.isRequired,
  setSelectedValues: PropTypes.func.isRequired,
};

export default ToggleMenu;
