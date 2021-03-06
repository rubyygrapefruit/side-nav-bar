/**
 * These rules enforce the Hack Reactor Style Guide
 *
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
 */

// module.exports = {
//   extends: './node_modules/eslint-config-hackreactor/index.js'
// };

module.exports = {
  extends: "airbnb",
  env: {
    "browser": true,
    "node": true,
    "jest": true,
  },
  rules: {
    "no-console": 0,
    "import/extensions": ["error", "never", { "jsx": "always" }],
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "to" ],
    }],
  },
};
