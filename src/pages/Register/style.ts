import styled, { css } from "styled-components";
import bgRegister from "../../assets/imgs/bg-register.png";

export const Register = styled.section`
  ${({theme}) => css`
    min-width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 1.5rem 1.5rem 0 1.5rem;
    background-color: ${theme.colors.primaryColorDark};
  `}
`;

export const RegisterContent = styled.div`
    ${({theme}) => css`
    width: 100%;
    background-image: linear-gradient(
        rgb(134, 239, 134, 0.4),
        rgb(134, 239, 134, 0.4)
      ),
      linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(${bgRegister});
    background-size: cover;
    border-radius: 1rem;
    box-shadow: 0 0 3.5rem rgb(142, 115, 180, .5);
    `}
`;

