import type { AppProps } from 'next/app';
import Head from 'next/head';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import theme, { createEmotionCache } from '@/themes';
import { Layout } from '@/components';
import { AppPageType } from '@/types/system';

const clientSideEmotionCache = createEmotionCache();

interface IBingoAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: AppPageType;
}

function BingoApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: IBingoAppProps) {
  const page = React.useMemo(() => {
    const PageLayout = Component.Layout || Layout;
    return (
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    );
  }, []);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme(1)}>
        <CssBaseline />
        {page}
      </ThemeProvider>
    </CacheProvider>
  );
}

export default BingoApp;
