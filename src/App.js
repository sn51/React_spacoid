import Home from "./components/Home";
//import SocialFollow from "./components/SocialFollow";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";

import Hey from "./components/AfterSubmitpage";

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
    
           
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nextpage" element={<Hey />} />
        </Routes>
      </Router>
      
    </ThemeProvider>
    
    
    
    
    </>
    
    
  );
}

export default App;
