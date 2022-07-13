/** @jest-environment jsdom */

/**
 * This is a very janky test. It tries to be as flexible as possible, but I also
 * wanted to avoid changing the source file, since it wasn't my work.
 *
 * I did have to make some concessions about adding aria-labels, though.
 */

import { expect, test } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";
import Split from "../src/client/pages/Split";

test("User is able to calculate split costs", async () => {
  const splitForm = render(<Split />);

  // Expense field isn't used for calculation, but is still being tested to make
  // sure no presentational/input logic is interrupted.
  const expenseField = await splitForm.findByRole("textbox", {
    name: /expense/i,
  });

  fireEvent.change(expenseField, {
    target: {
      value: "Korean BBQ",
    },
  });

  const totalField = await splitForm.findByRole("textbox", { name: /total/i });
  fireEvent.change(totalField, {
    target: {
      value: "50",
    },
  });

  const peopleField = await splitForm.findByRole("textbox", {
    name: /people/i,
  });

  fireEvent.change(peopleField, {
    target: {
      value: "5",
    },
  });

  const submitButton = await splitForm.findByRole("button");
  fireEvent.click(submitButton);
  expect(splitForm.container.innerHTML).toContain("$10.00");
});
