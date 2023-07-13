import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';

import { Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import User from './components/User/User';
import Home from './components/HomeP/HomeP';
import HomeP from './components/HomeP/HomeP';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';
const theme = createTheme();
function App() {
  return (
    
    <div className="App">
       <ThemeProvider theme={theme}>
      {/* Diğer bileşenler */}
    </ThemeProvider>
      <BrowserRouter>
      <Navbar></Navbar>
       <Routes>
        <Route exact path="/" element={<HomeP/>}></Route>
        <Route exact path="/users/:userId" element={<User/>}></Route>
      
      </Routes>
    
      </BrowserRouter>
     
    </div>
  );
}

export default App;
