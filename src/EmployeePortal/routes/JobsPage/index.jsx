import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { get } from "lodash";

import MainContainer from "../../components/MainContainer";

import Table from "../../../CommonComponents/Table";
import Modal from "../../../CommonComponents/Modal";

import { getHomePageJobsList } from "../../store/employeeStore/actions";

import JobDetailsApplicationForm from "../../components/JobDetailsApplicationForm";

import SearchBarComponent from "../../components/SearchBarComponent";

export const Container = styled.div`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: none !important;
  margin-bottom: unset !important;
`;

const JobsPage = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(null);

  const store = useSelector((state) => get(state, ["employeeStore"], {}));
  const jobsData = get(store, "jobsData", {});
  const loader = get(store, "loader", false);

  const getJobs = async () => {
    await dispatch(getHomePageJobsList({ page: 0 }));
  };
  useEffect(() => {
    getJobs();
  }, []);

  const onJobSelected = () => {};

  const getModalContent = () => {
    return (
      selected && (
        <JobDetailsApplicationForm
          jobDetails={selected}
          onClickCrossIcon={() => {
            setSelected(null);
          }}
        />
      )
    );
  };

  return (
    <MainContainer loadingStatus={loader ? 100 : 200}>
      <Container id="asdf">
        <Table
          data={jobsData.content}
          columnKeys={[
            { id: "title", label: "Title" },
            { id: "experience", label: "Experience" },
            { id: "experienceLevel", label: "Experience level" },
            { id: "location", label: "Location" },
            { id: "contractType", label: "Contract type" },
            { id: "primarySkill", label: "Primary skill" },
          ]}
          page={jobsData.number}
          count={jobsData.totalElements}
          rowsPerPage={jobsData.numberOfElements}
          onRowClick={onJobSelected}
          onSelectTableRow={(row) => {
            setSelected(row);
          }}
          gotoNextPage={(page) => {
            dispatch(getHomePageJobsList({ page }));
          }}
        />
      </Container>
    </MainContainer>
  );
};

export default JobsPage;
