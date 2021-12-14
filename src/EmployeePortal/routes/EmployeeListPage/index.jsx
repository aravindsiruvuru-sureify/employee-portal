import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { get } from "lodash";

import MainContainer from "../../components/MainContainer";

import Table from "../../../CommonComponents/Table";

import { getEmployeesList } from "../../store/actions";

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

const EmployeeListPage = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => get(state, ["employeeStore"], {}));
  const employees = get(store, "employees", {});
  const loader = get(store, "loader", false);

  const getEmployees = async () => {
    await dispatch(getEmployeesList({ page: 0 }));
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <MainContainer isDashboard={false} loadingStatus={loader ? 100 : 200}>
      <Container>
        <div style={{ width: "90%", display: "flex" }}>
          <h1
            style={{
              marginLeft: "18px",
              marginBottom: "18px",
              fontFamily: "Roboto",
            }}
          >
            Employees List
          </h1>
        </div>
        <Table
          data={employees.content}
          rowsPerPage={employees.numberOfElements}
          count={employees.totalPages}
          totalElements={employees.totalElements}
          onRowClick={() => {}}
          columnKeys={[
            { id: "emailId", label: "Email Id" },
            { id: "firstName", label: "First Name" },
            { id: "lastName", label: "Last Name" },
            { id: "designation", label: "Designation" },
            { id: "skills", label: "Skills" },
            { id: "location", label: "Location" },
          ]}
        />
      </Container>
    </MainContainer>
  );
};

export default EmployeeListPage;
