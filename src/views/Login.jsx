import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

import Stack from "../components/Stack";
import Button from "../components/Button";
import { FacebookIcon, GoogleIcon } from "../components/Icons";
import Divider from "../components/Divider";
import Input from "../components/Input";
import CustomLink from "../components/CustomLink";

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

  const { login, loginWithGoogle, loginWithFacebook } = useAuth();
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

      <Stack direction="column" spacing={3}>
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
              Login
            </Button>
          </Stack>
        </form>

        <CustomLink href="/recover-password" align="right">
          Forgot your Password
        </CustomLink>
      </Stack>

      <Divider />

      <Button
        variant="outlined"
        color="text"
        width="content"
        align="center"
        href="/register"
      >
        Create account
      </Button>
    </div>
  );
}

export default Login;
