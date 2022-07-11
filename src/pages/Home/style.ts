import styled, { css } from "styled-components";
import bgHomeMain from "../../assets/imgs/bg-home-main.png";

export const Home = styled.section`
  ${({ theme }) => css`
    min-height: 100vh;
    min-width: 100%;
    background-color: ${theme.colors.colorBlack};
    box-sizing: border-box;
    padding: 3rem;
    overflow: auto;
  `}
`;

export const HomeNav = styled.nav`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryColorDark};
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.2rem solid
      linear-gradient(${theme.colors.colorBlack}, transparent);
  `}
`;

export const NavLogo = styled.img`
  ${({ theme }) => css`
    width: 4rem;
    height: 4rem;
    opacity: 0.9;
  `}
`;

export const NavContainerLinks = styled.ul`
  ${({ theme }) => css`
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  `}
`;

export const NavLink = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.textColor};
    font-weight: 600;
    list-style: none;
    letter-spacing: 0.2rem;
    font-size: ${theme.constants.bodyFontSize};
    opacity: 0.75;
  `}
`;

export const ButtonToLogin = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.textColor};
    border: 1px solid ${theme.colors.tertiaryColorDark};
    padding: 6px 20px;
    border-radius: 8px;
    transition: all 0.2s;
    font-size: ${theme.constants.bodyFontSize};
    cursor: pointer;
    position: relative;
    &:hover {
      transform: scale(1);
      background-color: ${theme.colors.tertiaryColorDark};
    }
  `}
`;

export const HomeContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColorLight};
    padding: 10rem 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  `}
`;

export const TextBox = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    text-align: left;
    width: 35%;
  `}
`;

export const HeadingPrimary = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.textColor};
    text-transform: uppercase;
    margin-bottom: 3rem;
  `}
`;
export const HeadingPrimaryMain = styled.span`
  ${({ theme }) => css`
    display: block;
    font-size: 3rem;
    font-weight: 600;
    text-shadow: #9900ff 1px 0 5px;
    margin-bottom: 6rem;
    letter-spacing: 1rem;
  `}
`;

export const HeadingPrimarySub = styled.span`
  ${() => css`
    display: block;
    font-size: 2rem;
    text-shadow: #9900ff 1px 0 10px;
    margin-bottom: 4rem;
    font-weight: 450;
    letter-spacing: 0.5rem;
  `}
`;

export const ButtonContainer = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
  `}
`;

export const ButtonToLoginActive = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.textColor};
    text-shadow: #0000 1px 0 10px;
    border: 2px solid ${theme.colors.tertiaryColorDark};
    font-weight: 500;
    padding: 1rem 5rem;
    border-radius: 8px;
    font-size: ${theme.constants.bodyFontSize};
    cursor: pointer;
    background-color: ${theme.colors.tertiaryColorDark};
    margin-right: 10rem;
  `}
`;

export const ButtonToRegister = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.textColor};
    border: 2px solid #8e73b4;
    padding: 1rem 5rem;
    border-radius: 8px;
    transition: all 0.2s;
    font-weight: 500;
    font-size: ${theme.constants.bodyFontSize};
    cursor: pointer;
    background-color: #8e73b4;
  `}
`;

export const LogoBox = styled.div`
  ${({ theme }) => css`
    img {
      opacity: 0.5;
      height: 45rem;
    }
  `}
`;

export const HomeMain = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryColorDark};
    padding-top: 15rem;
    position: relative;
  `}
`;

export const SectionAbout = styled.section`
  ${() => css`
    margin-top: -10rem;
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(${bgHomeMain});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-blend-mode: darken;
    padding: 35rem 0;
    position: relative;
  `}
`;

export const TipsContainer = styled.div`
  ${({ theme }) => css`
    width: 95%;
    height: 55rem;
    position: absolute;
    background-color: ${theme.colors.primaryColorDark};
    opacity: 0.9;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
  `}
`;

export const TipCard = styled.div`
  ${({ theme }) => css`
    width: 25%;
    height: 35rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: ${theme.colors.primaryColorLight};
    color: ${theme.colors.textColor};
    padding: 2rem;
  `}
`;

export const TipCardLogo = styled.img`
  ${() => css`
    margin: 1rem auto;
    width: 7rem;
    height: 7rem;
  `}
`;

export const TipCardHeading = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.constants.headingFontSizeMedium};
  `}
`;
export const TipCardParagraph = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.constants.bodyFontSize};
    font-weight: 450;
    text-align: justify;
    line-height: 200%;
  `}
`;

export const SectionFAQ = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    padding: 20rem 0;
    text-align: center;

    h1 {
      display: inline-block;
      width: 45%;
      text-transform: uppercase;
      color: ${theme.colors.textColor};
      font-size: ${theme.constants.headingFontSizeMedium};
      margin-bottom: 6rem;
      letter-spacing: 0.4rem;
      font-weight: 700;
      border-bottom: 1rem solid #292742;
      border-radius: 1rem;
      padding-bottom: 2.5rem;
    }
  `}
`;

export const BoxFAQ = styled.div`
  ${({ theme }) => css`
    margin: auto;
    width: 75%;
    display: flex;
    flex-direction: column;
    font-weight: 600;
    letter-spacing: 0.3rem;
    div {
      background-color: #212638;
      color: ${theme.colors.textColor};
      font-size: 2rem;
      padding: 2rem;
      text-align: start;
      border-radius: 1.5rem;
      text-transform: uppercase;
      &:not(:last-child) {
        margin-bottom: 1.5rem;
      }

      span {
        float: right;
      }
    }
  `}
`;

export const FooterContainer = styled.section`
  ${({ theme }) => css`
    background-color: #171621;
    padding: 3rem 0;
    font-size: ${theme.constants.bodyFontSize};
    text-align: center;
    img {
      width: 10rem;
      height: auto;
      margin-bottom: 6rem;
    }
  `}
`;
export const Row = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 95%;
    margin: 0 auto 10rem auto;

    ul {
      border-top: 4px solid ${theme.colors.textColor};
      display: inline-block;
      padding: 2rem 0 0 0;
      list-style: none;
      margin: 0;
      li {
        display: inline-block;
        color: ${theme.colors.textColor};
        text-transform: uppercase;
        font-weight: 500;
        letter-spacing: 0.2rem;
        cursor: pointer;
        &:not(:last-child) {
          margin-right: 1.5rem;
        }
      }
    }

    div {
      width: 40%;
      border-top: 4px solid ${theme.colors.textColor};
      padding: 2rem 0 0 0;
      text-align: justify;
      color: gray;
      line-height: 160%;
      letter-spacing: 0.15rem;
      font-weight: 500;
    }
  `}
`;

export const FooterIcons = styled.div`
  ${() => css`
    display: inline-block;
    margin: 0 auto;
    img {
      margin: 0;
      display: inline;
      height: 2.5rem;
      width: auto;
      opacity: 0.6;
      cursor: pointer;
      transition: all 0.2s;
      &:hover {
        opacity: 1;
      }

      &:not(:last-child) {
        margin-right: 2rem;
      }
    }
  `}
`;
