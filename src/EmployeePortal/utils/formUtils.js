import {
  COURSE_APPLICATION_IDS,
  PERFORMANCE_REVIEW_FIELDS,
  JOB_APPLICATION_IDS,
  REFERRAL_FEEDBACK_FIELDS,
} from "../constants";

const {
  courseName,
  courseContent,
  courseCode,
  trainer,
  type,
  mode,
  startDate,
  regEndDate,
  timings,
  duration,
  fee,
} = COURSE_APPLICATION_IDS;

const { result, factorsHelped, factorsHindered, selfRating } =
  PERFORMANCE_REVIEW_FIELDS.employee;

const { managerName, howToImprove, furtherObjectives, rating } =
  PERFORMANCE_REVIEW_FIELDS.manager;
const { fullname, link, experience, contactNumber } = JOB_APPLICATION_IDS;

const { feedback, feedbackBy, feedbackRating } = REFERRAL_FEEDBACK_FIELDS;

export const isSureifyEmail = (value) => {
  return value.includes("@sureify.com") && value.length > 14;
};

export const isLinkedinUrl = (value) =>
  value.includes("linkedin.com") && value.length > 12;

export const isTwitterUrl = (value) =>
  value.includes("twitter.com") && value.length > 12;

export const isGithubUrl = (value) =>
  value.includes("github.com") && value.length > 12;

export const isSlackUrl = (value) =>
  value.includes("slack.com") && value.length > 8;

export const isEmail = (value) => value.includes(".com") && value.length > 6;

export const checkExperiance = (value) => value > 0 && value <= 50;

export const verifyPassword = (value) => value.length > 7 || !value;

export const verifyMinLength3 = (value) => value && value.length > 2;

export const verifyMinLength2 = (value) => value && value.length > 1;

export const verifyMinLength10 = (value) => value && value.length > 9;

export const verifyArrayLength = (value) => value && value.length > 0;

export const handleButtonIsDisabled = (errorObject, formLength) => {
  let count = 0;
  Object.keys(errorObject).forEach((key) => {
    if (errorObject[key] === false) {
      count += 1;
    }
  });
  return count !== formLength;
};

export const handleHasError = (id, value) => {
  let hasError;
  if (value === null) return true;
  switch (id) {
    case courseName:
    case courseContent:
    case courseCode:
    case trainer:
    case timings:
    case duration:
    case fee:
      hasError = !verifyMinLength3(value);
      break;
    // case email:
    //   hasError = !isEmail(value);
    //   break;
    case experience:
      hasError = !checkExperiance(value);
      break;
    case startDate:
    case regEndDate:
      hasError = value.toString() === "Invalid Date";
      break;
    case contactNumber:
      hasError = value.length !== 10;
      break;
    case type:
    case mode:
      hasError = !value;
      break;
    default:
  }
  return hasError;
};
