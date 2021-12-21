import styled from "styled-components";
import { font16PrimaryLightRoboto } from "../../EmployeePortal/themes/typos";

const InputWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

const InputTitle = styled(font16PrimaryLightRoboto)`
  color: #183b56;
`;

export { InputWrapper, InputTitle };
