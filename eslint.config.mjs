import globals from 'globals'
import pluginJs from '@eslint/js'
import prettierPlugin from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'

/** @type {import('eslint').Linter.FlatConfig[]} */

export default [
  {
    plugins: {
      prettier: prettierPlugin
    }
  },
  {
    ignores: ['node_modules', 'webpack.config.js', 'dist']
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2024
      }
    }
  },
  pluginJs.configs.recommended,
  {
    files: ['**/*.{js}'],
    rules: {
      ...eslintConfigPrettier.rules,
      curly: 'error',
      camelcase: 'off',
      'no-underscore-dangle': 'off',
      'no-console': 'off',
      'no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: false,
          argsIgnorePattern: '^_'
        }
      ],
      'no-void': 'off',
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: ['const', 'let', 'case', 'default'],
          next: '*'
        },
        { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] }
      ],
      'newline-before-return': 'error',
      'import/prefer-default-export': 'off',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index'
          ],
          'newlines-between': 'never'
        }
      ]
    }
  }
]
