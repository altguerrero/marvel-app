import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import CharacterItem from "../../components/CharacterItem";
import { BrowserRouter } from "react-router-dom";

describe("CharacterItemm.jsx", () => {
  let component;

  beforeEach(() => {
    const character = {
      id: 1,
      name: "iron man",
      thumbnail: { extension: ".png", path: "http://marvel.com/img" },
    };
    component = render(
      <BrowserRouter>
        <CharacterItem character={character} />
      </BrowserRouter>
    );
  });

  test("render component", () => {
    component.getByText("iron man");
  });
});
