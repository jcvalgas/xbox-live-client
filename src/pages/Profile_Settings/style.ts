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

export const Aside = styled.div`
    ${() => css`
        width: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
    `}
`

export const BgLogo = styled.img`
    ${() => css`
        opacity: .2;
        height: 35rem;
        width: auto;
    `}
`