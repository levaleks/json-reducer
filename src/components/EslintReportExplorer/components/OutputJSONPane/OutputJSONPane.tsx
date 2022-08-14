import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { AlertTitle, AppBar, Box } from '@mui/material';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ReactJson from 'react-json-view';
import fileDownload from 'js-file-download';
import { isPlainObject } from 'lodash-es';
import * as shared$ from '../../EslintReportExplorer.styled';
import { useNonNullableContext } from '../../../../utils/UseNonNullableContext';
import { EslintReportExplorerStoreContext } from '../../EslintReportExplorerStore';
import { useErrorMessage } from '../../hooks/useErrorMessage';

export const OutputJSONPane: React.FC = observer(() => {
    const eslintReportExplorerStore = useNonNullableContext(EslintReportExplorerStoreContext);

    const { errorMessage, setErrorMessage } = useErrorMessage(null);

    const handleSaveClick = (): void => {
        if (eslintReportExplorerStore.output.error) {
            return;
        }

        let stringifiedOutput;

        try {
            stringifiedOutput = JSON.stringify(eslintReportExplorerStore.output.value, null, 2);
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

        if (stringifiedOutput !== undefined) {
            fileDownload(stringifiedOutput, 'output.json');
        }
    };

    useEffect(() => {
        const { value } = eslintReportExplorerStore.output;

        if (!(isPlainObject(value) || Array.isArray(value))) {
            setErrorMessage({ title: 'Invalid data type', body: 'Must be either array or object' });
        } else {
            setErrorMessage(null);
        }
    }, [eslintReportExplorerStore.output, eslintReportExplorerStore.output.value, setErrorMessage]);

    return (
        <shared$.PaneWrapper>
            <shared$.PaneContent>
                {!errorMessage && (
                    <shared$.ScrollableBox>
                        <ReactJson src={eslintReportExplorerStore.output.value} theme="monokai" />
                    </shared$.ScrollableBox>
                )}
                <shared$.NotificationBackdrop open={Boolean(errorMessage)}>
                    {errorMessage && (
                        <shared$.NotificationError variant="filled" severity="error">
                            <AlertTitle>{errorMessage.title}</AlertTitle>
                            {errorMessage.body}
                        </shared$.NotificationError>
                    )}
                </shared$.NotificationBackdrop>
            </shared$.PaneContent>
            <AppBar position="static">
                <shared$.PaneToolbar variant="dense">
                    <Box sx={{ flexGrow: 1 }} />
                    <shared$.ToolbarButton
                        variant="text"
                        color="success"
                        size="small"
                        disabled={Boolean(errorMessage) || Boolean(eslintReportExplorerStore.output.error)}
                        onClick={handleSaveClick}
                        endIcon={<FileDownloadOutlinedIcon />}
                    >
                        Save
                    </shared$.ToolbarButton>
                </shared$.PaneToolbar>
            </AppBar>
        </shared$.PaneWrapper>
    );
});
