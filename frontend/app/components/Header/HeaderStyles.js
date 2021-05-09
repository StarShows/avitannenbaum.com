import styled from 'styled-components';

export const HeaderComp = styled.div`
  display: grid;
  grid-template-columns: 20% auto 20%;
  grid-template-rows: auto;
  grid-template-areas: 'header header header';
  background: springgreen;
  height: 50px;
  align-items: center;
  padding: 0px 10px;
  column-gap: 12px;
`;

export const Left = styled.div`
  justify-self: left;
`;
// Header Center
export const Center = styled.div`
  justify-self: center;
`;
// Header Right

export const Right = styled.div`
  justify-self: end;
`;
