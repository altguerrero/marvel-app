import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Search from "../../components/Search";

const onSearchMock = jest.fn();

describe("Search.jsx", () => {
  let component;

  beforeEach(() => {
    const searchResults = {
      data: {
        data: {
          results: [],
        },
      },
    };

    component = render(
      <Search search={onSearchMock} searchResults={searchResults}>
        <div>element</div>
      </Search>
    );
  });

  test("render component", () => {
    expect(component.container.querySelector(".search")).toBeDefined();
  });
});
