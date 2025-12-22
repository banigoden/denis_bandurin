// Basic test to ensure test suite is set up correctly
describe("App", () => {
  test("environment is working", () => {
    expect(true).toBe(true);
  });

  test("can perform basic assertions", () => {
    const value = "test";
    expect(value).toBe("test");
  });
});
