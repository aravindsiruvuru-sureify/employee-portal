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
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: none !important;
  margin-bottom: unset !important;
`;

const JobsPage = () => {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const store = useSelector((state) => get(state, ["employeeStore"], {}));
  const jobsData = get(store, "jobsData", {});
  useEffect(() => {
    setLoader(true);
    dispatch(getJobsList());
    setLoader(false);
  }, []);

  return (
    <MainContainer loadingStatus={loader ? 100 : 200}>
      <Container>
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
