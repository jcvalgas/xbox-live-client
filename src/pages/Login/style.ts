import styled, { css } from "styled-components";
import bgLogin from "../../assets/imgs/bg-login.png";

export const Login = styled.section`
  ${() => css`
    height: 100vh;
    width: 100%;
    box-sizing: border-box;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url(${bgLogin});
    background-position: top;
    background-size: cover;
    background-blend-mode: darken;
  `}
`;

export const LoginContent = styled.div`
  ${() => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
