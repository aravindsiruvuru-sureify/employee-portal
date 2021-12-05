import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get } from "lodash";

import empty from "../../../assets/svgs/empty.svg";

import { Font25PrimaryRobotoMedium } from "../../themes/typos";
import MainContainer from "../../components/MainContainer";

import DashboardJobsView from "../../components/DashboardJobsView";
import DashboardCoursesView from "../../components/DashboardCoursesView";

import {
  RightContentContainer,
  EmptyIconContainer,
  EmptyDescription,
  LeftContentContainer,
  SelectEmployeeDesc,
  LeftContent,
  TabItemContainer,
} from "./styles";

const headers = [
  { id: "profile-details", label: "Profile details" },
  { id: "employee-list", label: "Employee List" },
  { id: "job-details", label: "Job details" },
  { id: "careers-details", label: "Careers Details" },
  { id: "request-for-quote-details", label: "Request for Quote details" },
];

const Dashboard = () => {
  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState("job-details");

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
      case "job-details":
        return <DashboardJobsView />;
      case "careers-details":
        return <DashboardCoursesView />;
      case "employee-list":
      case "profile-details":
      case "request-for-quote-details":
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
