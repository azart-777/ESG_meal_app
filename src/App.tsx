import { CssBaseline, Container } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';

import './App.scss';
import './assets/fonts/fonts.scss'
import Home from "./pages/Home/HomePage";
import theme from './theme';

function App() {
  return (
    <div className="App">
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container  maxWidth='xl'>
                <Home />
            </Container>
        </ThemeProvider>
    </div>
  );
}

export default App;
