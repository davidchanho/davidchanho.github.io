import React from "react";
import renderer from "react-test-renderer";
import BlogList from ".";

describe("BlogList", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<BlogList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
