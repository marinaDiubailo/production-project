module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'i18next'],
	rules: {
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'jsx-quotes': [2, 'prefer-single'],
		'no-tabs': 'off',
		'react/jsx-filename-extension': [
			2,
			{ extensions: ['.js', '.jsx', '.tsx'] },
		],
		indent: [2, 'tab'],
		'linebreak-style': [2, 'windows'],
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		'no-unused-vars': 'warn',
		'react/require-default-props': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-props-no-spreading': 'warn',
		'react/function-component-definition': 'off',
		'no-shadow': 'off',
		'import/extensions': 'off',
		'import/no-extraneous-dependencies': 'off',
		'no-underscore-dangle': 'off',
		'object-curly-newline': 'off',
		'operator-linebreak': 'off',
		'comma-dangle': 'off',
		'arrow-body-style': 'off',
		'react/jsx-curly-brace-presence': 'off',
		'arrow-parens': 'off',
		'i18next/no-literal-string': [
			'error',
			{ markupOnly: true, ignoreAttribute: ['data-testid', 'to'] },
		],
		'max-len': ['error', { ignoreComments: true, code: 100 }],
		'react/jsx-wrap-multilines': 'off',
		'no-trailing-spaces': [
			'warn',
			{ ignoreComments: true, skipBlankLines: true },
		],
	},
	globals: {
		__IS_DEV__: true,
	},
	overrides: [
		{
			files: ['**/src/**/*.test.{ts,tsx}'],
			rules: {
				'i18next/no-literal-string': 'off',
			},
		},
	],
};
