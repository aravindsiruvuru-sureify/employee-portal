import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { get } from "lodash";

import MainContainer from "../../components/MainContainer";

import Table from "../../../CommonComponents/Table";
import Modal from "../../../CommonComponents/Modal";

import { getJobsList } from "../../store/employeeStore/actions";
import JobApplicationForm from "../JobApplicationForm";

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

const DashboardJobsView = () => {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);
  const [menuItem, setMenuItem] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);

  const store = useSelector((state) => get(state, ["employeeStore"], {}));
  const jobsData = get(store, "jobsData", {});
  useEffect(() => {
    setLoader(true);
    dispatch(getJobsList());
    setLoader(false);
  }, []);

  const getModalContent = () => {
    switch (menuItem) {
      case "Edit":
        return (
          <JobApplicationForm
            onClickCrossIcon={() => {}}
            onClickSubmitButton={() => {}}
            referral={selectedJob}
          />
        );
      default:
        break;
    }
    return <h1>{menuItem}</h1>;
  };

  return (
    <Container>
      <Modal open={!!menuItem} handleClose={() => {}}>
        {getModalContent()}
      </Modal>
      <Table
        dashboard
        data={jobsData.content}
        columnKeys={[
          "ref",
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
        menuItems={["Edit", "Delete", "Publish"]}
        onSelectMenuItem={({ menu, job }) => {
          setMenuItem(menu);
          setSelectedJob(job);
        }}
      />
    </Container>
  );
};

export default DashboardJobsView;
