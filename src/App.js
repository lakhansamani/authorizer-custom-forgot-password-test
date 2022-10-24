import { Routes, Route, Link } from "react-router-dom";
import { useAuthorizer } from "@authorizerdev/authorizer-react";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import ForgotPassword from "./pages/forgot-password";
import ResetPassword from "./pages/reset-password";

export default function App() {
  const { user, loading, authorizerRef, setUser, setToken } = useAuthorizer();

  const logout = async () => {
    await authorizerRef.logout();
    setUser(null);
    setToken(null);
  };

  if (loading) {
    return <h1> Loading...</h1>;
  }

  return (
    <div>
      <h1>Demo App</h1>
      <p>
        <b>Note:</b>Please open browser window in new window to avoid iframe
        errors
      </p>
      {user ? (
        <div>
          <nav
            style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem"
            }}
          >
            <button onClick={logout}>Logout</button>
          </nav>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      ) : (
        <div>
          <nav
            style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem"
            }}
          >
            <Link to="/">Home</Link> | <Link to="/login">Login</Link> | <Link to="/forgot-password">Forgot Password</Link>
          </nav>
          <br />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />}/>
          </Routes>
        </div>
      )}
    </div>
  );
}
