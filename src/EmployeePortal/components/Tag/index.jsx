import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TagContainer = styled.div`
  display: inline-flex;
  padding: 5px 8px;
  border-radius: 11px;
  justify-content: center;
  align-items: center;
  background: navy;
  color: white;
  margin: 6px 6px 0 0;
`;

const Tag = (props) => {
  // eslint-disable-next-line react/prop-types
  const { text, className } = props;
  return <TagContainer className={className}>{text}</TagContainer>;
};

Tag.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tag;
