import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import loginImg from '../images/login-img.svg';

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper>
      <div className="container">
        <img src={loginImg} alt="github user"/>
        <h1>search github user</h1>
        <p>Search your colleague or employee's public GitHub profile and generate a summary of their activity in the
          form of accessible charts.</p>
        <button className="btn" onClick={loginWithRedirect}>
          Log In / Sign Up
        </button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;

  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }

  img {
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 1.5rem;
  }
`;
export default Login;
