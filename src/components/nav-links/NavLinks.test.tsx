import React from "react";
import renderer from "react-test-renderer";
import NavLinks from ".";

describe("NavLinks", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<NavLinks />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
