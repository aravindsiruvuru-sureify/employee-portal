import styled from 'styled-components';
import { font22PrimaryRobotoMedium } from '../../themes/typos';

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  position: relative;
`;
const FieldsWrapper = styled.div`
  padding: 25px 10px 10px 10px;
  border: 2px solid grey;
  border-radius: 5px;
  margin-top: 50px;
  position: relative;
`;

const YourReferralText = styled(font22PrimaryRobotoMedium)`
  position: absolute;
    background: white;
    top: -17px;
    border-radius: 5px;
    left: 10px;
    padding: 0px 5px;
`;

export { Fields, YourReferralText, FieldsWrapper };
