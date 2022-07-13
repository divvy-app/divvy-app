/** @jest-environment jsdom */
import { expect, test } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";
import Landing from "../src/client/pages/Landing";
import Login from "../src/client/pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const nullable = [undefined, null];
test("Clicking the getting started button redirects the user to login page", async () => {
  const mockApp = render(
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/*" element={<Landing />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );

  let loginForm = mockApp.container.querySelector(".login-form");
  expect(nullable).toContain(loginForm);

  const landingButton = await mockApp.findByRole("button", { name: /landing/ });
  fireEvent.click(landingButton);

  loginForm = mockApp.container.querySelector(".login-form");
  expect(nullable).not.toContain(loginForm);
});
