import React from "react";

import RegistrationCard from "../../components/RegistrationCard";

import MainContainer from "../../components/MainContainer";

const LoginPage = () => {
  return (
    <MainContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#e0e0e0",
          padding: "60px",
        }}
      >
        <RegistrationCard />
      </div>
    </MainContainer>
  );
};

export default LoginPage;
