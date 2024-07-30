import js from '@eslint/js';

export default [
	js.configs.recommended, // Enable all recommended rules

	{
		rules: {
			'no-unused-vars': 'off',
			'no-undef': 'off',

			'no-constructor-return': 'error',
			'no-duplicate-imports': 'warn',
			'no-promise-executor-return': 'error',
			'no-self-compare': 'error',
			'no-use-before-define': 'error',
			'require-atomic-updates': 'warn',

			'no-eval': 'error',
			'no-implied-eval': 'error',

			'eqeqeq': 'error',

			'func-style': ['error', 'declaration', { 'allowArrowFunctions': true }],
			'no-var': 'error',
			'prefer-const': 'warn',

			'yoda': 'error',
		},
	},
];
