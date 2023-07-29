import './App.css';
import { BrowserRouter, Navigate, Routes } from 'react-router-dom';

import { Route,Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import User from './components/User/User';
import Home from './components/HomeP/HomeP';
import HomeP from './components/HomeP/HomeP';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';
import Auth from './components/Auth/Auth';
const theme = createTheme();
function App() {
  const isUserLoggedIn = () => {
    return localStorage.getItem("currentUser") !== null;
}
  return (
    
    <div className="App">
       <ThemeProvider theme={theme}>
      {/* Diğer bileşenler */}
    </ThemeProvider>
      <BrowserRouter>
      <Navbar></Navbar>
       <Routes>
       <Route path="/" element={<HomeP />} />
  <Route path="/users/:userId" element={<User />} />
  {isUserLoggedIn() ? (
    <Route path="/auth" element={<Navigate to="/" />} />
  ) : (
    <Route path="/auth" element={<Auth />} />
  )} //eğer bir user login olduysa slash a yönlendir yani homeP
      </Routes>
    
      </BrowserRouter>
     
    </div>
  );
  }

export default App;
