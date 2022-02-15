import type { AppProps } from 'next/app';
import Head from 'next/head';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import GetDesignTokens from '@/themes';
import { Layout, Notification } from '@/components';
import { AppPageType } from '@/types/system';
import { wrapper } from '@/store';
import { useSelector } from 'react-redux';
import { createTheme } from '@mui/material';
import { SnackbarProvider } from 'notistack';

import { RootModal } from '@/components';
import { selectGlobalState } from '@/store/global/selectors';
import createEmotionCache from '@/libs/createEmotionCache';
import { ChatProvider } from '@/Providers';

const clientSideEmotionCache = createEmotionCache();

interface IBingoAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: AppPageType;
}

function BingoApp({ Component, emotionCache = clientSideEmotionCache, ...pageProps }: IBingoAppProps) {
  const themeMode = useSelector(selectGlobalState);

  const page = React.useMemo(() => {
    const PageLayout = Component.Layout || Layout;
    return (
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    );
  }, [Component, pageProps]);

  const theme = React.useMemo(() => createTheme(GetDesignTokens(themeMode ? 'light' : 'dark')), [themeMode]);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider>
          <ChatProvider>
            <Notification>{page}</Notification>
            <RootModal />
          </ChatProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default wrapper.withRedux(BingoApp);
