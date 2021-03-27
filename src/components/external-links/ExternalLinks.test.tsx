import React from "react";
import renderer from "react-test-renderer";
import ExternalLinks from ".";

describe("ExternalLinks", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ExternalLinks />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
