import { test, expect } from "vitest";
import { Slug } from "./slug";

test("should be able to create a slug from text", async () => {
  const slug = Slug.createFromText("Slug text example");

  expect(slug.value).toEqual("slug-text-example");
});
