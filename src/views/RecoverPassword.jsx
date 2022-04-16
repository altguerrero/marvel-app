import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

import Stack from "../components/Stack";
import Button from "../components/Button";
import Divider from "../components/Divider";
import Input from "../components/Input";
import CustomLink from "../components/CustomLink";
import Typography from "../components/Typography";

function RecoverPassword() {
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

  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleResetPassword(user.email);
      navigate("/");
    } catch (error) {
      setError(message.error[error.code]);
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
    <div className="Login">
      {error && <p>{error}</p>}

      <Stack direction="column" spacing={6}>
        <Stack direction="column" spacing={4}>
          <Typography variant="h2" size="2xl" align="center">
            Check your email and follow the instructions
          </Typography>
          <Typography variant="p" size="base" align="center">
            We will send you a link to your email so you can change your
            password
          </Typography>
        </Stack>

        <Stack direction="column" spacing={4}>
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

              <Button variant="contained" color="primary">
                Send Email
              </Button>
            </Stack>
          </form>
          <CustomLink href="/login" align="center">
            {"<"} Back to login
          </CustomLink>
        </Stack>
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

export default RecoverPassword;
