import { styled, Box } from '@mui/material';

export const ReadonlyHandlerParts = styled(Box)(({ theme }) => ({
    font: '14px/normal "Monaco", "Menlo", "Ubuntu Mono", "Consolas", "source-code-pro", monospace',
    background: '#272822',
    padding: theme.spacing(1),
}));

export const HandlerKeyword = styled('span')(() => ({
    fontStyle: 'normal',
    color: '#66D9EF',
}));

export const HandlerName = styled('span')(() => ({
    color: '#A6E22E',
}));

export const HandlerArg = styled('span')(() => ({
    fontStyle: 'normal',
    color: '#FD971F',
}));

export const EditorWrapper = styled(Box)(({ theme }) => ({
    height: '100%',
    padding: theme.spacing(1, 2),
}));
