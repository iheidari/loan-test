import { css } from '@emotion/core';

const globalStyle = (theme) => css`
  body {
    background-color: ${theme.color.bodyBackground};
    font-family: ${theme.fontFamily};
  }
`;

export default globalStyle;
