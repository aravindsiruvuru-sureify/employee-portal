import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { get } from "lodash";

import MainContainer from "../../components/MainContainer";

import Table from "../../../CommonComponents/Table";

import { getHomePageCoursesList } from "../../store/actions";
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

const CoursesPage = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => get(state, ["employeeStore"], {}));
  const coursesData = get(store, "coursesData", {});
  const loader = get(store, "loader", false);

  const getCourses = async () => {
    await dispatch(getHomePageCoursesList());
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <MainContainer isDashboard={false} loadingStatus={loader ? 100 : 200}>
      <Container>
        <div
          style={{
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              marginLeft: "18px",
              marginBottom: "18px",
              fontFamily: "Roboto",
              textTransform: "none",
            }}
          >
            Courses
          </h1>
          <SearchBarComponent />
        </div>
        <Table
          data={coursesData.content}
          columnKeys={[
            { id: "courseName", label: "Course name" },
            { id: "trainer", label: "Trainer" },
            { id: "type", label: "Type" },
            { id: "startDate", label: "Start date" },
            { id: "duration", label: "Duration" },
            { id: "fee", label: "Fee" },
          ]}
          rowsPerPage={coursesData.numberOfElements}
          count={coursesData.totalPages}
          totalElements={coursesData.totalElements}
        />
      </Container>
    </MainContainer>
  );
};

export default CoursesPage;
