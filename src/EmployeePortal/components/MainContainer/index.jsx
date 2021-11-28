import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import { ReactComponent as Api } from '../../../assets/svgs/api.svg';

import {
  API_FAILED,
  API_FETCHING,
  API_SUCCESS,
} from '../../services/APIConstants';
import colors from '../../themes/colors';

const useStyles = makeStyles(() => ({
  root: {
    color: colors.primary,
    width: '60px !important',
    height: '60px !important',
  },
}));

const Container = styled.div`
  background: #e5e5e5;
  height: 100vh;
  padding: ${(props) =>
    props.type === 'secondary' ? '0px' : '64px 0px 40px 0'};
  overflow: ${(props) => (props.isScrollable ? 'auto' : 'hidden')};
`;

const LoaderContainer = styled.div`
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const MainContainer = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, loadingStatus, className, noScroll } = props;
  const classes = useStyles();

  const displayLoader = () => {
    return (
      <LoaderContainer>
        <CircularProgress className={classes.root} />
      </LoaderContainer>
    );
  };

  const displayApiError = () => {
    //TODO: need to a function to get error message from error object
    return (
      <LoaderContainer>
        <Api style={{ height: '350px' }} />
      </LoaderContainer>
    );
  };

  const renderContent = () => {
    switch (loadingStatus) {
      case API_FETCHING:
        return displayLoader();
      case API_SUCCESS:
        return children;
      case API_FAILED:
        return displayApiError();

      default:
        return children;
    }
  };
  return (
    <Container
      id="maincontainer"
      className={className}
      isScrollable={!noScroll}
    >
      {renderContent()}
    </Container>
  );
};
export default MainContainer;
