import type { AppProps } from 'next/app';
import Head from 'next/head';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import theme, { createEmotionCache } from '@/themes';
import { Layout } from '@/components';
import { AppPageType } from '@/types/system';
import { AppState, wrapper } from '@/store';
import { RootModal } from '@/components';
import { useSelector } from 'react-redux';
import { selectGlobalState } from '@/store/global/selectors';

const clientSideEmotionCache = createEmotionCache();

interface IBingoAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: AppPageType;
}

function BingoApp({ Component, emotionCache = clientSideEmotionCache, ...pageProps }: IBingoAppProps) {
  const themeMode = useSelector(selectGlobalState)
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
      <ThemeProvider theme={theme(themeMode? 1 : 0)}>
        <CssBaseline />
        {page}
        <RootModal />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default wrapper.withRedux(BingoApp);
