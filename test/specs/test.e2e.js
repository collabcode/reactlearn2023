const { expect, browser, $ } = require("@wdio/globals");

describe("My application start", () => {
  beforeEach(async () => {
    await browser.url("\\");
    await browser.pause(6000);
  });

  it("should load the home page properly", async () => {
    await browser.saveFullPageScreen("fullPage", {});

    expect(await browser.getTitle()).toEqual("React App");
  });

  it("should match to baseline", async () => {
    await expect(await browser.checkFullPageScreen("fullPage", {})).toEqual(0);
  });
});
