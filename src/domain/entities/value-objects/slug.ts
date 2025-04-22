export class Slug {
  constructor(public value: string) {}

  /**
   * Receive a string and convert it to a slug string.
   * - Input: "An example title"
   * - Output: "an-example-title"
   *
   * @param text {string}
   */
  static createFromText(text: string) {
    const slugText = text
      .normalize("NFKD")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/_/g, "-")
      .replace(/--+/g, "-")
      .replace(/-$/g, "");

    return new Slug(slugText);
  }
}
