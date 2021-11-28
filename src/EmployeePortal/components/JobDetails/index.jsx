import React from "react";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { makeStyles } from "@material-ui/core/styles";

import { JobDetailsShort } from "../JobCard/shared";

import {
  Container,
  BasicDetails,
  ProfileImage,
  ProfileDetails,
  HeadingOne,
  Label,
  RowContainer,
  AboutMeText,
  ColumnContainer,
  Skills,
  Hobbies,
  ListContainer,
  Hobby,
  ProjectContainer,
  ProjectTitle,
  Heading,
  Icon,
  ExternalIcon,
  //   PlaceholderText,
} from "./styles";

const useStyles = makeStyles({
  field: {
    margin: "15px 0",
    width: "100%",
    "& .MuiFilledInput-root ": {
      background: `#F0F0F0`,
    },
    "& .MuiList-root ": {
      "z-index": 1000001,
    },
  },
  root: {
    top: "20px",
    right: "10px",
    position: "absolute",
    cursor: "pointer",
  },
  button: {
    marginTop: "15px",
    width: "90px",
  },
});

const JobDetails = (props) => {
  const { jobDetails, onClickCrossIcon } = props;
  const classes = useStyles();

  const description = jobDetails.description
    .split("|")
    .filter((item) => item.length);
  return (
    <Container>
      <CloseOutlinedIcon className={classes.root} onClick={onClickCrossIcon} />

      <Heading>{jobDetails.title}</Heading>
      <BasicDetails>
        <ProfileDetails>
          <JobDetailsShort job={jobDetails} />
          {/* <Label>{employee.team}</Label> */}
          {/* <Label>{`${employee.total_experience} Years Experience`}</Label> */}
          {/* <Label>{employee.phone_number}</Label> */}
        </ProfileDetails>
      </BasicDetails>
      <RowContainer>
        <HeadingOne>About</HeadingOne>
        <ul>
          {description.map((item) => (
            <li style={{ marginBottom: "12px" }}>
              <Label key={item}>{item}</Label>
            </li>
          ))}
        </ul>
      </RowContainer>
    </Container>
  );
};

export default JobDetails;
