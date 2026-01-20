import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';
import globals from 'globals';

export default tseslint.config(
  // Global ignores
  {
    ignores: ['dist/**', 'node_modules/**', '.astro/**', 'src/env.d.ts'],
  },

  // Base ESLint recommended rules
  eslint.configs.recommended,

  // TypeScript rules
  ...tseslint.configs.recommended,

  // Astro rules
  ...eslintPluginAstro.configs.recommended,

  // Global settings for all files
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // TypeScript specific rules
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      // Prefer const over let
      'prefer-const': 'error',

      // No var
      'no-var': 'error',

      // Strict equality
      eqeqeq: ['error', 'always'],

      // No console.log (warn/error allowed)
      'no-console': ['warn', { allow: ['warn', 'error'] }],

      // No unused vars (underscore-prefixed ignored)
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      // Require type imports
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports' },
      ],
    },
  },

  // Astro specific rules
  {
    files: ['**/*.astro'],
    rules: {
      // Astro components can have unused expressions for rendering
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  }
);
