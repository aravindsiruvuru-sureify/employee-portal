/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const colors = [
  '#eb4034',
  '#26A69A',
  '#641E16',
  '#76448A',
  '#1A5276',
  '#0E6655',
  '#D35400',
  '#2E4053',
  '#3498DB',
  '#884EA0',
  '#616A6B',
  '#F4D03F',
  '#6495ED',
  '#C0392B',
  '#229954',
  '#4D5656',
  '#2471A3',
  '#3498DB',
  '#F39C12',
  '#283593',
  '#00ACC1',
  '#4E342E',
  '#FF6F00',
  '#186A3B',
  '#A569BD',
  '#839192',
];

const TextView = styled.div`
  width: 50px;
  height: 50px;
  background: ${(props) => colors[props.code]};
  color: white;
  font-size: 22px;
  font-weight: bold;
  border-radius: ${(props) => (props.isCircle ? '50%' : 'none')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileTextView = (props) => {
  const { text, className, isCircle } = props;
  const label = text.toUpperCase();
  const code = label.charCodeAt(0) - 65;
  return (
    <TextView className={className} isCircle={isCircle} code={code}>
      {label}
    </TextView>
  );
};

export default ProfileTextView;
