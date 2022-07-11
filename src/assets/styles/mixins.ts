import { css } from "styled-components";
import { constants } from "./constants";
import { colors } from "./colors";

const whiteHeadingStyle = () => css`
  font-family: ${constants.fontFamilly};
  color: ${colors.textColor};
  font-size: ${constants.headingFontSize};
  font-weight: ${constants.headingFontWeight};
`;

const greenHeadingStyle = () => css`
  font-family: ${constants.fontFamilly};
  font-size: ${constants.headingFontSizeSmall};
  letter-spacing: .2rem;
  text-transform: uppercase;
  -webkit-text-stroke: 1px;
  -webkit-text-fill-color: ${colors.textGreen};
  -webkit-text-stroke-color: #1A431A;
`;

const bodyStyle = () => css`
  font-family: ${constants.fontFamilly};
`;

const logoConfig = () => css`
  opacity: 0.6;
`;

const primaryButton = () => css`
    margin: 2rem auto 0 auto;
    text-align: center;
    width: 50%;
    padding: 0.7rem 0;
    color: ${colors.textColor};
    font-size: ${constants.bodyFontSize};
    border: 1px solid #8e73b4;
    border-radius: 0.8rem;
    cursor: pointer;
    transition: all 0.2s;
    background: transparent;
    font-weight: bold;
    letter-spacing: .1rem;
    &:hover {
      background-color: #8e73b4;
    }
`

export const mixins = {
  whiteHeadingStyle,
  greenHeadingStyle,
  bodyStyle,
  logoConfig,
  primaryButton,
};
