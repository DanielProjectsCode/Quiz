import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  quizId: null,
  role: null,
  login: () => {},
  logout: () => {}
});