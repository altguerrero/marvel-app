import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();

  const message = {
    error: {
      "auth/user-not-found":
        "The email you entered is not connected to an account",
      "auth/wrong-password": "The password you entered is incorrect",
    },
  };

  const { login, loginWithGoogle, resetPassword, loginWithFacebook } =
    useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(message.error[error.code]);
    }
  };

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const handleFacebookSignin = async () => {
    try {
      await loginWithFacebook();
      navigate("/");
    } catch (error) {
      throw new Error(error.message);
    }
  };
  const handleResetPassword = async () => {
    if (!user.email) return setError("Please enter your email");
    try {
      await resetPassword(user.email);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="youremail@mail.com"
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
        />

        <button onClick={handleGoogleSignin}>Login with google</button>
        <button onClick={handleFacebookSignin}>Login with facebook</button>

        <button>Login</button>
        <a href="#!" onClick={handleResetPassword}>
          Forgot your Password
        </a>
      </form>
    </div>
  );
}

export default Login;
