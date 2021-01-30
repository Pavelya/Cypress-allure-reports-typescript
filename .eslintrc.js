module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:cypress/recommended',
        'plugin:prettier/recommended',
    ],    
    rules: {
        // 'no-unused-expressions': 0,
        // 'chai-friendly/no-unused-expressions': 2,
        // 'cypress/no-assigning-return-values': 'error',
        'cypress/no-unnecessary-waiting': 'warn',
        // 'cypress/assertion-before-screenshot': 'warn',
        // 'cypress/no-force': 'warn',
        // 'cypress/no-async-tests': 'error',
    },
};
