import styled from 'styled-components';
export const Bar = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: ${({ height }) => (height ? `${height}px` : '300px')};
  margin-bottom: 20px;
  padding: 20px;
  box-sizing: border-box;
`;
export const ItemBar = styled.div`
  width: 100%;
  background: cornflowerblue;
  margin: 0 10px;
  height: ${({ height }) => (height ? `${height}px` : '10px')};
`;
