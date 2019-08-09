module.exports = {
  parser: "babel-eslint",
  extends: "airbnb",
  plugins: ["react-native", "jest"],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "class-methods-use-this": 0,
    "global-require": 0,
    "no-param-reassign": 0,
    "no-await-in-loop": 0,
    "no-plusplus": 0,
    "no-mixed-operators": [
      "error",
      {
        groups: [
          ["+", "-", "*", "/", "%", "**"],
          ["&", "|", "^", "~", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
          ["&&", "||"],
          ["in", "instanceof"]
        ],
        allowSamePrecedence: true
      }
    ],
    "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
    "no-use-before-define": 0,
    "no-console": "off",
    "no-underscore-dangle": 0,
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": [0, { devDependencies: false }],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/prefer-stateless-function": [1, { ignorePureComponents: true }],
    "react/require-default-props": 2,
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    "max-len": [1, { code: 130, comments: 150 }],
    camelcase: 0,
    "comma-dangle": ["error", "never"],
    "object-curly-newline": ["error", { multiline: true }],
    "react/prop-types": 2,
    "react/forbid-prop-types": [2, { forbid: ["any"] }],
    "no-prototype-builtins": 0,
    "no-unused-expressions": [
      "error",
      { allowTernary: true, allowShortCircuit: true }
    ]
  },
  globals: {
    __DEV__: true,
    navigationOptions: true,
    propTypes: true,
    defaultProps: true
  },
  env: {
    "jest/globals": true
  }
};
