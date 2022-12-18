import Home from "./components/Home";
//import SocialFollow from "./components/SocialFollow";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Josefin Sans',
      'sans-serif',
    ].join(','),
  },});

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Home />
      
    </ThemeProvider>
    
    
    
    </>
    
    
  );
}

export default App;
