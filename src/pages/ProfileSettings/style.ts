import styled, {css} from "styled-components";

export const ProfileSettings = styled.section`
    ${({theme}) => css`
        min-width: 100vw;
        min-height: 100vh;
        box-sizing: border-box;
        background-color: ${theme.colors.bgProfileCrud};
        display: flex;
        justify-content: space-between;
    `}
`

export const ProfileSettingsContent = styled.div`
    ${({theme}) => css`
        width: 40%;
        height: 100vh;
        background-color: ${theme.colors.secondaryColor};
    `}
`

export const BoxProfileSettings = styled.div`
  ${() => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  `}
`;

export const BoxProfileSettingsHeader = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.textColor};
    opacity: 0.6;
    letter-spacing: 0.2rem;
    font-size: ${theme.constants.headingFontSizeMedium};
  `}
`;

export const BoxProfileSettingsContainer = styled.div`
  ${({theme}) => css`
    height: 32rem;
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #292f45;
    padding: 2rem 0;
    border-radius: 2rem;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 1.2rem;
    };

    &::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.secondaryColor};
      border-radius: 5rem;
    };

  `}
`;

export const BoxProfileSettingsContainerP = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    background-color: #212638;
    border: 3px solid rgba(255, 255, 255, 0.35);
    width: 85%;
    border-radius: 1.5rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.textColor};
    font-size: ${theme.constants.bodyfontSizeMedium};
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      border: 3px solid #86ef86;
    }

    &:not(:last-child) {
      margin-bottom: 2rem;
    }

    img {
      width: 5rem;
      height: auto;
      border-radius: 100%;
      margin-right: 1rem;
    }
  `}
`;

export const BoxProfileSettingsBtns = styled.div`
  ${() => css`
    width: 75%;
    display: flex;
    justify-content: space-evenly;
  `}
`;

export const BoxProfileSettingsBtnsReturn = styled.a`
  ${({ theme }) => css`
    &:link,
    &:visited {
      text-decoration: none;
      width: 35%;
      color: rgba(255, 255, 255, 0.6);
      font-size: ${theme.constants.bodyfontSizeMedium};
      font-weight: 500;
      letter-spacing: 0.2rem;
      border: 5px solid #292f45;
      text-align: center;
      padding: 0.2rem 0.4rem;
      border-radius: 2rem;
      transition: all 0.3s;
      cursor: pointer;

      &:hover {
        background-color: #292f45;
      }
    }
  `}
`;

export const BoxProfileSettingsBtnsCreate = styled.a`
  ${({ theme }) => css`
    &:link,
    &:visited {
      text-decoration: none;
      width: 35%;
      color: rgba(255, 255, 255, 0.6);
      font-size: ${theme.constants.bodyfontSizeMedium};
      font-weight: 500;
      letter-spacing: 0.2rem;
      border: 5px solid #292f45;
      text-align: center;
      padding: 0.2rem 0.4rem;
      border-radius: 2rem;
      transition: all 0.3s;
      cursor: pointer;

      &:hover {
        background-color: #292f45;
      }
    }
  `}
`;


export const Aside = styled.div`
    ${() => css`
        width: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    `}
`

export const BgLogo = styled.img`
    ${() => css`
        position: absolute;
        opacity: .2;
        height: 35rem;
        width: auto;
    `}
`