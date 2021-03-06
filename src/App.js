import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/authContext";

import AuthLayout from "./layout/AuthLayout";
import AppLayout from "./layout/AppLayout";

import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import CharacterDetails from "./views/CharacterDetails";
import RecoverPassword from "./views/RecoverPassword";
import Profile from "./views/Profile";

const pages = [
  // Public pages
  {
    path: "/",
    element: Home,
    layout: AppLayout,
    protected: true,
  },
  {
    path: "/character/:id",
    element: CharacterDetails,
    layout: AppLayout,
    protected: true,
  },
  {
    path: "/profile",
    element: Profile,
    layout: AppLayout,
    protected: true,
  },
  // Authenticated pages
  {
    path: "/login",
    element: Login,
    layout: AuthLayout,
    protected: false,
  },
  {
    path: "/register",
    element: Register,
    layout: AuthLayout,
    protected: false,
  },
  {
    path: "/recover-password",
    element: RecoverPassword,
    layout: AuthLayout,
    protected: false,
  },
];

function App() {
  return (
    <AuthProvider>
      <Routes>
        {pages.map((page, index) => (
          <Route
            key={index}
            path={page.path}
            element={
              page.protected ? (
                <ProtectedRoute>
                  <page.layout>
                    <page.element />
                  </page.layout>
                </ProtectedRoute>
              ) : (
                <page.layout>
                  <page.element />
                </page.layout>
              )
            }
          ></Route>
        ))}
      </Routes>
    </AuthProvider>
  );
}

export default App;
