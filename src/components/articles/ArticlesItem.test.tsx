import React from "react";
import renderer from "react-test-renderer";
import ArticlesItem from "./ArticlesItem";

describe("ArticlesItem", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ArticlesItem />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
