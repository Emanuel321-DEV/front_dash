import React from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { Company } from './pages/company';
import { Contact } from './pages/contact';
import { Local } from './pages/local';
import { SignIn } from './pages/signIn';
import { SignUp } from './pages/signUp';
import { Ticket } from './pages/ticket';
import { GlobalStyle } from './styles/globals';
import { theme } from './styles/theme';
import { CrudContextProvider } from './contexts/ApiContext';
import { AuthContextProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <CrudContextProvider>
        <ThemeProvider theme={theme}> 
        
        <GlobalStyle />
        <Router>

          <Routes>

            <Route path="/" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>

            <Route path="/company" element={<Company />}></Route>

            <Route path="/local" element={<Local />}></Route>
            <Route path="/ticket" element={<Ticket />}></Route>

            <Route path="/contact" element={<Contact />}></Route>


          </Routes>

        </Router>

        </ThemeProvider>

      </CrudContextProvider>
    </AuthContextProvider>
  );
}

export default App;
