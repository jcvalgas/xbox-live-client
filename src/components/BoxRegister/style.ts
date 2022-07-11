import styled, { css } from "styled-components";

export const BoxRegister = styled.div`
    ${({theme}) => css`
        height: 100vh;
        width: 100%;
        background-color: ${theme.colors.secondaryColor};
        clip-path: polygon(60% 0, 100% 0 , 100% 100%, 40% 100%);
        border-radius: 1rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    `}
`

export const BoxContainer = styled.div`
    ${() => css`
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    `}
`

export const BoxContainerHeading = styled.h1`
    ${({theme}) => css`
        ${theme.mixins.greenHeadingStyle()};
    `}
`

export const BoxContainerLogo = styled.img`
    ${() => css`
        height: 15rem;
        width: auto;
    `}
`

export const BoxContainerForm = styled.form`
  ${({ theme }) => css`
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 15px;

    input {
      outline: none;
      height: 4rem;
      border-radius: 0.8rem;
      padding: 1.4rem;
      background-color: ${theme.colors.baseForm};
      border: 1px solid ${theme.colors.colorBlack};
      box-sizing: border-box;
      color: ${theme.colors.colorBlack};
    }
    button {
        ${theme.mixins.primaryButton()};
      }
  `}
`;