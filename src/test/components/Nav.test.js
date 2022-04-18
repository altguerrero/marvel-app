import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Nav from "../../components/Nav";
import { BrowserRouter } from "react-router-dom";

describe("Nav.jsx", () => {
  let component;

  beforeEach(() => {
    const user = {
      photoURL: "",
      displayName: "",
      email: "",
    };
    component = render(
      <BrowserRouter>
        <Nav user={user}></Nav>
      </BrowserRouter>
    );
  });

  test("render component", () => {
    expect(component.container.querySelector(".nav")).toBeDefined();
  });
});
