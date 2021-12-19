import styled from "styled-components";
import { font20PrimaryRobotoBold, font14BlackRobotoNormal } from "../../themes/typos";

export const CardWrapper = styled.div`
    background-color: ${({moreStyles}) => moreStyles?.bColor || 'white'};
    padding: ${({moreStyles}) => moreStyles?.padding || '20px'};
    margin: 10px;
    width: 70%;
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
`;


export const Heading = styled(font20PrimaryRobotoBold)`
  margin-right: 20px;
`;

export const SubHeading = styled(font14BlackRobotoNormal)`

`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
`;
