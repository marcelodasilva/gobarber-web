import styled from 'styled-components';
import { shade } from 'polished';
import SignUpBG from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;

  /** The place-content CSS shorthand property sets
  both the align-content and justify-content properties */
  place-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;

  img {
  }
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    h1 {
      margin-bottom: 24px;
    }

    a {
      text-decoration: none;
      display: block;
      color: #f4ede8;
      margin-top: 24px;
      transition: color linear 250ms;
      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
  > a {
    text-decoration: none;
    display: block;
    color: #f4ede8;
    margin-top: 24px;
    transition: color linear 250ms;
    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
    svg {
      margin-right: 16px;
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${SignUpBG}) no-repeat center;
  background-size: cover;
`;
