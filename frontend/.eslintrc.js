module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "eslint:recommended",
        "prettier",
    ],
    "ignorePatterns": ["dist", ".eslintrc.cjs", "prettier.js"],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json",
        "tsconfigRootDir": __dirname,
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "react-hooks",
        "import",
        "react-refresh",
        "prettier"
    ],
    "rules": {
        // Maximum line length
        "max-len": ["error", { "code": 128 }],

        // Disallow console.log
        "no-console": ["error", { "allow": ["warn", "error"] }],

        // Disallow more than one empty line
        "no-multiple-empty-lines": ["error", { "max": 1 }],

        // React and hooks rules
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",

        // TypeScript rules
        "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/strict-boolean-expressions": "off",

        
        // Prettier rules
        "prettier/prettier": ["error", {
            "singleQuote": true,
            "trailingComma": "all",
            "jsxSingleQuote": true,
            "printWidth": 100,
            "useTabs": false,
            "bracketSameLine": false,
            "tabWidth": 4,
        }]
    },

    "settings": {
        "react": {
            "version": "detect"
        }
    }
}