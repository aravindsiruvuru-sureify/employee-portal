/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSuitcase,
  faMapMarkerAlt,
  faCoins,
  faPhoneAlt,
  faEnvelope,
  faUserTag,
} from "@fortawesome/free-solid-svg-icons";

import externalLink from "../../../assets/svgs/external-link.svg";
import twitter from "../../../assets/svgs/twitter.svg";
import { navigateToPage } from "../../utils/RouterUtils";
import { TextInput, PrimaryButton } from "../../../CommonComponents";

import Tag from "../Tag";
import { ModalInputsWrapper, Fields } from "..";
import { ProjectCard } from "./shared";
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
  PlaceholderText,
  IconLabel,
  SubHeading,
} from "./styles";

const useStyles = makeStyles({
  field: {
    margin: "15px 0",
    width: "350px",
    "& .MuiFilledInput-root ": {
      fontSize: "14px",
      background: `#F0F0F0`,
    },
    "& .MuiList-root ": {
      "z-index": 1000001,
    },
    "& .MuiInputLabel-filled": {
      fontSize: "14px",
    },
  },
  root: {
    top: "30px",
    right: "30px",
    position: "absolute",
    cursor: "pointer",
  },
  button: {
    marginTop: "15px",
    width: "90px",
    fontSize: "14px",
    height: "36px",
  },
});

const DashboardProfileView = (props) => {
  const { employee, onClickCrossIcon } = props;
  const classes = useStyles();
  const history = useHistory();

  const onClickProject = (id) => {
    navigateToPage({ history, route: `/project-details/${id}` });
  };

  const renderProject = (project) => {
    return (
      <ProjectContainer
        onClick={() => {
          onClickProject(project.project_id);
        }}
      >
        <ProjectTitle>{project.name}</ProjectTitle>
        <ExternalIcon src={externalLink} alt="external-link" />
      </ProjectContainer>
    );
  };

  return (
    <Container>
      <BasicDetails>
        {/* {employee.profile_pic_url ? (
          <ProfileImage alt="profile-image" src={employee.profile_pic_url} />
        ) : ( */}
        <PlaceholderText text={`AB`} />
        {/* )} */}
        <ProfileDetails>
          <HeadingOne>{`Dustin Poirier`}</HeadingOne>
          <IconLabel>
            <FontAwesomeIcon icon={faUserTag} style={{ marginRight: "10px" }} />
            <Label>{`Backend developer`}</Label>
          </IconLabel>
          <IconLabel>
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ marginRight: "10px" }}
            />
            <Label>{`dustin@gmail.com`}</Label>
          </IconLabel>
          <IconLabel>
            <FontAwesomeIcon
              icon={faPhoneAlt}
              style={{ marginRight: "10px" }}
            />
            <Label>{`9090911811`}</Label>
          </IconLabel>
        </ProfileDetails>
      </BasicDetails>
      <RowContainer>
        <Heading>About me</Heading>
        <AboutMeText>
          Hello there....In publishing and graphic design, Lorem ipsum is a
          placeholder text commonly used to demonstrate the visual form of a
          document or a typeface without relying on meaningful content. Lorem
          ipsum may be used as a placeholder before final copy is available. It
          is also used to temporarily replace text in a process called greeking,
          which allows designers to consider the form of a webpage or
          publication, without the meaning of the text influencing the design.
          Lorem ipsum is typically a corrupted version of 'De finibus bonorum et
          malorum', a 1st century BC text by the Roman statesman and philosopher
          Cicero, with words altered, added, and removed to make it nonsensical
          and improper Latin.
        </AboutMeText>
      </RowContainer>
      <RowContainer>
        <Heading>Projects</Heading>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </RowContainer>
      <RowContainer>
        <Heading>Bank details</Heading>
        <ProjectContainer>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "8px",
            }}
          >
            <SubHeading>Bank Name:</SubHeading>
            <span>HDFC</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "8px",
            }}
          >
            <SubHeading>Account Number:</SubHeading>
            {"  "}

            <span>04337487287372</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "8px",
            }}
          >
            <SubHeading>IFSC Code:</SubHeading>
            <span>HDFCB047782</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "8px",
            }}
          >
            <SubHeading>Branch Name:</SubHeading>
            <span>electronic city</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "8px",
            }}
          >
            <SubHeading>Location</SubHeading>
            <span>Bangalore</span>
          </div>
        </ProjectContainer>
      </RowContainer>
    </Container>
  );
};

//TODO: may be we can render the Social accounts by itarating through social_urls key after getting updated

DashboardProfileView.propTypes = {
  employee: PropTypes.object.isRequired,
  onClickCrossIcon: PropTypes.func.isRequired,
};
export default DashboardProfileView;
