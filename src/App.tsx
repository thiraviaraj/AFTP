import React, {useEffect} from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
// routing
import Routes from './routes';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
function App() {
  useEffect(()=>{
    document.title = 'AccionLabs Freshers Training Program';
  }, [])
  const theme = createTheme({
    palette: {
      primary: {
        main: blue[500],
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
    <div>
    <Routes />
    </div>
    </ThemeProvider>
  );
}

export default App;
