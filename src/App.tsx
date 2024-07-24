import { CssBaseline, Container } from "@mui/material";
import './App.scss';
import Home from "./pages/Home/HomePage";

function App() {
  return (
    <div className="App">
        <CssBaseline />
        <Container  maxWidth='xl'>
            <Home />
        </Container>
    </div>
  );
}

export default App;
