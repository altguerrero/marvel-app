import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import CharacterImage from "../../components/CharacterImage";

describe("CharacterImage.jsx", () => {
  let component;

  beforeEach(() => {
    component = render(<CharacterImage src="image.pgn" alt="image" />);
  });

  test("render component", () => {
    expect(component.container.querySelector(".characterImage")).toBeDefined();
  });
});
