import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { get } from 'lodash';
import CircularProgress from '@material-ui/core/CircularProgress';
import { UploadTypes } from '../../EmployeePortal/constants';
// import { uploadFileToFirebase } from '../../firebase/FirebaseUtils';
import UploadSvg from './styles';
import colors from '../../EmployeePortal/themes/colors';
// import { setUploadImageStatus } from '../../EmployeePortal/stores/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    color: colors.primary,
    width: '20px !important',
    height: '20px !important',
  },
  upload: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    color: '#000000',
    minWidth: '90px',
    minHeight: '40px',
    padding: '5px 8px',
    borderRadius: 5,
    boxShadow: '1px 1px 2px 1px #ccc',
    fontFamily: 'Roboto',
    cursor: 'pointer',
    animation: `$myEffect 1500ms ${theme.transitions.easing.easeInOut}`,
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

const UploadButton = ({
  id = '',
  isDisabled = false,
  label,
  setUrl = () => {},
  dir = null,
  type = UploadTypes.any,
  prevUrl = null,
}) => {
  const classes = useStyles();
  // const isUploading = useSelector((state) =>
  //   get(state, 'employeePortalStore.isUploadInProgress', false)
  // );

  const isUploading = false;

  // const dispatch = useDispatch();
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    // if (file) {
    //   // dispatch(setUploadImageStatus(true));
    // }
    // uploadFileToFirebase({
    //   file: file,
    //   setUrl: (url) => {
    //     // dispatch(setUploadImageStatus(false));
    //     setUrl(url, id);
    //   },
    //   onFail: () => {
    //     // dispatch(setUploadImageStatus(false));
    //   },
    //   dir: dir,
    //   prevUrl: prevUrl,
    // });
  };
  return (
    <label
      htmlFor="upload-button"
      className={classes.upload}
      isDisabled={isUploading ? true : isDisabled}
    >
      {isUploading ? (
        <CircularProgress className={classes.root} />
      ) : (
        <>
          {label} <UploadSvg />
        </>
      )}
      <input
        style={{ display: 'none' }}
        id="upload-button"
        type="file"
        onChange={handleFileUpload}
        accept={type}
        disabled={isUploading}
      />
    </label>
  );
};

UploadButton.propTypes = {
  id: PropTypes.string.isRequired,
  prevUrl: PropTypes.string.isRequired,
  setUrl: PropTypes.func.isRequired,
  dir: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default UploadButton;
