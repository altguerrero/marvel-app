import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import ListCharacters from "../../components/ListCharacters";
import { BrowserRouter } from "react-router-dom";

describe("CharacterItemm.jsx", () => {
  let component;

  beforeEach(() => {
    const characters = {
      data: {
        results: [
          {
            id: 1,
            name: "name",
            thumbnail: { extension: "png", path: "/images" },
          },
          {
            id: 2,
            name: "name",
            thumbnail: { extension: "png", path: "/images" },
          },
        ],
      },
    };
    component = render(
      <BrowserRouter>
        <ListCharacters characters={characters}>
          <div>element</div>
        </ListCharacters>
      </BrowserRouter>
    );
  });

  test("render component", () => {
    expect(component.container.querySelector(".listCharacters")).toBeDefined();
  });
});
