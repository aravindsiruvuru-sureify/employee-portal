import React, { useState } from "react";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { makeStyles } from "@material-ui/core/styles";

import CourseApplicationForm from "../CourseApplicationForm";
import { PrimaryButton } from "../../../CommonComponents";
import completed from "../../../assets/svgs/completed.svg";

import FormLoader from "../../../CommonComponents/FormLoader";
import { useDispatch } from "react-redux";

import {
  Container,
  HeadingOne,
  Label,
  RowContainer,
  Heading,
  RightCard,
  ContentWrapper,
} from "./styles";

import { DetailsList } from "./shared";

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
    top: "30px",
    right: "30px",
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

const CoursesDetails = ({
  courseDetails,
  onClickCrossIcon,
  isDashboard = false,
}) => {
  const dispatch = useDispatch();

  const classes = useStyles();
  const [loader, setLoader] = useState(false);
  const [showApplication, setShowApplication] = useState(false);
  const [successAPI, setSuccessAPI] = useState(false);

  const getCoursesApplicationForm = () => {
    return successAPI ? (
      <div
        style={{
          height: "450px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
        }}
        onBlur={() => {
          onClickCrossIcon();
        }}
      >
        <CloseOutlinedIcon
          className={classes.root}
          onClick={onClickCrossIcon}
        />
        <img src={completed} alt="complete" style={{ height: "200px" }} />
        <span style={{ marginTop: "14px", fontSize: "16px" }}>
          You application has been successfully submitted
        </span>
      </div>
    ) : (
      <CourseApplicationForm
        onClickCrossIcon={onClickCrossIcon}
        onClickSubmitButton={() => {
          setLoader(true);
          setLoader(false);
          setSuccessAPI(true);
        }}
        course={courseDetails}
      />
    );
  };

  const getCourseDetails = () => {
    const description = courseDetails.courseContent
      .split("|")
      .filter((item) => item.length);

    const getPropertyCards = (courseDetails) => {
      const requiredProperties = [
        { id: "courseCode", label: "Course code" },
        { id: "duration", label: "Duration" },
        { id: "fee", label: "Fee" },
        { id: "mode", label: "Mode" },
        { id: "regEndDate", label: "Registration end date" },
        { id: "startDate", label: "Start date" },
        { id: "timings", label: "Timings" },
        { id: "trainer", label: "Trainer" },
        { id: "type", label: "Type" },
      ];

      return (
        <DetailsList details={courseDetails} properties={requiredProperties} />
      );
    };

    return (
      <Container>
        <CloseOutlinedIcon
          className={classes.root}
          onClick={onClickCrossIcon}
          style={{ color: "white" }}
        />

        <div
          style={{
            height: "120px",
            backgroundColor: "#183B56",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
        >
          <Heading>{courseDetails.courseName}</Heading>
        </div>
        <ContentWrapper>
          <RowContainer>
            <HeadingOne>About</HeadingOne>
            <ul>
              {description.map((item) => (
                <li style={{ marginBottom: "12px" }}>
                  <Label key={item}>{item}</Label>
                </li>
              ))}
            </ul>
            {!isDashboard && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  marginTop: "24px",
                }}
              >
                <PrimaryButton
                  handleClick={() => {
                    setShowApplication(true);
                  }}
                  label="Enroll"
                  cssClass={classes.applyButton}
                />
                <i>*click here to enroll into the course</i>
              </div>
            )}
          </RowContainer>
          <RightCard>{getPropertyCards(courseDetails)}</RightCard>
        </ContentWrapper>
      </Container>
    );
  };

  return (
    <>
      {loader && <FormLoader />}
      {showApplication ? getCoursesApplicationForm() : getCourseDetails()}
    </>
  );
};

export default CoursesDetails;
