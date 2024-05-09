import { createTheme } from '@mui/material/styles';

// Define the custom theme
// palette: {
//     mode: 'dark',
//   },
const darkTheme = createTheme({
  palette: {
    mode:"dark",
    background: {
      default: '#F0ADC8',
    },
    text: {
      primary: '#fff',
    },
    // Primary color
    primary: {
      main: 'rgba(41, 14, 255, 0.507)',
    },
  },
});

export default darkTheme;
