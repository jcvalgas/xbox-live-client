import styled, {css} from "styled-components";

export const BoxProfileSettings = styled.div`
    ${() => css`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    `}
`

export const BoxProfileSettingsHeader = styled.h1`
    ${({theme}) => css`
        color: ${theme.colors.textColor};
        opacity: .6;
        letter-spacing: .2rem;
        font-size: ${theme.constants.headingFontSizeMedium};
    `}
`

export const BoxProfileSettingsContainer = styled.div`
    ${({theme}) => css`
        height: auto;
        width: 75%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #292F45;
        padding: 2rem 0;
        border-radius: 2rem;
    `}
`

export const BoxProfileSettingsContainerP = styled.a`
    ${({theme}) => css`
            text-decoration: none;
            background-color: #212638;
            border: 3px solid rgba(255,255,255, .35);
            width: 85%;
            border-radius: 1.5rem;
            padding: .5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${theme.colors.textColor};
            font-size: ${theme.constants.bodyfontSizeMedium};
            cursor: pointer;
            transition: all .2s;

            &:hover {
                border: 3px solid #86EF86;
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
`

export const BoxProfileSettingsContainerButtonReturn = styled.a`
    ${({theme}) => css`
        &:link, &:visited {
            text-decoration: none;
            width: 25%;
            color: rgba(255,255,255, .6);
            font-size: ${theme.constants.bodyfontSizeMedium};
            font-weight: 500;
            letter-spacing: .2rem;
            border: 5px solid #292F45;
            text-align: center;
            padding: .2rem .4rem;
            border-radius: 2rem;
            transition: all .3s;
            cursor: pointer;
    
            &:hover {
                background-color: #292F45;
            }
        }
    `}
`