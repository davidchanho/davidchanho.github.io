import React from "react";
import renderer from "react-test-renderer";
import ArticlesList from ".";

describe("ArticlesList", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ArticlesList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
