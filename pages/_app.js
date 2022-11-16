import { ApolloProvider } from "@apollo/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { StoreProvider } from "easy-peasy";
import { SessionProvider } from 'next-auth/react';
import { QueryClient } from 'react-query';
import client from "../components/apollo/client";
import Footer from "../components/Footer";
import Header from "../components/Header";
import store from "../components/store";
import { theme } from "../components/Styles";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {

  const queryClient = new QueryClient()
  return (
    <SessionProvider session={pageProps.session}>
    <ApolloProvider client={client}>
      <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
      </StoreProvider>
    </ApolloProvider>
    </SessionProvider>
  );

}

export default MyApp;
