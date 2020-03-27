import React from "react";
import { render, waitForElementToBeRemoved } from "@testing-library/react";
import App from "./App";
import { makeServer } from "./server";
let server;

beforeEach(() => {
  server = makeServer({ environment: "test" });
});

afterEach(() => {
  server.shutdown();
});

it("shows a loading message", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId("loading")).toBeInTheDocument();
});
it("shows existing  users", async () => {
  server.create("user", { id: 1, name: "Peter" });
  server.create("user", { id: 2, name: "Erika" });
  server.create("user", { id: 3, name: "Rodrigo" });

  const { container, getByTestId, getAllByTestId } = render(<App />);
  await waitForElementToBeRemoved(() => getByTestId("loading"));
  expect(getAllByTestId("user")).toHaveLength(3);
});
