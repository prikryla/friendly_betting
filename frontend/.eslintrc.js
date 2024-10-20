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

                // react
                "react/jsx-curly-newline": "off",
                "react/jsx-first-prop-new-line": "off",
                "react/jsx-filename-extension": "off",
                "react/jsx-fragments": "off",
                "react/jsx-indent": "off",
                "react/jsx-indent-props": "off",
                "react/jsx-props-no-spreading": "off",
                "react/jsx-wrap-multilines": ["off", {
                    "declaration": "parens-new-line",
                    "assignment": "parens-new-line",
                    "return": "parens-new-line",
                    "arrow": "parens-new-line",
                    "condition": "parens-new-line",
                    "logical": "parens-new-line",
                    "prop": "parens-new-line"
                }],
                "react/forbid-prop-types": ["warn"],
                "react/no-did-mount-set-state": "off",
                "react/no-did-update-set-state": "off",
                "react/prefer-stateless-function": "off",
                "react/destructuring-assignment": "off",
                "react/no-multi-comp": [2, { "ignoreStateless": true }],
                "react/require-default-props": 0,
                "react/sort-comp": "off",
                "react/static-property-placement": "off",
                "react/default-props-match-prop-types": [1, { "allowRequiredDefaults": true }],
                "react/function-component-definition": 0,
                "react/jsx-no-constructed-context-values": 1,
                "react/jsx-no-useless-fragment": [1, { "allowExpressions": true }],
                "react/no-unstable-nested-components": [1, { "allowAsProps": true }],
        
                // react-hooks (new and shiny!)
                "react-hooks/exhaustive-deps": "warn",
        
                // jsx-a11y
                "jsx-a11y/anchor-has-content": "off",
                "jsx-a11y/label-has-for": [1, {
                    "allowChildren": true
                }],
                "jsx-a11y/control-has-associated-label": "off",
        
                // javascript
                "arrow-body-style": "off",
                "arrow-parens": ["error", "always"],
                "consistent-return": "off",
                "class-methods-use-this": "off",
                "dot-notation": "off",
                "func-names": "off",
                "import/extensions": "off",
                "import/prefer-default-export": "off",
                "import/no-named-as-default": "off",
                "import/no-unresolved": [
                    "error",
                    {
                        "ignore": ["\.svg"]
                    }
                ],
                "indent": ["warn", 4, { "SwitchCase": 1 }],
                "keyword-spacing": "warn",
                "lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],
                "max-len": ["warn", 120, { "ignoreComments": true }],
                "no-mixed-spaces-and-tabs": "error",
                "no-multi-spaces": ["error", { ignoreEOLComments: true }],
                "no-multiple-empty-lines": ["error", { max: 2 }],
                "no-param-reassign": "off",
                "no-plusplus": "off",
                "no-tabs": "off",
                "no-underscore-dangle": "off",
                "no-use-before-define": "off",
                "no-unused-vars": "off",
                "no-shadow": "off",
                "one-var": "off",
                "operator-linebreak": "warn",
                "prefer-const": "warn",
                "prefer-template": "warn",
                "space-before-blocks": "warn",
                "space-before-function-paren": ["error", {
                    "anonymous": "never",
                    "named": "never",
                    "asyncArrow": "always"
                }],
                "no-restricted-exports": "off",
                "default-param-last": "warn",
                "function-paren-newline": "off",
                "function-call-argument-newline": "off",
        
        // Prettier rules
        "prettier/prettier": ["error", {
            "singleQuote": true,
            "trailingComma": "all",
            "jsxSingleQuote": true,
            "printWidth": 128,
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