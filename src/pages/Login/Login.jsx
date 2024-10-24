import { useRef } from "react";
import { verifyUser } from "../../data/users";
import "./Login.css";
import Form from "react-bootstrap/Form";

function Login({ setToken, setRole }) {
  const userRef = useRef();
  const passRef = useRef();

  const handleLogin = () => {
    const user = userRef.current.value.trim();
    const pass = passRef.current.value.trim();
    userRef.current.value = "";
    passRef.current.value = "";
    const userInfo = verifyUser(user, pass);
    if (userInfo === null) {
      alert("Wrong username or password");
      userRef.current.focus();
    } else {
      setToken(userInfo.token);
      setRole(userInfo.role);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="login-container">
      <Form.Label htmlFor="username">Username</Form.Label>
      <Form.Control
        type="text"
        id="username"
        placeholder="User"
        style={{ textAlign: "center" }}
        ref={userRef}
        onKeyDown={handleKeyPress} // Add this line
      />
      <Form.Label htmlFor="password">Password</Form.Label>
      <Form.Control
        type="password"
        id="password"
        placeholder="pass"
        style={{ textAlign: "center" }}
        ref={passRef}
        onKeyDown={handleKeyPress} // Add this line
      />
      <button className="btn btn-dark mt-3" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
