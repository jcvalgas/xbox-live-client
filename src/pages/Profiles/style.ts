import styled, { css } from "styled-components";

export const Profiles = styled.section`
  ${() => css`
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const ProfileContainer = styled.div`
  ${() => css`
    background-image: linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1)), linear-gradient(135deg, rgba(1,79,102,1) 0%, rgba(0,0,0,1) 50%, rgba(58,102,49,1) 100%);
    background-position: center;
    background-size: cover;
    background-blend-mode: darken;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;

export const ProfileContainerMain = styled.div`
  ${() => css`
    height: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 6rem;
    justify-content: center;
  `}
`;

export const ProfileContainerButtonCreateProfile = styled.a`
  ${({ theme }) => css`
    height: auto;
    margin-top: 5rem;
    ${theme.mixins.ButtonLink()};
  `}
`;
