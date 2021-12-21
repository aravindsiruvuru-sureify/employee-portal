import React from "react";

import { ProjectContainer, ProjectTitle, ProjectDec, Heading } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import DateFnsUtils from "@date-io/date-fns";
import { format } from "date-fns";
export const ProjectCard = ({
  project = {
    projectName: "IKEA",
    projectDesc:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design. Lorem ipsum is typically a corrupted version of 'De finibus bonorum et malorum', a 1st century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin",
    startDate: "2021-11-28",
    endDate: "2022-11-28",
    client: "IKEA",
    clientLocation: "Sweden",
  },
}) => {
  const startedDate = format(new Date(project.startDate), "MM/dd/yyyy");
  const endDate = format(new Date(project.endDate), "MM/dd/yyyy");

  return (
    <ProjectContainer>
      <Heading style={{ marginBottom: "0" }}>{project.projectName}</Heading>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            marginRight: "12px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span>
            <b>Start date:</b>
          </span>
          <span>{startedDate}</span>
        </div>
        <div
          style={{
            marginRight: "12px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span>
            <b>End date:</b>
          </span>
          <span>{endDate}</span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            marginRight: "12px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span>
            <b>Client :</b>
          </span>
          <span>{project.client}</span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            marginRight: "12px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span>
            <b>Location :</b>
          </span>
          <span>{project.clientLocation}</span>
        </div>
      </div>
      <ProjectDec title={project.projectDesc}>{project.projectDesc}</ProjectDec>
    </ProjectContainer>
  );
};
