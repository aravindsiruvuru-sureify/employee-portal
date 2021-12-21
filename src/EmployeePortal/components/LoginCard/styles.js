import styled from 'styled-components';

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 210px;
  width: 85%;
  @media (max-width: 960px) {
    height: 150px;
  }
`;

const CardActions = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export { CardActions, Fields };
