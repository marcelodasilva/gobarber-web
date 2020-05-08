import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  width: 100%;
  border: 2px solid #232129;
  padding: 16px;
  display: flex;
  align-items: center;
  color: #666360;
  transition: border ease-in-out 250ms;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}


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

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
