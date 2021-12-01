import styled from 'styled-components';
import { font22PrimaryRobotoMedium } from '../../themes/typos';

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  position: relative;
`;

const YourReferralText = styled(font22PrimaryRobotoMedium)`
  margin: 20px 0px;
`;

export { Fields, YourReferralText };
