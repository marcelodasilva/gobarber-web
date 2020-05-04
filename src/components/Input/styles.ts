import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  border-radius: 10px;
  width: 100%;
  border: 2px solid #232129;
  background: #232129;
  padding: 16px;
  display: flex;
  align-items: center;
  color: #666360;
  & + div {
    margin-top: 8px;
  }

  input {
    color: #f4ede8;
    border: 0;
    flex: 1;
    background: transparent;
    &::placeholder {
      color: #666360;
    }
    & + input {
      margin-top: 8px;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
