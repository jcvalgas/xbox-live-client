import { colors } from "assets/styles/colors";
import styled, { css } from "styled-components";
import bgBoxLogin from "../../assets/imgs/abstract-image-login.png";

export const BoxLogin = styled.div`
  ${() => css`
        width: 100rem;
        height 53rem;
        background-image: linear-gradient(90deg, rgba(28, 27, 40) 0%, rgba(28, 27, 40), 50%, transparent 50%), url(${bgBoxLogin});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: right;
        border-radius: .8rem;
        box-shadow: 1rem 1rem 5rem rgba(0,0,0,.3);
    `}
`;

export const BoxContainer = styled.div`
  ${() => css`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-shadow: 1rem 0 0.8rem rgba(0, 0, 0, 0.3);
  `}
`;

export const BoxContainerLogo = styled.img`
  ${() => css`
    width: 10rem;
    height: 10rem;
  `}
`;
export const BoxContainerHeading = styled.h1`
  ${({ theme }) => css`
    ${theme.mixins.greenHeadingStyle()};
  `}
`;

export const BoxContainerForm = styled.form`
  ${({ theme }) => css`
    width: 65%;
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
  `}
`;

export const BoxContainerHeadingSecondary = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.textDark};
    font-size: ${theme.constants.bodyFontSize};

    a {
      &:link,
      &:visited {
        text-decoration: none;
        color: ${theme.colors.textColor};
        cursor: pointer;
        font-weight: 800;
        letter-spacing: 1px;
      }
    }
  `}
`;

export const BoxContainerButtonLogin = styled.a`
  ${({ theme }) => css`
    &:link,
    &:visited {
      text-decoration: none;
    }
    margin-top: -1.5rem;
    text-align: center;
    width: 25%;
    padding: 0.7rem 0;
    color: ${theme.colors.textColor};
    font-size: ${theme.constants.bodyFontSize};
    border: 1px solid #8e73b4;
    border-radius: 0.8rem;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      background-color: #8e73b4;
    }
  `}
`;
