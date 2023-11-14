import { test, expect } from "@playwright/experimental-ct-vue2";
import Index from "./index.vue";

test.use({ viewport: { width: 1080, height: 768 } });

test("should render the index page", async ({ mount }) => {
  const component = await mount(<Index />);
  await expect(component).toContainText(
    "Welcome to 2Bop. A collection of intereactive games to play with your remote team",
  );
});
