import { createContext, useContext } from "react";
import { useState } from "react";
import { api } from "../services/api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({ user: null, token: null });



  async function signOut(){
    localStorage.removeItem("@foodExplorer:token")
    localStorage.removeItem("@foodExplorer:user")

    setData({ user: null, token: null })

  }

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/session", { email, password });

      const { user, token } = response.data;

      localStorage.setItem("@foodExplorer:user", JSON.stringify(user));
      localStorage.setItem("@foodExplorer:token", token);

      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      }
      alert("não foi possível entrar na aplicação");
    }
  }
  useEffect(() => {
    const user = localStorage.getItem("@foodExplorer:user");
    const token = localStorage.getItem("@foodExplorer:token");

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({
        user: JSON.parse(user),
        token,
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, user: data.user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
