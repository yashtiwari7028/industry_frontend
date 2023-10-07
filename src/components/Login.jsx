import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
function Login({ onLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    // Check if the entered username and password are correct
    if (username === "greengine" && password === "Greengine@1501") {
      // If correct, call the onLogin function to set isLoggedIn to true
      onLogin();
      // Navigate to /welcome (data page)
      navigate("/welcome");
    } else {
      // If incorrect, display an error message
      setError("Invalid username or password. Please try again.");
    }
  };

  const [isLoginFormVisible, setLoginFormVisible] = useState(true);

  const toggleForm = () => {
    setLoginFormVisible(!isLoginFormVisible);
  };

  return (
    <div className="login-container">
      <form className={isLoginFormVisible ? "login-form" : "signup-form"}>
        <div className="tag-line1">
          {isLoginFormVisible
            ? "Welcome to Greengine"
            : "Sign Up for Greengine"}
        </div>

        {isLoginFormVisible ? (
          <>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            {error && <p>{error}</p>}
          </>
        ) : (
          <>
            <input type="text" placeholder="First Name" name="firstName" />
            <input type="text" placeholder="Last Name" name="lastName" />
            <input type="email" placeholder="Email" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <button type="submit">Sign Up</button>
          </>
        )}

        <div className="tag-line2" onClick={toggleForm}>
          {isLoginFormVisible
            ? "Don't have an account? Signup"
            : "Already have an account? Login"}
        </div>
        <div className="tag-line3">Powered By Greengine</div>
      </form>
    </div>
  );
}

export default Login;
