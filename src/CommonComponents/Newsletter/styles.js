import styled from 'styled-components';

import colors from '../../EmployeePortal/themes/colors';
import {
  font14BlackRobotoNormal,
  font20PrimaryRobotoBold,
} from '../../EmployeePortal/themes/typos';

export const StyledContainer = styled.div`
  padding: 35px 30px;
  margin: 15px auto;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
  width: 800px;
  border-radius: 10px;
  background: ${colors.white};
  width: 100%;
  max-width: 1100px;
  @media only screen and (max-width: 1400px) {
    width: 98%;
    max-width: 900px;
  } ;
`;

export const HeadingWrapper = styled.div`
  margin-bottom: 30px;
`;

export const Heading = styled(font20PrimaryRobotoBold)`
  padding-right: 10px;
`;

export const DateText = styled(font14BlackRobotoNormal)`
  color: ${colors.primary};
  opacity: 0.8;
`;

export const NewsLetterContainer = styled.div``;
