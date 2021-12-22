import styled from "styled-components";

import colors from "../../themes/colors";
import { fontH3PrimaryRoboto } from "../../themes/typos";

export const PasswordBlock = styled.div`
  position: relative;
  background: ${colors.white};
  margin: 30px;
  padding: 30px;
  border-radius: 20px;
`;

export const Heading = styled(fontH3PrimaryRoboto)`
  margin-bottom: 12px;
  text-transform: none;
`;
