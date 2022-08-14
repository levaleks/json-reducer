import React, { useState } from 'react';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import '@fontsource/roboto';
import { useBeforeunload } from 'react-beforeunload';
import {
    EslintReportExplorer,
    EslintReportExplorerStore,
    EslintReportExplorerStoreContext,
} from './EslintReportExplorer';
import { muiTheme } from './muiTheme';

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
