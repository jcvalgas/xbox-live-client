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
  color: ${colors.textColor};
  font-size: ${constants.headingFontSize};
  font-weight: ${constants.headingFontWeight};
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
