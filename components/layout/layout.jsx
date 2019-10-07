import React from 'react';
import styled from '@emotion/styled';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { Helmet } from 'react-helmet';
import theme from '../../theme/default';
import cssReset from '../../style/cssReset';
import globalStyle from '../../style/globalStyle';

const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.mainBackground};
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={cssReset} />
      <Global styles={globalStyle(theme)} />
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Helmet>
      <Container>{children}</Container>
    </ThemeProvider>
  );
};

export default Layout;
