import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';
import { ThemeProvider } from "@mui/system";
import CssBaseline from '@mui/material/CssBaseline';
import theme from "@/themes/theme";
import Head from "next/head";
import { Box, IconButton } from "@mui/material";


export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <AppCacheProvider {...props}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </AppCacheProvider>
  );
}