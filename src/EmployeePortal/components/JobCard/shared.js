import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Card } from "@material-ui/core";
import { isEmpty } from "lodash";

import { PrimaryButton, FormLoader } from "../../../CommonComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSuitcase,
  faMapMarkerAlt,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";

import { Fields, CardActions, JobTitle, PostedLabel, Skills } from "./styles";


export const JobDetailsShort = (props) => {
  const { job } = props;
  const getExperience = () => {
    if (job.experienceLevel === "Experienced") {
      return job.experience;
    }
    return "Fresher";
  };

  const getJobType = () => {
    if (job.contractType === "Contract") {
      return (
        <Skills>
          <b>Contract Duration: </b>
          {job.contractDuration}
        </Skills>
      );
    }
  };
  return (
    <>
      <div style={{ display: "flex", marginTop: "12px" }}>
        <div
          style={{
            marginRight: "12px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon icon={faSuitcase} style={{ marginRight: "8px" }} />
          <span>{getExperience()}</span>
        </div>
        <div
          style={{
            marginRight: "12px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            style={{ marginRight: "8px" }}
          />
          <span>{job.location}</span>
        </div>
        <div
          style={{
            marginRight: "12px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon icon={faCoins} style={{ marginRight: "8px" }} />
          <span>{job.salary}</span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "12px",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Skills>
          <b>Skills: </b>Java, ReactJS
        </Skills>
        <Skills>
          <b>Type: </b>
          {job.contractType}
        </Skills>
        {getJobType()}
      </div>
    </>
  );
};
