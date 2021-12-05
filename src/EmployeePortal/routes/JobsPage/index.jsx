import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { get } from "lodash";

import MainContainer from "../../components/MainContainer";

import Table from "../../../CommonComponents/Table";
import Modal from "../../../CommonComponents/Modal";

import { getHomePageJobsList } from "../../store/employeeStore/actions";

import JobDetailsApplicationForm from "../../components/JobDetailsApplicationForm";

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
  const [loader, setLoader] = useState(true);
  const [selected, setSelected] = useState(null);

  const store = useSelector((state) => get(state, ["employeeStore"], {}));
  const jobsData = get(store, "jobsData", {});

  const getJobs = async () => {
    await dispatch(getHomePageJobsList());
  };
  useEffect(() => {
    setLoader(true);
    getJobs();
    setLoader(false);
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
    <MainContainer isDashboard={false} loadingStatus={200}>
      <Modal open={!!selected} handleClose={() => {}}>
        {selected && getModalContent()}
      </Modal>
      <Container>
        <div style={{ width: "90%", display: "flex" }}>
          <h1
            style={{
              marginLeft: "18px",
              marginBottom: "18px",
              fontFamily: "Roboto",
            }}
          >
            Jobs
          </h1>
        </div>
        <Table
          data={jobsData.content}
          columnKeys={[
            "title",
            "experience",
            "experienceLevel",
            "location",
            "postedOn",
            "primarySkill",
          ]}
          rowsPerPage={jobsData.numberOfElements}
          count={jobsData.totalPages}
          totalElements={jobsData.totalElements}
          onRowClick={onJobSelected}
          onSelectTableRow={(row) => {
            setSelected(row);
          }}
        />
      </Container>
    </MainContainer>
  );
};

export default JobsPage;
