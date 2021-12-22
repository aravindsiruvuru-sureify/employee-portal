import styled from "styled-components";

import {
  font20PrimaryRobotoBold,
  fontH2PrimaryRoboto,
  fontH3PrimaryRoboto,
  font16PrimaryRoboto400,
  font16PrimaryParaRoboto,
  font14PrimaryRoboto400,
  font14PrimaryParaRoboto,
  font16PrimaryRobotoBold,
} from "../../themes/typos";

import colors from "../../themes/colors";

import ProfileTextView from "../ProfileTextView";

export const PlaceholderText = styled(ProfileTextView)`
  width: 180px;
  height: 180px;
  font-size: 50px;
  border-radius: 4px;
`;

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  position: relative;
  padding: 60px 40px 40px 40px;
  border-radius: 20px;
  margin: 30px;
  padding: 35px;
`;

export const BasicDetails = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 4px;
`;

export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;

export const HeadingOne = styled(font20PrimaryRobotoBold)`
  margin-bottom: 12px;
`;

export const Heading = styled(fontH3PrimaryRoboto)`
  margin-bottom: 12px;
  text-transform: none;
`;

export const Label = styled(font14PrimaryRoboto400)`
  /* margin-bottom: 10px; */
`;

export const RowContainer = styled.div``;

export const AboutMeText = styled(font14PrimaryParaRoboto)`
  line-height: 1.5;
`;

export const ColumnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Skills = styled.div`
  width: 45%;
`;

export const Hobbies = styled(Skills)``;

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Hobby = styled.li`
  font-size: 16px;
  font-family: Roboto;
  color: ${colors.primary};
  margin-bottom: 10px;
`;

export const ProjectContainer = styled.div`
  margin-right: 16px;
  margin-bottom: 14px;
  width: 340px;
  border: 1px solid rgba(24, 59, 86, 0.7);
  padding: 12px 8px;
  border-radius: 4px;
  display: flex;
  justify-content: start;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.25);
  flex-direction: column;
`;

export const ProjectTitle = styled(font16PrimaryRoboto400)`
  user-select: none;
`;

export const ProjectDec = styled(font14PrimaryParaRoboto)`
  margin-top: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  white-space: normal;
`;

export const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 46px;
  cursor: pointer;
`;

export const ExternalIcon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 4px;
  right: 4px;
  user-select: none;
`;

export const IconLabel = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const SubHeading = styled(font16PrimaryRobotoBold)``;
