import {
  COURSE_APPLICATION_IDS,
  PERFORMANCE_REVIEW_FIELDS,
  JOB_APPLICATION_IDS,
  EMPLOYEE_DETAILS,
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

const {
  id: basicInfoID,
  emailId,
  firstName,
  lastName,
  shortName,
  designation,
  personalEmailId,
  phoneNumber,
  dateOfBirth,
  skills,
  endDate,
  joinDate,
  personalNumber,
  officialEmailId,
} = EMPLOYEE_DETAILS.BASIC_INFORMATION_IDS;

const {
  panNumber,
  aadharNumber,
  passportNumber,
  pfAccountNumber,
  uan,
  panCardPath,
  aadharPath,
  passportPath,
  photoPath,
  hikeLetterPath,
  promotionLatterPath,
  resumePath,
} = EMPLOYEE_DETAILS.DOCUMENTS_IDS;

const { bankName, accountNumber, ifscCode, branchName, location } =
  EMPLOYEE_DETAILS.BANK_DETAILS_IDS;

const { phoneNo, link, country } = JOB_APPLICATION_IDS;

const {
  street1,
  street2,
  landmark,
  city,
  provinceOrState,
  postalCode,
  email,
} = EMPLOYEE_DETAILS.PERMANENT_ADDRESS_IDS;

const { name, relation } = EMPLOYEE_DETAILS.EMERGENCY_CONTACT_IDS;


const { experience, contactNumber } = JOB_APPLICATION_IDS;

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

export const verifyMinLength1 = (value) => value && value.length > 0;

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
    case basicInfoID:
      hasError = !verifyMinLength1(value);
      break;
    case courseName:
    case courseContent:
    case courseCode:
    case trainer:
    case timings:
    case duration:
    case fee:
    case firstName:
    case lastName:
    case shortName:
    case designation:
    case skills:
    case link:
    case location:
    case country:
    case panNumber:
    case aadharNumber:
    case passportNumber:
    case pfAccountNumber:
    case uan:
    case panCardPath:
    case bankName:
    case accountNumber:
    case ifscCode:
    case branchName:
    case street1:
    case street2:
    case landmark:
    case city:
    case provinceOrState:
    case postalCode:
    case name:
    case relation:
      hasError = !verifyMinLength3(value);
      break;
    case emailId:
    case email:
    case personalEmailId:
    case officialEmailId:
      hasError = !isEmail(value);
      break;
    case experience:
      hasError = !checkExperiance(value);
      break;
    case startDate:
    case joinDate:
    case regEndDate:
    case dateOfBirth:
    case endDate:
      hasError = value.toString() === "Invalid Date";
      break;
    case contactNumber:
    case phoneNumber:
    case phoneNo:
    case personalNumber:
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
