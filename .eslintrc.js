module.exports = {
  env: {
    es6: true,
  },
  extends: ['airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  
  plugins: ['react', 'prettier', 'module-resolver'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'import/no-extraneous-dependencies': 'off',
    "module-resolver/use-alias": 2
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        alias: {
          "@components": "./src/components",
          "@assets": "./assets",
          "@services": "./src/services",
          "@screens": "./src/screens",
          "@contexts": "./src/contexts",
        },
      }
    }
  }
};
