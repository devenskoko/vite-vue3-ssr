module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {
    defineEmits: true,
    document: true,
    localStorage: true,
    GLOBAL_VAR: true,
    window: true,
    defineProps: true,
    defineExpose: true,
  },
  extends: [
    "./.eslintrc-auto-import.json",
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended", // 添加 prettier 插件
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint", "import"],
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        "no-undef": "off",
      },
    },
    {
      files: ["*.html"],
      rules: {
        "vue/comment-directive": "off",
      },
    },
  ],
  rules: {
    quotes: 0,
    "no-console": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "prettier/prettier": [
      "warn",
      {
        singleQute: false,
        semi: true,
        endOfLine: "auto",
      },
    ],
    "import/prefer-default-export": "off",
    "no-use-before-define": "off",
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["index"],
      },
    ],
    "no-shadow": "off",
    "consistent-return": "off",
    "no-plusplus": "off",
    "no-continue": "off",
    "prefer-destructuring": "off",
    "no-param-reassign": "off",
    "no-nested-ternary": "off",
  },
};
