import JSON5 from "json5";

export const parseJSONFromString = (result, expectedType) => {
  const [startChar, endChar] =
    expectedType === "object" ? ["{", "}"] : ["[", "]"];

  const start = result.indexOf(startChar);
  const end = result.lastIndexOf(endChar);

  if (start === -1 || end === -1) {
    const stringifiedResult = JSON.stringify(result);

    console.error(`Bad JSON result
        \nresultStart:${stringifiedResult.slice(0, 500)}
        \nresultEnd: ${stringifiedResult.slice(stringifiedResult.length - 500)}
        `);

    throw new Error(`Unable to locate JSON (${expectedType})`);
  }

  try {
    return JSON5.parse(result.slice(start, end + 1));
  } catch (error) {
    console.error(`Error parsing JSON: ${error}`);
    throw new Error(`Error parsing JSON: ${error}`);
  }
};
