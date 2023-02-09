export const isObject = (testMaterial) =>
  typeof testMaterial === "object" && !Array.isArray(testMaterial) && testMaterial != null;
