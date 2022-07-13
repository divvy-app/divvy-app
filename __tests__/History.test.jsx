/** @jest-environment jsdom */
import { expect, test } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";
import History from "../src/client/pages/History";
import { Provider } from "react-redux";
import { store } from "../src/client/redux/store";

test("Component is able to manage server responses as they come in", async () => {
  const mock = render(
    <Provider store={store}>
      <History />
    </Provider>
  );

  const loadButton = await mock.findByRole("button", {
    name: /load/i,
  });
  fireEvent.click(loadButton);

  const newBills = store.getState().bill.allBills;
  const isValid = Array.isArray(newBills) && newBills.every(isValidCostObj);
  expect(isValid).toBe(true);
});

function isValidCostObj(value) {
  return (
    // Main structural check
    value != null &&
    typeof value === "object" &&
    // ID check
    "_id" in value &&
    typeof value._id === "number" &&
    // Title check
    "title" in value &&
    typeof value.title === "string" &&
    // Total check
    "myTotal" in value &&
    typeof value.myTotal === "number" &&
    // Cost check
    "cost" in value &&
    Array.isArray(value.cost) &&
    value.cost.every(isValidPrice)
  );
}

function isValidPrice(value) {
  return (
    value != null &&
    typeof value === "object" &&
    "title" in value &&
    typeof value.title === "string" &&
    "price" in value &&
    typeof value.price === "number"
  );
}
