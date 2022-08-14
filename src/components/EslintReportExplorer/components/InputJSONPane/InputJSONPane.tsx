import React from 'react';
import { observer } from 'mobx-react-lite';
import { AlertTitle, AppBar, Box, CircularProgress } from '@mui/material';
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import ReactJson from 'react-json-view';
import { useFilePicker } from 'use-file-picker';
import { isPlainObject } from 'lodash-es';
import * as shared$ from '../../EslintReportExplorer.styled';
import * as $ from './InputJSONPane.styled';
import { EslintReportExplorerStoreContext } from '../../EslintReportExplorerStore';
import { useNonNullableContext } from '../../../../utils/UseNonNullableContext';
import { getErrorMessageFromError } from './helpers/getErrorMessageFromError';
import { useErrorMessage } from '../../hooks/useErrorMessage';

export const ExportJSONPane: React.FC = observer(() => {
    const eslintReportExplorerStore = useNonNullableContext(EslintReportExplorerStoreContext);

    const [openFileSelector, { filesContent, loading, clear, errors }] = useFilePicker({
        accept: '.json',
        multiple: false,
    });

    const { errorMessage, setErrorMessage, clearErrorMessage } = useErrorMessage(null);

    if (!loading && errors.length) {
        setErrorMessage({
            title: 'File error',
            body:
                errors.length > 1 ? (
                    <shared$.ErrorsList>
                        {errors.map((e) => (
                            <li>{getErrorMessageFromError(e)}</li>
                        ))}
                    </shared$.ErrorsList>
                ) : (
                    getErrorMessageFromError(errors[0])
                ),
        });

        clear();
    }

    if (!loading && filesContent.length) {
        const [{ content, name }] = filesContent;

        try {
            const jsonValue = JSON.parse(content);

            if (!(isPlainObject(jsonValue) || Array.isArray(jsonValue))) {
                setErrorMessage({ title: 'Invalid data type', body: 'Must be either array or object' });
            } else {
                setErrorMessage(null);
                eslintReportExplorerStore.setInputFile({ content: jsonValue, name });
            }
        } catch (e) {
            setErrorMessage(
                e instanceof Error
                    ? { title: e.name, body: e.message }
                    : {
                          title: 'Unknown error',
                          body: String(e),
                      },
            );
        }

        clear();
    }

    return (
        <shared$.PaneWrapper>
            <shared$.PaneContent>
                <shared$.ScrollableBox>
                    <ReactJson
                        src={eslintReportExplorerStore.inputFile.content}
                        enableClipboard={false}
                        theme="monokai"
                    />
                </shared$.ScrollableBox>
                <shared$.NotificationBackdrop open={Boolean(errorMessage) || loading}>
                    {loading && <CircularProgress size={24} />}
                    {!loading && errorMessage && (
                        <shared$.NotificationError variant="filled" severity="error" onClose={clearErrorMessage}>
                            <AlertTitle>{errorMessage.title}</AlertTitle>
                            {errorMessage.body}
                        </shared$.NotificationError>
                    )}
                </shared$.NotificationBackdrop>
            </shared$.PaneContent>
            <AppBar position="static">
                <shared$.PaneToolbar variant="dense">
                    <$.FileName variant="caption" display="block">
                        {eslintReportExplorerStore.inputFile.name}
                    </$.FileName>
                    <Box sx={{ flexGrow: 1 }} />
                    <shared$.ToolbarButton
                        variant="text"
                        size="small"
                        onClick={openFileSelector}
                        endIcon={<FileOpenOutlinedIcon />}
                    >
                        Open
                    </shared$.ToolbarButton>
                </shared$.PaneToolbar>
            </AppBar>
        </shared$.PaneWrapper>
    );
});
