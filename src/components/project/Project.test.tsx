import React from "react";
import renderer from "react-test-renderer";
import Project from ".";

const test = {
  title: "title",
  github: "github",
  link: "link",
  description: "description",
};

describe("Project", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Project {...test} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
