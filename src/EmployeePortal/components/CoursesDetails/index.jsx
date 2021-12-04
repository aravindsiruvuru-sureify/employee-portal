import React, { useState } from "react";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { makeStyles } from "@material-ui/core/styles";

import { JobDetailsShort } from "../JobCard/shared";
import JobApplicationForm from "../JobApplicationForm";
import { PrimaryButton } from "../../../CommonComponents";
import completed from "../../../assets/svgs/completed.svg";
import { getJobsList } from "../../store/employeeStore/actions";

import FormLoader from "../../../CommonComponents/FormLoader";
import { useDispatch } from "react-redux";

import {
  Container,
  BasicDetails,
  ProfileDetails,
  HeadingOne,
  Label,
  RowContainer,
  Heading,
} from "./styles";

const useStyles = makeStyles({
  field: {
    margin: "15px 0",
    width: "100%",
    "& .MuiFilledInput-root ": {
      background: `#F0F0F0`,
    },
    "& .MuiList-root ": {
      "z-index": 1000001,
    },
  },
  root: {
    top: "20px",
    right: "10px",
    position: "absolute",
    cursor: "pointer",
  },
  button: {
    marginTop: "15px",
    width: "90px",
  },
  applyButton: {
    backgroundColor: "#009933",
    fontSize: "14px",
    "&:focus": {
      backgroundColor: "#336600",
    },
    "&:hover": {
      backgroundColor: "#336600",
    },
  },
});

const JobDetailsJobApplicationForm = (props) => {
  const dispatch = useDispatch();

  const { jobDetails, onClickCrossIcon } = props;
  const classes = useStyles();
  const [loader, setLoader] = useState(false);
  const [showApplication, setShowApplication] = useState(false);
  const [successAPI, setSuccessAPI] = useState(false);



  const getCourseDetails = ({courseDetails}) => {
    const description = courseDetails.courseContent
    .split("|")
    .filter((item) => item.length);

    return (
      <Container>
        <CloseOutlinedIcon
          className={classes.root}
          onClick={onClickCrossIcon}
        />

        <Heading>{courseDetails.courseName}</Heading>
        <RowContainer>
          <HeadingOne>About</HeadingOne>
          <ul>
            {description.map((item) => (
              <li style={{ marginBottom: "12px" }}>
                <Label key={item}>{item}</Label>
              </li>
            ))}
          </ul>
        </RowContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <PrimaryButton
            handleClick={() => {
              setShowApplication(true);
            }}
            label="Apply"
            cssClass={classes.applyButton}
          />
          <i>*click here to apply</i>
        </div>
      </Container>
    );
  };


  return (
    <>
      {loader && <FormLoader />}
      {getCourseDetails()}
    </>
  );
};

export default getCourseDetails;
