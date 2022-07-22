import styled, {css} from "styled-components";

export const CardProfileSettings = styled.a`
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