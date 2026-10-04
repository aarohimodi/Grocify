import { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{ user, currentUser, setUser, setCurrentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContext;
