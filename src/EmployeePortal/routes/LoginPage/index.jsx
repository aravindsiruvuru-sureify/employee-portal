import React from "react";

import LoginCard from "../../components/LoginCard";

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
        <LoginCard />
      </div>
    </MainContainer>
  );
};

export default LoginPage;
