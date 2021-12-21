import styled from "styled-components";
import {
  font20PrimaryRobotoBold,
  font14BlackRobotoNormal,
} from "../../themes/typos";

export const CardWrapper = styled.div`
  background-color: ${({ moreStyles }) => moreStyles?.bColor || "white"};
  padding: ${({ moreStyles }) => moreStyles?.padding || "50px 30px"};
  margin: 10px;
  width: 350px;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  align-items: center;
  cursor: pointer;
`;

export const Heading = styled(font20PrimaryRobotoBold)`
  margin-right: 20px;
`;

export const SubHeading = styled(font14BlackRobotoNormal)``;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
`;
