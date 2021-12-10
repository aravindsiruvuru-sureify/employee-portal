import React from "react";

import {
  Container,
  HeadingOne,
  Label,
  LabelBold,
  RowContainer,
  Heading,
  RightCard,
  ContentWrapper,
} from "./styles";

export const DetailsList = ({ details, properties }) => {
  return properties.map((el) => {
    return (
      <div style={{ marginBottom: "12px", padding: "7px", minWidth: "200px" }}>
        <LabelBold>{el.label}: </LabelBold>
        <br></br>
        <Label style={{ fontSize: "14px" }}>{details[el.id]}</Label>
      </div>
    );
  });
};
