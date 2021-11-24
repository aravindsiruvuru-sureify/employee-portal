import React from 'react';
import { Button } from '@material-ui/core';
import { PropTypes } from 'prop-types';

import PrimaryButton from '../PrimaryButton';

import ActionButtonsContainer from './styles';

const OnboardingActionButtons = ({
  handleNextClick,
  handleBackClick,
  isNextDisabled,
  isBackDisabled,
}) => {
  return (
    <ActionButtonsContainer>
      <Button disabled={isBackDisabled} onClick={handleBackClick}>
        Back
      </Button>
      <PrimaryButton
        isDisabled={isNextDisabled}
        handleClick={handleNextClick}
        label="Next"
      />
    </ActionButtonsContainer>
  );
};

OnboardingActionButtons.propTypes = {
  handleNextClick: PropTypes.func.isRequired,
  handleBackClick: PropTypes.func.isRequired,
  isNextDisabled: PropTypes.bool.isRequired,
  isBackDisabled: PropTypes.bool.isRequired,
};
export default OnboardingActionButtons;
