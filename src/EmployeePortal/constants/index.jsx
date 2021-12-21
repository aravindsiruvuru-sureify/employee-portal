export const EMAILADDRESS = "email";

export const PASSWORD = "password";
export const PHONENUMBER = "phone_number";

export const FIRSTNAME = "first_name";
export const LASTNAME = "last_name";
export const GENDER = "gender";
export const DOB = "dob";
export const ROLE = "role";
export const TEAM = "team";

export const CONFIRMPASSWORD = "confirm_password";
export const HOBBIES = "hobbies";
export const THIRDPERSONBIO = "third_person_bio";
export const COUNTRY = "country";
export const STATE = "state";
export const CITY = "city";
export const STREETADDRESS = "street_address";
export const PINCODE = "pincode";

export const CURRENT_ONBOARDING_SECTION = "current_onboarding_section";

export const EMAIL_ERROR_TEXT = "Email must be from sureify domain";
export const DROPDOWN_ERROR_TEXT = "Choose one above";

export const PERSONAL_EMAIL_ERROR_TEXT = "Enter a valid email";
export const PHONENUMBER_ERROR_TEXT =
  "Phone number should be minimum 10 digits";
export const LINKEDIN_ERROR_TEXT = "Enter a valid LinkedIn URL";
export const TWITTER_ERROR_TEXT = "Enter a valid Twitter URL";
export const SLACK_ERROR_TEXT = "Enter a valid Slack URL";
export const GITHUB_ERROR_TEXT = "Enter a valid Github URL";

export const PASSWORD_ERROR_TEXT = "Password should be minimum 8 characters";
export const MIN3CHARS_ERROR_TEXT = "Minimum 3 characters should be entered";
export const MIN10CHARS_ERROR_TEXT = "Minimum 10 characters should be entered";
export const EXPERIANCE_ERROR_TEXT = "Value must be in-between 0-50";

export const REGISTERATION_FIELDS = {
  password: "password",
  confirmPassword: "confirm_password",
};

export const BANK_DETAILS = {
  bankName: "bank_name",
  accountHolderName: "account_holder_name",
  accountNumber: "account_number",
  branchName: "branch_name",
  ifscCode: "ifcs_code",
};

export const DOCUMENTS_DETAILS = {
  aadhaarNum: "aadhar_number",
  panNumber: "pan_number",
  driveUrl: "google_drive_url",
};

// ids for professional details fields

export const PROFESSIONAL_DETAILS = {
  email: "email",
  role: "role",
  totalExpirience: "total_experience",
  githubUrl: "company_github_url",
  joiningDate: "joining_date",
  projectsAssigned: "projects_assigned",
  skills: "skills",
  team: "team",
};

// ids for personal details fields

export const PERSONAL_DETAILS = {
  firstName: "firstName",
  lastName: "lastName",
  dob: "dob",
  gender: "gender",
  hobbies: "hobbies",
  aboutMe: "about_me",
  profilePicUrl: "profile_pic_url",
  country: "country",
  streetAddress: "street_address",
  state: "state",
  city: "city",
  pincode: "pincode",
  personalEmail: "personal_email",
  phone: "phone",
  socialUrls: "social_urls",
  name: "name",
  slack: "slack",
  twitter: "twitter",
  linkedIn: "linkedin",
  url: "url",
  emailId: "emailId",
};

export const ROLES = [
  "admin",
  "Frontend Developer",
  "Backend Developer",
  "Quality Analyst",
  "Human Resource",
];

export const GENDERS = ["Male", "Female"];

export const EXPERIENCE_LEVEL = ["Experienced", "Fresher"];

export const personalDetails = {
  value: "PERSONAL_DETAILS",
  label: "Personal Details",
};

export const professionalDetails = {
  value: "PROFESSIONAL_DETAILS",
  label: "Professional Details",
};

export const bankDetails = {
  value: "BANK_DETAILS",
  label: "Bank Details",
};

export const documentDetails = {
  value: "DOCUMENT_DETAILS",
  label: "Document Details",
};

export const ONBOARDING_SECTIONS = [
  personalDetails,
  professionalDetails,
  bankDetails,
  documentDetails,
];

export const PERSONALDETAILS_SUB_SECTIONS = [
  "About You",
  "Address",
  "Contact Information",
];

export const INPUTTYPE = {
  text: "text",
  password: "password",
  number: "number",
};
export const TEAMS = {
  "": "None",
  fe: "Frontend Developer",
  be: "Backend Developer",
  qa: "Quality Analyst",
  hr: "Human Resource",
};

export const COURSE_APPLICATION_IDS = {
  courseName: "courseName",
  courseContent: "courseContent",
  courseCode: "courseCode",
  trainer: "trainer",
  type: "type",
  mode: "mode",
  startDate: "startDate",
  regEndDate: "regEndDate",
  timings: "timings",
  duration: "duration",
  fee: "fee",
};

export const courseApplicationConstants = {
  courseName: "Course Name",
  courseContent: "Course Content",
  courseCode: "Course Code",
  trainer: "Trainer",
  type: "Type",
  mode: "Mode",
  startDate: "Start Date",
  regEndDate: "Registration End Date",
  timings: "Timings",
  duration: "Duration",
  fee: "Fee",
};

export const PERFORMANCE_REVIEW_FIELDS = {
  employee: {
    result: {
      id: "result",
      label: "Result",
    },
    factorsHelped: {
      id: "factors_helped",
      label: "Factors which helped achieve your objective",
    },
    factorsHindered: {
      id: "factors_hindered",
      label:
        "Factors which made it difficult/impossible for you to achieve my objectives",
    },
    selfRating: {
      id: "self_rating",
      label: "Self Rating",
    },
  },
  manager: {
    managerName: {
      id: "manager_name",
      label: "Manager Name",
    },
    howToImprove: {
      id: "how_to_improve",
      label: "How Could you Improve this",
    },
    furtherObjectives: {
      id: "further-objectives",
      label: "Performance Objectives for the next Review Period",
    },
    rating: {
      id: "manager_rating",
      label: "Rating",
    },
  },
};

export const REFERRAL_CONTENTS = [
  "Referral Name",
  "Role",
  "Contact Number",
  "Experience",
  "Status",
  "Resume",
];

export const REFERRAL_STAGES = [
  "Applied",
  "Shortlisted",
  "Inprogress",
  "Selected",
  "Rejected",
];

export const jobApplicationConstants = {
  firstName: "First name",
  lastName: "Last name",
  email: "Email",
  number: "Contact Number",
  link: "Resume Link",
  experienceLevel: "Experience level",
  location: "Location",
  country: "Country",
};

export const hrJobApplicationConstants = {
  title: "Title",
  description: "Description",
  primarySkill: "Primary skill",
  secondarySkill: "Secondary skill",
  salary: "Salary",
  ref: "Job code",
  experienceLevel: "Experience level",
  experience: "Experience (in years)",
  contractType: "Contract type",
  contractDuration: "Contract duration (in hours)",
  location: "Location",
  endDate: "Last date to apply",
};

export const JOB_APPLICATION_IDS = {
  firstName: "firstName",
  lastName: "lastName",
  emailId: "emailId",
  phoneNo: "phoneNo",
  link: "resume_url",
  experienceLevel: "experience_level",
  location: "location",
  country: "country",
};

export const HR_JOB_APPLICATION = {
  title: "title",
  description: "description",
  primarySkill: "primarySkill",
  secondarySkill: "secondarySkill",
  salary: "salary",
  ref: "ref",
  experienceLevel: "experienceLevel",
  experience: "experience",
  contractType: "contractType",
  contractDuration: "contractDuration",
  location: "location",
  endDate: "endDate",
};

export const QUARTER_CYCLES = {
  1: "Apr - Jun",
  2: "Jul - Sept",
  3: "Oct - Dec",
  4: "Jan - Mar",
};

export const NOT_STARTED_YET = "NOT_STARTED_YET";
export const UploadTypes = {
  image: ".jpg,.jpeg,.png",
  file: ".pdf,doc,docx,application/msword",
  any: null,
};

export const COMPLETED = "COMPLETED";

export const REFERRAL_FEEDBACK_FIELDS = {
  feedback: {
    id: "feedback",
    label: "Feedback",
  },
  feedbackRating: {
    id: "round-rating",
    label: "Rating",
    max: 5,
  },
  feedbackBy: {
    id: "feedback-by",
    label: "Feedback By",
  },
};

export const EXPERIENCE_LEVELS = ["Experienced", "Fresher"];
export const CONTRACT_TYPES = ["Permanent", "Contract"];
