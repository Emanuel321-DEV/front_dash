import React from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Company } from './pages/company';
import { Contact } from './pages/contact';
import { Dashboard } from './pages/dashboard';
import { Local } from './pages/local';
import { Responsible } from './pages/responsible';
import { SignIn } from './pages/signIn';
import { SignUp } from './pages/signUp';
import { Ticket } from './pages/ticket';
import { GlobalStyle } from './styles/globals';
import { theme } from './styles/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}> 
      
      <GlobalStyle />
      <Router>

        <Routes>

          <Route path="/" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>

          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/company" element={<Company />}></Route>

          <Route path="/local" element={<Local />}></Route>
          <Route path="/responsible" element={<Responsible />}></Route>
          <Route path="/ticket" element={<Ticket />}></Route>

          <Route path="/contact" element={<Contact />}></Route>


        </Routes>

      </Router>

      </ThemeProvider>

    </>
  );
}

export default App;
