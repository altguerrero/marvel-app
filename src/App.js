import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/authContext";

import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import CharacterDetails from "./components/CharacterDetails";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/character/:id"
          element={
            <ProtectedRoute>
              <CharacterDetails />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
