// delete this file
import styled from "styled-components";

const ModalInputsWrapper = styled.div`
  position: relative;
  padding: 30px;
`;

const Fields = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  width: 100%;
`;

export { ModalInputsWrapper, Fields };
