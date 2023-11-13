import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/2Bop/);

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", {
      name: "Welcome to 2Bop. A collection of intereactive games to play with your remote team The aim is to have asynchounes games taht work on a round robbin.",
    }),
  ).toBeVisible();
});
