import React from 'react';
import { PropTypes } from 'prop-types';
import { Fab } from '@material-ui/core';

const FAB = ({ cssClass = null, title = '', onClick = () => {} }) => {
  return (
    <Fab className={cssClass} variant="extended" onClick={onClick}>
      {title}
    </Fab>
  );
};

FAB.propTypes = {
  cssClass: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FAB;
