import styled from 'styled-components';

const Cover = styled.div`
  background: rgba(255, 255, 255, 0.5);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 3005;
`;

const LoaderContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export { Cover, LoaderContainer };
