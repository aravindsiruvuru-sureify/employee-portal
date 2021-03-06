import React, { useState, useEffect } from "react";
import { Heading, CardWrapper, Actions } from "./styles";
import Modal from "../../../CommonComponents/Modal";
import BasicInformationForm from "../BasicInformationForm";
import EmployeeDocumentsForm from "../EmployeeDocumentsForm";
import ProjectsAssignedForm from "../ProjectAssignedView";
import BankDetailsForm from "../BankDetailsForm";
import AddressForm from "../AddressForm";
import CurrentAddressForm from "../CurrentAddressForm";
import EmergencyContactForm from "../EmergencyContactForm";
import { PrimaryButton } from "../../../CommonComponents";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import {
  BASIC_INFO,
  DOCUMENTS,
  PROJECTS_ASSIGNED,
  BANK_DETAILS,
  ADDRESS,
  EMERGENCY_CONTACT,
  formTypes,
} from "./shared";

const EmployeeDetailsView = ({
  employeeData = {},
  handleBackButtonClick = () => {},
}) => {
  const [item, setItem] = useState("");

  const getModalContent = (data) => {
    switch (item) {
      case BASIC_INFO.id:
        return (
          <BasicInformationForm
            empData={employeeData}
            onClickCrossIcon={() => {
              setItem("");
            }}
          />
        );
      case DOCUMENTS.id:
        return (
          <EmployeeDocumentsForm
            empData={employeeData}
            onClickCrossIcon={() => {
              setItem("");
            }}
          />
        );
      case PROJECTS_ASSIGNED.id:
        return (
          <ProjectsAssignedForm
            empData={employeeData}
            onClickCrossIcon={() => {
              setItem("");
            }}
          />
        );
      case BANK_DETAILS.id:
        return (
          <BankDetailsForm
            empData={employeeData.bankDetails}
            onClickCrossIcon={() => {
              setItem("");
            }}
          />
        );
      case ADDRESS.id:
        return (
          <AddressForm
            empData={employeeData}
            onClickCrossIcon={() => {
              setItem("");
            }}
          />
        );
      case EMERGENCY_CONTACT.id:
        return (
          <EmergencyContactForm
            empData={employeeData.emergencyContact}
            onClickCrossIcon={() => {
              setItem("");
            }}
          />
        );
      default:
        return null;
    }
  };

  //   const get

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "20px 40px",
      }}
    >
      <Modal
        open={item !== ""}
        handleClose={() => {
          setItem("");
        }}
      >
        {getModalContent()}
      </Modal>
      <CardWrapper
        moreStyles={{ bColor: "transparent", padding: "0" }}
        onClick={handleBackButtonClick}
      >
        <PrimaryButton label={"Back"} />
      </CardWrapper>
      <h2
        style={{
          marginLeft: "18px",
          marginBottom: "18px",
          fontFamily: "Roboto",
          textTransform: "none",
          color: "#173b56",
        }}
      >
        Employee details
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {formTypes.map((type) => (
          <CardWrapper key={type.id} onClick={() => setItem(type.id)}>
            <div>
              <Heading>{type.label}</Heading>
            </div>
            <FontAwesomeIcon
              icon={faPlusCircle}
              style={{ fontSize: "24px", color: "#173b56", cursor: "pointer" }}
              onClick={() => setItem(type.id)}
            />
          </CardWrapper>
        ))}
      </div>
    </div>
  );
};

export default EmployeeDetailsView;
