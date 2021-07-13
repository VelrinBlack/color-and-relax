import Head from 'next/head';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'utils/styles/globalStyle';
import theme from 'utils/styles/theme';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Color and Relax</title>
      <link rel="icon" type="image/svg" href="/favicon.svg" />
    </Head>

    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default App;
