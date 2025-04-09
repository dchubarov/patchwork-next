import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirName,
});

export default defineConfig(
  /** @type {import('eslint').Linter.Config[]} */
  [
    {
      files: ['**/*.{js,mjs,cjs,ts}'],
      plugins: { js },
      extends: ['js/recommended'],
    },
    {
      files: ['**/*.{js,mjs,cjs,ts}'],
      languageOptions: { globals: { ...globals.browser, ...globals.node } },
    },
    {
      ignores: [
        'coverage',
        '**/public',
        '**/dist',
        'pnpm-lock.yaml',
        'pnpm-workspace.yaml',
      ],
    },
    eslintPluginPrettierRecommended,
    tseslint.configs.recommended,

    ...compat.config({
      extends: ['next', 'next/core-web-vitals', 'next/typescript'],
      settings: {
        next: {
          rootDir: 'apps/platform',
        },
      },
    }),
  ]
);
