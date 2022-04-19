import {
  getAllCharacters,
  getCharacter,
  searchCharacters,
  getCharacterComic,
} from "../../service/Characters.service";

it("Get all characters", () => {
  expect(getAllCharacters()).toBeTruthy();
});

it("Get character", () => {
  expect(getCharacter()).toBeTruthy();
});

it("Search character", () => {
  expect(searchCharacters()).toBeTruthy();
});

it("get character comic", () => {
  expect(getCharacterComic()).toBeTruthy();
});
