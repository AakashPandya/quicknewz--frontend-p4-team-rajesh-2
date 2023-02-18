import React from "react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import createEmotionCache from "../utility/createEmotionCache";
import lightTheme from "../styles/theme/lightTheme";
import Navbar from "../components/Navbar";

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props: any) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Navbar />
        <ToastContainer />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
