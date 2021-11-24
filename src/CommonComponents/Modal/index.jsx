import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

import './index.css';

const Modal = (props) => {
  const { handleClose, children, open } = props;

  return (
    <ReactModal
      isOpen={open}
      onAfterOpen={() => {}}
      onRequestClose={handleClose}
      contentLabel="Example Modal"
      className="Modal"
      overlayClassName="Overlay"
    >
      {children}
    </ReactModal>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.elementType.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Modal;
