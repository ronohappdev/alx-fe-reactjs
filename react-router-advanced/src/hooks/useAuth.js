// File: src/hooks/useAuth.js
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

// Custom hook to access authentication context
export default function useAuth() {
  return useContext(AuthContext);
}