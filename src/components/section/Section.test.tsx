import React from "react";
import renderer from "react-test-renderer";
import Section from ".";

const test = {
  name: "name",
  header: "header",
  children: <div>test</div>,
};

describe("Section", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Section {...test} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
