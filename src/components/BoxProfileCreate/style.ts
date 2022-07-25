import styled, { css } from "styled-components";

export const BoxProfileCreate = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryColor};
    border-radius: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 85%;
    width: 55%;
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    transition: all .3s;

    &:target {
      opacity: 1;
      visibility: visible;
    }
  `}
`;

export const BoxProfileCreateHeading = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.textColor};
    opacity: 0.6;
    letter-spacing: 0.2rem;
    font-size: ${theme.constants.headingFontSizeMedium};
  `}
`;

export const BoxProfileCreateAvatarBox = styled.div`
  ${({ theme }) => css`
    width: 15rem;
    height: 15rem;
    background-color: ${theme.colors.bgProfileCrud};
    border-radius: 100%;
    position: relative;
  `}
`;

export const BoxProfileCreateAvatar = styled.img`
  ${() => css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.5;
    width: auto;
    height: 80%;
  `}
`;

export const BoxProfileCreateForm = styled.form`
  ${({ theme }) => css`
    width: 85%;
    height: auto;

    input {
      margin: 0 auto 6rem auto;
      outline: none;
      display: block;
      text-align: center;
      transition: all 0.1s;
      &::placeholder {
        text-align: center;
        color: ${theme.colors.baseForm};
      }
    }
  `}
`;

export const BoxProfileCreateFormInputImg = styled.input`
  ${({ theme }) => css`
    width: 35%;
    height: auto;
    border: 3px solid #292f45;
    border-radius: 1.5rem;
    background-color: transparent;
    padding: 0.5rem 1.8rem;
    font-size: 1.5rem;
    color: ${theme.colors.baseForm};
  `}
`;

export const BoxProfileCreateFormInputName = styled.input`
  ${({ theme }) => css`
    width: 80%;
    height: auto;
    border: 3px solid #292f45;
    border-radius: 1.5rem;
    background-color: ${theme.colors.bgProfileCrud};
    padding: 0.5rem 1.8rem;
    font-size: 1.5rem;
    color: ${theme.colors.baseForm};
  `}
`;

export const BoxProfileCreateFormBtnSubmit = styled.button`
  ${({ theme }) => css`
    width: 40%;
    height: auto;
    padding: 0.5rem 0;
    background-color: transparent;
    border: 3px solid rgba(134, 239, 134, 0.4);
    border-radius: 3rem;
    color: ${theme.colors.textColor};
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
    font-weight: 600;
    display: block;
    margin: 0 auto;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      text-shadow: 1px 1px 4px ${theme.colors.colorBlack};
      background-color: rgba(134, 239, 134, 0.65);
    }
  `}
`;
