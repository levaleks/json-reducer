import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Alert, AlertTitle, AppBar, Box, Tooltip, useTheme } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CopyAllOutlinedIcon from '@mui/icons-material/CopyAllOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import DoneIcon from '@mui/icons-material/Done';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import { useClipboard } from 'use-clipboard-copy';
import * as shared$ from '../../EslintReportExplorer.styled';
import * as $ from './CodeEditorPane.styled';
import { HANDLER_ARG_NAME, HANDLER_BODY, HANDLER_KEYWORD, HANDLER_NAME } from '../../core/input-json-handler';
import { useNonNullableContext } from '../../../../utils/UseNonNullableContext';
import { EslintReportExplorerStoreContext } from '../../EslintReportExplorerStore';
import { useErrorMessage } from '../../hooks/useErrorMessage';

export const CodeEditorPane: React.FC = observer(() => {
    const eslintReportExplorerStore = useNonNullableContext(EslintReportExplorerStoreContext);
    const theme = useTheme();

    const clipboard = useClipboard();

    const [hasCopied, setHasCopied] = useState(false);

    const handleCopyClick = (): void => {
        if (hasCopied) {
            return;
        }

        setHasCopied(true);

        clipboard.copy(eslintReportExplorerStore.handler.fn.toString());

        setTimeout(() => setHasCopied(false), 250);
    };

    const { errorMessage: syntaxErrorMessage, setErrorMessage: setSyntaxErrorMessage } = useErrorMessage(null);

    useEffect(() => {
        const { error } = eslintReportExplorerStore.handler;

        if (error) {
            setSyntaxErrorMessage({
                title: error.name,
                body: error.message,
            });
        } else {
            setSyntaxErrorMessage(null);
        }
    }, [eslintReportExplorerStore.handler, eslintReportExplorerStore.handler.error, setSyntaxErrorMessage]);

    const {
        errorMessage: executionErrorMessage,
        setErrorMessage: setExecutionErrorMessage,
        clearErrorMessage: clearExecutionErrorMessage,
    } = useErrorMessage(null);

    useEffect(() => {
        const { error } = eslintReportExplorerStore.output;

        if (error) {
            setExecutionErrorMessage({
                title: error.name,
                body: error.message,
            });
        } else {
            setExecutionErrorMessage(null);
        }
    }, [eslintReportExplorerStore.output, eslintReportExplorerStore.output.error, setExecutionErrorMessage]);

    return (
        <shared$.PaneWrapper>
            <shared$.PaneContent>
                <$.ReadonlyHandlerParts sx={{ borderBottom: `1px dashed ${theme.palette.divider}` }}>
                    <$.HandlerKeyword>{HANDLER_KEYWORD}</$.HandlerKeyword>
                    &nbsp;
                    <$.HandlerName>{HANDLER_NAME}</$.HandlerName>(<$.HandlerArg>{HANDLER_ARG_NAME}</$.HandlerArg>
                    )&nbsp;
                    {'{'}
                </$.ReadonlyHandlerParts>
                <$.EditorWrapper>
                    <AceEditor
                        placeholder={HANDLER_BODY}
                        mode="javascript"
                        theme="monokai"
                        width="100%"
                        height="100%"
                        onChange={eslintReportExplorerStore.setHandler}
                        fontSize={14}
                        showPrintMargin
                        showGutter={false}
                        highlightActiveLine={false}
                        defaultValue={HANDLER_BODY}
                        setOptions={{
                            enableBasicAutocompletion: false,
                            enableLiveAutocompletion: true,
                            enableSnippets: false,
                            tabSize: 2,
                        }}
                    />
                </$.EditorWrapper>
                <$.ReadonlyHandlerParts sx={{ borderTop: `1px dashed ${theme.palette.divider}` }}>
                    {'}'}
                </$.ReadonlyHandlerParts>
                <shared$.NotificationBackdrop open={Boolean(executionErrorMessage)}>
                    {executionErrorMessage && (
                        <shared$.NotificationError
                            variant="filled"
                            severity="error"
                            onClose={clearExecutionErrorMessage}
                        >
                            <AlertTitle>{executionErrorMessage.title}</AlertTitle>
                            {executionErrorMessage.body}
                        </shared$.NotificationError>
                    )}
                </shared$.NotificationBackdrop>
            </shared$.PaneContent>
            <AppBar position="static">
                <shared$.PaneToolbar variant="dense">
                    <Tooltip
                        title={
                            syntaxErrorMessage ? (
                                <Alert variant="filled" severity="error">
                                    <AlertTitle>{syntaxErrorMessage.title}</AlertTitle>
                                    {syntaxErrorMessage.body}
                                </Alert>
                            ) : (
                                <Alert variant="filled" severity="success">
                                    No syntax errors
                                </Alert>
                            )
                        }
                        componentsProps={{ tooltip: { sx: { padding: 0 } } }}
                    >
                        <shared$.ToolbarIconButton
                            size="small"
                            color={syntaxErrorMessage ? 'error' : 'success'}
                            sx={{ cursor: 'help' }}
                        >
                            {syntaxErrorMessage ? <ErrorOutlineIcon /> : <CheckCircleOutlineIcon />}
                        </shared$.ToolbarIconButton>
                    </Tooltip>
                    <Box sx={{ flexGrow: 1 }} />
                    <shared$.ToolbarButton
                        variant="text"
                        color="secondary"
                        size="small"
                        onClick={handleCopyClick}
                        endIcon={hasCopied ? <DoneIcon /> : <CopyAllOutlinedIcon />}
                    >
                        Copy
                    </shared$.ToolbarButton>
                    <shared$.ToolbarButton
                        variant="text"
                        size="small"
                        disabled={Boolean(syntaxErrorMessage)}
                        onClick={eslintReportExplorerStore.applyHandlerToInputFileContent}
                        endIcon={<CodeOutlinedIcon />}
                    >
                        Run
                    </shared$.ToolbarButton>
                </shared$.PaneToolbar>
            </AppBar>
        </shared$.PaneWrapper>
    );
});
