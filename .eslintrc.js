module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'max-len': [2, 140, 4, {
      'ignoreUrls': true,
      'ignoreTemplateLiterals': true,
      'ignoreStrings': true
    }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-return-assign': 0,
    'no-mixed-spaces-and-tabs': 2,
    indent: [2, 2, { 'SwitchCase': 1 }],
    'object-curly-spacing': [2, 'always'],
    'max-statements': [2, 24]
  },
  globals: {}
}


'use strict'

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'standard',
  plugins: [
    'html'
  ],
  env: {
    browser: true
  },
  globals: {
    'expect': true,
    'describe': true,
    'it': true,
    'jest': true
  },

}
