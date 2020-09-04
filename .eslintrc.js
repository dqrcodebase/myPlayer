module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "linebreak-style": [0 ,"error", "windows"],
    "quotes": [0, "single"],//引号类型 `` "" ''
    'semi': 0,// 末尾是否添加分号
    "comma-dangle": [0, "never"], // 末尾是否添加逗号
    "arrow-parens":[1,"as-needed"], // 箭头函数的参数是否加括号
    "space-before-function-paren": [0, "always"], // 函数前面加空格 
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        mocha: true,
      },
    },
  ],
};
