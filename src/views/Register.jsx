import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

import Stack from "../components/Stack";
import Button from "../components/Button";
import { FacebookIcon, GoogleIcon } from "../components/Icons";
import Divider from "../components/Divider";
import Input from "../components/Input";

function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();

  const message = {
    error: {
      "auth/invalid-email": "Please enter a valid email address",
      "auth/weak-password": "Password should be at least 6 characters",
      "auth/email-already-in-use": "This email address is already in use",
    },
  };

  const { signup, loginWithFacebook, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(message.error[error.code]);
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}

      <Stack direction="column" spacing={3}>
        <Button
          variant="text"
          color="text-light"
          startIcon={<GoogleIcon />}
          onClick={handleGoogleSignin}
        >
          Login with google
        </Button>
        <Button
          variant="contained"
          color="facebook"
          startIcon={<FacebookIcon />}
          onClick={handleFacebookSignin}
        >
          Login with facebook
        </Button>
      </Stack>

      <Divider text="or" />

      <form onSubmit={handleSubmit}>
        <Stack direction="column" spacing="3">
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            onChange={handleChange}
            value={user.email}
            required={true}
          />
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
            required={true}
          />
          <Button variant="contained" color="primary">
            Create Account
          </Button>
        </Stack>
      </form>

      <Divider />

      <Button
        variant="outlined"
        color="text"
        width="content"
        align="center"
        href="/login"
      >
        Login with account
      </Button>
    </div>
  );
}

export default Register;
