import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { get } from "lodash";

import MainContainer from "../../components/MainContainer";

import Table from "../../../CommonComponents/Table";

import { getJobsList } from "../../store/employeeStore/actions";

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
  const store = useSelector((state) => get(state, ["employeeStore"], {}));
  const jobsData = get(store, "jobsData", {});
  useEffect(() => {
    setLoader(true);
    dispatch(getJobsList());
    setLoader(false);
  }, []);

  return (
    <MainContainer loadingStatus={200}>
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
        />
      </Container>
    </MainContainer>
  );
};

export default JobsPage;
