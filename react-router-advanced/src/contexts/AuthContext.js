// File: src/contexts/AuthContext.js
import { createContext } from 'react';

const AuthContext = createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {}
});

export default AuthContext;