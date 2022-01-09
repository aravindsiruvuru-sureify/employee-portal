import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get } from "lodash";

import empty from "../../../assets/svgs/empty.svg";

import MainContainer from "../../components/MainContainer";

import DashboardJobsView from "../../components/DashboardJobsView";
import DashboardCoursesView from "../../components/DashboardCoursesView";
import DashboardEmployeesView from "../../components/DashboardEmployeesView";
import DashboardProfileView from "../../components/DashboardProfileView";
import DashboardProjectsView from "../../components/DashboardProjectsView";

import {
  RightContentContainer,
  EmptyIconContainer,
  EmptyDescription,
  LeftContentContainer,
  LeftContent,
  TabItemContainer,
} from "./styles";

import {
  headers,
  PROFILE_TAB,
  EMPLOYEES_TAB,
  JOB_DETAILS_TAB,
  CAREER_DETAILS_TAB,
  PROJECTS_TAB,
  QUOTE_DETAILS,
} from "./shared";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState(PROFILE_TAB.id);

  const renderEmptyView = () => {
    return (
      <EmptyIconContainer>
        <img src={empty} alt="" style={{ width: "300px", height: "300px" }} />
        <EmptyDescription>Page is under development</EmptyDescription>
      </EmptyIconContainer>
    );
  };

  const renderContent = () => {
    switch (selectedTab) {
      case JOB_DETAILS_TAB.id:
        return <DashboardJobsView />;
      case CAREER_DETAILS_TAB.id:
        return <DashboardCoursesView />;
      case EMPLOYEES_TAB.id:
        return <DashboardEmployeesView />;
      case PROFILE_TAB.id:
        return <DashboardProfileView />;
      case PROJECTS_TAB.id:
        return <DashboardProjectsView />;
      case QUOTE_DETAILS.id:
        return renderEmptyView();
      default:
        return null;
    }
  };

  const renderRightContent = () => {
    return <RightContentContainer>{renderContent()}</RightContentContainer>;
  };

  const renderLeftContent = () => {
    return (
      <LeftContentContainer>
        <LeftContent>
          {headers.map((header) => (
            <TabItemContainer
              key={header.id}
              selected={selectedTab === header.id}
              onClick={() => {
                setSelectedTab(header.id);
              }}
            >
              <span
                style={{
                  marginLeft: "6px",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                {header.label}
              </span>
            </TabItemContainer>
          ))}
        </LeftContent>
      </LeftContentContainer>
    );
  };

  return (
    <MainContainer loadingStatus={200} noScroll isDashboard>
      <div style={{ display: "flex" }}>
        {renderLeftContent()}
        {renderRightContent()}
      </div>
    </MainContainer>
  );
};

export default Dashboard;
