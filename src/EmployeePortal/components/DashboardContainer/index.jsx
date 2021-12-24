import React from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

export const ViewContainer = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: none !important;
  margin-bottom: unset !important;
  ${(props) =>
    props.loader &&
    `
  height: calc(100vh - 64px);
  `}
`;

export const Container = (props) => {
  const { children, loader } = props;
  return (
    <ViewContainer loader={loader}>
      {loader ? <CircularProgress /> : children}
    </ViewContainer>
  );
};
