import React from 'react';
import { observer } from 'mobx-react-lite';
import { AppBar, Toolbar, useTheme, Box, Typography } from '@mui/material';
import { SplitPane } from 'react-collapse-pane';
import { ExportJSONPane } from './components/InputJSONPane';
import { CodeEditorPane } from './components/CodeEditorPane';
import { OutputJSONPane } from './components/OutputJSONPane';
import * as $ from './EslintReportExplorer.styled';

export const EslintReportExplorer: React.FC = observer(() => {
    const theme = useTheme();

    return (
        <$.EslintReportExplorer maxWidth="xl">
            <$.InnerContainer>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <$.LinkWithIcon
                            href="https://github.com/levaleks/json-reducer"
                            underline="hover"
                            target="_blank"
                            rel="noopener"
                        >
                            <img
                                src={`${process.env.PUBLIC_URL}/github-mark-light.png`}
                                alt="Github"
                                width={24}
                                height={24}
                            />
                            <Typography variant="h1" color="inherit" fontSize="inherit">
                                JSON Reducer
                            </Typography>
                        </$.LinkWithIcon>
                        <Box sx={{ flexGrow: 1 }} />
                        <$.LinkWithIcon
                            href="https://savelife.in.ua/en/donate-en"
                            underline="hover"
                            target="_blank"
                            rel="noopener"
                        >
                            <img
                                src={`${process.env.PUBLIC_URL}/savelife-white.png`}
                                alt="Come Back Alive"
                                width={17}
                                height={22}
                            />
                            SUPPORT UKRAINE
                        </$.LinkWithIcon>
                    </Toolbar>
                </AppBar>
                <$.SplitPaneWrapper elevation={2}>
                    <SplitPane
                        split="vertical"
                        resizerOptions={{
                            css: {
                                width: '1px',
                                background: theme.palette.divider,
                            },
                        }}
                    >
                        <ExportJSONPane />
                        <CodeEditorPane />
                        <OutputJSONPane />
                    </SplitPane>
                </$.SplitPaneWrapper>
            </$.InnerContainer>
        </$.EslintReportExplorer>
    );
});
