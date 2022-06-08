const isPromise = (obj: any) =>
  !!obj &&
  (typeof obj === "object" || typeof obj === "function") &&
  typeof obj.then === "function";

// eslint-disable-next-line import/prefer-default-export
export { isPromise };
