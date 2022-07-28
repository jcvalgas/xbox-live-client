import styled, {css} from "styled-components";
import bgHomePage from '../../assets/imgs/bg-homepage.png';

export const Homepage = styled.section`
    ${() => css`
        min-height: 100vh;
        min-width: 100%;
        box-sizing: border-box;
        background-image: url(${bgHomePage});
        background-size: cover;
        background-position: center;
    `}
`

export const HomepageContent = styled.section`
    ${() => css`
        height: auto;
    `}
`

export const HomepageContentHeader = styled.div`
    ${({theme}) => css`
        height: auto;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 2rem 5rem 0 5rem;
        img {
            width: auto;
            height: 6rem;
            border-radius: 100%;
            border: .2rem solid transparent;
            cursor: pointer;
            transition: all .2s;

            &:hover {
                border: .2rem solid white;
            }
        }

        span {
            margin-left: 1rem;
            color: ${theme.colors.textColor};
            font-size: ${theme.constants.bodyfontSizeMedium};
            font-weight: 500;
        }
    `}
`;

export const HomepageContentHeaderMenu = styled.span`
    ${({theme}) => css`
        position: relative;
        margin-right: 2rem;

        &,
        &::before,
        &::after {
            width: 3.5rem;
            height: 2px;
            background-color: ${theme.colors.textColor};
            display: inline-block;
        }

        &::before,
        &::after {
            content: "";
            position: absolute;
            left: 0;
            transition: all .2s;
        }

        &::before {top: -.8rem;}
        &::after {top: .8rem;}
    `}
`;

export const HomepageContentMain = styled.section`
    ${() => css`
        padding: 10rem 0;
    `}
`