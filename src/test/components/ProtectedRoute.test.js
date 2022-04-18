import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import ProtectedRoute from "../../components/ProtectedRoute";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../../context/authContext";

describe("ProtectedRoute.jsx", () => {
  let component;

  beforeEach(() => {
    component = render(
      <AuthProvider>
        <BrowserRouter>
          <ProtectedRoute>click me!</ProtectedRoute>
        </BrowserRouter>
      </AuthProvider>
    );
  });

  test("render component", () => {
    component.getByText("Loading...");
  });
});
