import React, { useState, useEffect } from "react";
import { Heading, CardWrapper, Actions } from "./styles";
import Modal from "../../../CommonComponents/Modal";
import BasicInformationForm from "../BasicInformationForm";
import EmployeeDocumentsForm from "../EmployeeDocumentsForm";
import ProjectsAssignedForm from "../ProjectAssignedView";
import BankDetailsForm from "../BankDetailsForm";
import PermanentAddressForm from "../PermanentAddressForm";
import CurrentAddressForm from "../CurrentAddressForm";
import EmergencyContactForm from "../EmergencyContactForm";
import { PrimaryButton } from "../../../CommonComponents";

const EmployeeDetailsView = ({employeeData}) => {
  const [item, setItem] = useState('');

  const getModalContent = (data) => {
    switch(item) {
      case 'basic-info':
        return <BasicInformationForm employeeData={employeeData}  onClickCrossIcon={()=> { setItem('') }} />;
      case 'documents':
        return <EmployeeDocumentsForm employeeData={employeeData}  onClickCrossIcon={()=> { setItem('') }} />;
      case 'projects-assigned':
        return <ProjectsAssignedForm employeeData={employeeData}  onClickCrossIcon={()=> { setItem('') }} />;
      case 'bank-details':
        return <BankDetailsForm employeeData={employeeData}  onClickCrossIcon={()=> { setItem('') }} />;
      case 'permanent-address':
        return <PermanentAddressForm employeeData={employeeData}  onClickCrossIcon={()=> { setItem('') }} />;
      case 'current-address':
        return <CurrentAddressForm employeeData={employeeData}  onClickCrossIcon={()=> { setItem('') }} />;
      case 'emergency-contact':
        return <EmergencyContactForm employeeData={employeeData}  onClickCrossIcon={()=> { setItem('') }} />;
      default:
        return null;
    }
  };


//   const get

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '50px'}}>
      <Modal
        open={item !== ''}
        handleClose={() => {
          setItem('');
        }}
      >
        {getModalContent()}
      </Modal>
      <CardWrapper moreStyles={{bColor:"transparent", padding: "0"}} >
        <PrimaryButton label={"Back"} />
      </CardWrapper>
      <CardWrapper>
        <div>
          <Heading>Basic Information</Heading>
        </div>
        <Actions onClick={() => setItem('basic-info')}>Edit</Actions>
      </CardWrapper>
      <CardWrapper>
        <div>
          <Heading>Documents</Heading>
        </div>
        <Actions onClick={() => setItem('documents')}>Edit</Actions>
      </CardWrapper>
      <CardWrapper>
        <div>
          <Heading>Projects Assigned</Heading>
        </div>
        <Actions onClick={() => setItem('projects-assigned')}>Edit</Actions>
      </CardWrapper>
      <CardWrapper>
        <div>
          <Heading>Bank Details</Heading>
        </div>
        <Actions onClick={() => setItem('bank-details')}>Edit</Actions>
      </CardWrapper>
      <CardWrapper>
        <div>
          <Heading>Previous Company</Heading>
        </div>
        <Actions onClick={() => setItem(true)}>Edit</Actions>
      </CardWrapper>
      <CardWrapper>
        <div>
          <Heading>Permanent Address</Heading>
        </div>
        <Actions onClick={() => setItem('permanent-address')}>Edit</Actions>
      </CardWrapper>
      <CardWrapper>
        <div>
          <Heading>Current Address</Heading>
        </div>
        <Actions onClick={() => setItem('current-address')}>Edit</Actions>
      </CardWrapper>
      <CardWrapper>
        <div>
          <Heading>Emergency Contact</Heading>
        </div>
        <Actions onClick={() => setItem('emergency-contact')}>Edit</Actions>
      </CardWrapper>
      <CardWrapper>
        <div>
          <Heading>Education</Heading>
        </div>
        <Actions onClick={() => setItem(true)}>Edit</Actions>
      </CardWrapper>
    </div>
  );
};

export default EmployeeDetailsView;
