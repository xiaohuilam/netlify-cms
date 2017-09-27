export const prefixer = prefix => new Proxy({}, {
  get: (target, name) => {
    return `${ prefix }--${ name }`;
  },
});
