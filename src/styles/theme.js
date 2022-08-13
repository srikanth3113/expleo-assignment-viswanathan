import { createTheme } from '@mui/material/styles';
// import blue from '@mui/material/colors/blue';

const theme = createTheme({
    palette: {
        primary: {
            light: '#7391B5',
            main: '#3949AB',
            dark: '#4F4A98',
            contrastText: '#5C6BC0',
        },
        secondary: {
            light: '#707070',
            main: '#FFFFFF',
            dark: '#000000DE',
            contrastText: '#909090',
        },
        error: {
            light: '#ba000d',
            main: '#FF0000',
            dark: '#ba000d',
            contrastText: '#ba000d',
        },
        custom: {
            light: '#00000089',
            main: '#f57c00',
            dark: '000407',
            contrastText: 'rgba(0, 0, 0, 0.87)',
        }

    },
});

export default theme;