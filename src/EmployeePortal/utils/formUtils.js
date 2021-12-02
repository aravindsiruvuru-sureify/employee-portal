import {
  PERSONAL_DETAILS,
  REGISTERATION_FIELDS,
  PROFESSIONAL_DETAILS,
  BANK_DETAILS,
  DOCUMENTS_DETAILS,
  PERFORMANCE_REVIEW_FIELDS,
  JOB_APPLICATION_IDS,
  REFERRAL_FEEDBACK_FIELDS,
} from "../constants";

const {
  firstName,
  lastName,
  country,
  pincode,
  aboutMe,
  streetAddress,
  hobbies,
  linkedIn,
  twitter,
  personalEmail,
  gender,
  state,
  dob,
  city,
  phone,
  profilePicUrl,
  slack,
  emailId,
} = PERSONAL_DETAILS;

const { bankName, accountHolderName, accountNumber, branchName, ifscCode } =
  BANK_DETAILS;

const { aadhaarNum, panNumber, driveUrl } = DOCUMENTS_DETAILS;

const { password, confirmPassword } = REGISTERATION_FIELDS;

const {
  email,
  role,
  totalExpirience,
  githubUrl,
  joiningDate,
  skills,
  projectsAssigned,
  team,
} = PROFESSIONAL_DETAILS;

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
    case firstName:
    case lastName:
    case country:
    case city:
    case pincode:
    case ifscCode:
    case bankName:
    case accountHolderName:
    case branchName:
    case fullname:
    case link:
    case "profile_pic_url":
    case profilePicUrl:
      hasError = !verifyMinLength3(value);
      break;
    case state:
      hasError = !verifyMinLength2(value);
      break;
    case aboutMe:
    case streetAddress:
    case panNumber:
    case aadhaarNum:
    case driveUrl:
    case accountNumber:
    case "ff1":
    case "ff2":
    case "ff3":
      hasError = !verifyMinLength10(value);
      break;
    case hobbies:
    case skills:
    case projectsAssigned:
    case team:
      hasError = !verifyArrayLength(value);
      break;
    case email:
      hasError = !isSureifyEmail(value);
      break;
    case personalEmail:
      hasError = !isEmail(value);
      break;
    case emailId:
      hasError = !isEmail(value);
      break;
    case linkedIn:
      hasError = !isLinkedinUrl(value);
      break;
    case slack:
      hasError = !isSlackUrl(value);
      break;
    case twitter:
      hasError = !isTwitterUrl(value);
      break;
    case githubUrl:
      hasError = !isGithubUrl(value);
      break;
    case totalExpirience:
    case experience:
      hasError = !checkExperiance(value);
      break;
    case confirmPassword:
    case password:
      hasError = !verifyPassword(value);
      break;
    case dob:
    case joiningDate:
      hasError = value.toString() === "Invalid Date";
      break;
    case phone:
    case contactNumber:
      hasError = value.length !== 10;
      break;
    case gender:
    case role:
      hasError = !value;
      break;
    case result.id:
      break;
    case factorsHelped.id:
      break;
    case factorsHindered.id:
      break;
    case selfRating.id:
      break;
    case managerName.id:
      break;
    case furtherObjectives.id:
      break;
    case howToImprove.id:
      break;
    case rating.id:
      break;
    case feedback.id:
      break;
    case feedbackBy.id:
      break;
    case feedbackRating.id:
      break;
    default:
  }
  return hasError;
};
