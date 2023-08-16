const { expect, browser, $ } = require("@wdio/globals");

describe("My application start", () => {
  it("should load the home page properly", async () => {
    await browser.url("\\");
    await browser.pause(6000);
    await browser.saveScreenshot("./test/screenshots/1.png");

    expect(await browser.getTitle()).toEqual("React App");
  });
});
