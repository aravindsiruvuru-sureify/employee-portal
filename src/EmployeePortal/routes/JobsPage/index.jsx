import React from "react";
import styled from "styled-components";

import JobCard from "../../components/JobCard";

import MainContainer from "../../components/MainContainer";

export const Container = styled.div`
  padding: 40px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const job = {
  title: "Java – 7 – 12 Yrs – Bangalore",
  description:
    "Expertise in Performance Testing tools like Jmeter|Expertise in Programming/Scripting in C,C++,Java etc|Knowledge of Agile and Dev-Ops methodologies|Nice to have knowledge/experience on container-based applications|Design and Execute Load Tests as per plan and provide detailed feedback after Analysis and look into Infrastructure and Application Metrics to identify potential bottlenecks|Strong background in developing Performance Testing frameworks|utilities, assets & accelerators on various platforms|Knowledge of Performance monitoring tools like (AppDynamisc / Grafana etc)|Knowledge of Performance troubleshooting (heap dump & thread dump analysis) is preferred|Ability to Work with teams to monitor and suggest solutions, test environment-related, monitoring related & load balancing related|Excellent communication skills and ability to work with multiple teams and Clients/ stakeholders in a dynamic environment|",
  primarySkill: "JAVA",
  secondarySkill: "ReactJS",
  salary: "10k - 20k pm",
  ref: 10126,
  postedOn: "November 10, 2021",
  experienceLevel: "Experienced",
  experience: "2-4 years",
  contractType: "Permanent",
  contractDuration: "6 months",
  location: "Bangalore",
  publish: true,
};

const JobsPage = () => {
  return (
    <MainContainer loadingStatus={200}>
      <Container>
        <JobCard job={job} />
        <JobCard job={job} />
        <JobCard job={job} />
        <JobCard job={job} />
        <JobCard job={job} />
      </Container>
    </MainContainer>
  );
};

export default JobsPage;
