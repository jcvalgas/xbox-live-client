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

export const mixins = {
  whiteHeadingStyle,
  greenHeadingStyle,
  bodyStyle,
  logoConfig,
};
