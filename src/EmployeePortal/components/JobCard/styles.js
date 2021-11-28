import styled from "styled-components";

import {
  font16PrimaryRobotoBold,
  font12PrimaryRoboto,
  Font14PrimaryRobotoMedium,
} from "../../themes/typos";

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 210px;
  width: 85%;
`;

const CardActions = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;
`;

const JobTitle = styled(font16PrimaryRobotoBold)``;

const PostedLabel = styled(font12PrimaryRoboto)``;

const Skills = styled(Font14PrimaryRobotoMedium)`
  white-space: nowrap;
  margin: 6px 0;
`;

export { CardActions, Fields, JobTitle, PostedLabel, Skills };
