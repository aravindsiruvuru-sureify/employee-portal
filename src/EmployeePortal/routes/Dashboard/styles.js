import styled from 'styled-components';
import {
  font12PrimaryRoboto,
  font16PrimaryLightRoboto,
} from '../../themes/typos';

export const RightContentContainer = styled.div`
  flex-grow: 1;
  height: calc(100vh - 64px);
  padding-bottom: 30px;
  overflow: auto;
`;

export const SelectEmployeeDesc = styled(font12PrimaryRoboto)`
  line-height: 1.5;
  margin-top: 8px;
  padding-left: 15px;
  @media (max-width: 1300px) {
    padding-left: 0px;
  }
`;

export const LeftContentContainer = styled.div`
  background: #f1f1f1;
  min-width: 350px;
  padding-top: 50px;
  @media (max-width: 1300px) {
    min-width: 250px;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  margin: 0px auto;
  @media (max-width: 1300px) {
    max-width: 220px;
  }
`;

export const EmptyIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width: 80%; */
  height: calc(100vh - 105px);
  flex-grow: 1;
`;

export const EmptyDescription = styled(font16PrimaryLightRoboto)`
  margin-top: 60px;
`;
