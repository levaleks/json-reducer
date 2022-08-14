import React, { useState } from 'react';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import '@fontsource/roboto';
import { useBeforeunload } from 'react-beforeunload';
import ReactGA from 'react-ga';
import {
    EslintReportExplorer,
    EslintReportExplorerStore,
    EslintReportExplorerStoreContext,
} from './EslintReportExplorer';
import { muiTheme } from './muiTheme';

if (process.env.NODE_ENV === 'production' && process.env.REACT_APP_GA_ID) {
    ReactGA.initialize(process.env.REACT_APP_GA_ID);
}

export const App: React.FC = () => {
    const [eslintReportExplorerStore] = useState(new EslintReportExplorerStore());

    useBeforeunload((e) => {
        if (eslintReportExplorerStore.shouldShowOnBeforeUnloadPopup) {
            e.preventDefault();
        }
    });

    return (
        <ThemeProvider theme={muiTheme}>
            <CssBaseline />
            <GlobalStyles
                styles={{
                    'body, html, #app': {
                        height: '100%',
                    },
                }}
            />
            <EslintReportExplorerStoreContext.Provider value={eslintReportExplorerStore}>
                <EslintReportExplorer />
            </EslintReportExplorerStoreContext.Provider>
        </ThemeProvider>
    );
};
