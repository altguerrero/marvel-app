import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import SearchResults from "../../components/SearchResults";
import { BrowserRouter } from "react-router-dom";

describe("SearchResults.jsx", () => {
  let component;

  beforeEach(() => {
    const searchResults = {
      data: {
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
      },
    };

    component = render(
      <BrowserRouter>
        <SearchResults searchResults={searchResults}>
          <div>element</div>
        </SearchResults>
      </BrowserRouter>
    );
  });

  test("render component", () => {
    expect(component.container.querySelector(".searchResults")).toBeDefined();
  });
});
