import {
    styled,
    Container,
    Paper,
    Stack,
    Box,
    Toolbar,
    IconButton,
    Button,
    Backdrop,
    Alert,
    Link,
} from '@mui/material';

export const EslintReportExplorer = styled(Container)(() => ({
    height: '100%',
}));

export const LinkWithIcon = styled(Link)(() => ({
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    gap: '8px',
    fontSize: '14px',
}));

export const InnerContainer = styled(Stack)(({ theme }) => ({
    height: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    gap: theme.spacing(2),
}));

export const SplitPaneWrapper = styled(Paper)(() => ({
    position: 'relative',
    height: '100%',
}));

export const PaneWrapper = styled(Stack)(() => ({
    height: '100%',
    background: '#272822',
}));

export const PaneToolbar = styled(Toolbar)(({ theme }) => ({
    gap: theme.spacing(1),
}));

export const ToolbarIconButton = styled(IconButton)(() => ({
    flexShrink: 0,
}));

export const ToolbarButton = styled(Button)(() => ({
    flexShrink: 0,
}));

export const PaneContent = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    position: 'relative',
}));

export const ScrollableBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    maxHeight: '100%',
    overflowY: 'auto',
    padding: theme.spacing(1),
}));

export const NotificationBackdrop = styled(Backdrop)(({ theme }) => ({
    position: 'absolute',
    background: `${theme.palette.background.paper}33`,
}));

export const ErrorsList = styled('ul')(({ theme }) => ({
    marginBottom: 0,
    padding: theme.spacing(0, 0, 0, 2),
}));

export const NotificationError = styled(Alert)(() => ({
    maxWidth: '80%',
}));
