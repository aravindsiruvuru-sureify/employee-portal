import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get } from "lodash";

import empty from "../../../assets/svgs/empty.svg";

import { Font25PrimaryRobotoMedium } from "../../themes/typos";
import MainContainer from "../../components/MainContainer";

import {
  RightContentContainer,
  EmptyIconContainer,
  EmptyDescription,
  LeftContentContainer,
  SelectEmployeeDesc,
  LeftContent,
} from "./styles";

const headers = [
  "Profile details",
  "Employee List",
  "Job details",
  "Careers Details",
  "Request for Quote details",
];

const Dashboard = () => {
  const dispatch = useDispatch();

  const renderEmptyView = () => {
    return (
      <EmptyIconContainer>
        <img src={empty} alt="" />
        <EmptyDescription>
          You haven’t selected an employee yet. You will see configurations here
          once you select an employee.
        </EmptyDescription>
      </EmptyIconContainer>
    );
  };

  const renderRightContent = () => {
    return <RightContentContainer>Right content</RightContentContainer>;
  };

  const renderLeftContent = () => {
    return (
      <LeftContentContainer>
        <LeftContent>
          <Font25PrimaryRobotoMedium>
            Employee Configuration
          </Font25PrimaryRobotoMedium>
          <SelectEmployeeDesc>
            Please select an employee here to make some configuration.
          </SelectEmployeeDesc>
        </LeftContent>
      </LeftContentContainer>
    );
  };

  return (
    <MainContainer loadingStatus={200} noScroll>
      <div style={{ display: "flex" }}>
        {renderLeftContent()}
        {renderRightContent()}
      </div>
    </MainContainer>
  );
};

export default Dashboard;
