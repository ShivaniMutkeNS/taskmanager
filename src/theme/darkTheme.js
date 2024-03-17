import { createTheme } from '@mui/material/styles';

// Define the custom theme
// palette: {
//     mode: 'dark',
//   },
const darkTheme = createTheme({
  palette: {
    mode:"dark",
    background: {
      default: '#0c071b',
    },
    text: {
      primary: '#fff',
    },
    // Primary color
    primary: {
      main: 'rgba(215, 106, 255, 0.507)',
    },
  },
});

export default darkTheme;
