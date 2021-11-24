import React from 'react';
import { PropTypes } from 'prop-types';

import {
  DateText,
  Heading,
  HeadingWrapper,
  NewsLetterContainer,
  StyledContainer,
} from './styles';

const Newsletter = ({ htmlContent = '', date = '' }) => {
  return (
    <StyledContainer>
      <HeadingWrapper id="right-contant">
        <Heading>Weekly Newsletter</Heading>
        <DateText>{date}</DateText>
      </HeadingWrapper>
      <NewsLetterContainer dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </StyledContainer>
  );
};

Newsletter.propTypes = {
  htmlContent: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Newsletter;
