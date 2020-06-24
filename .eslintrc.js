module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "extends": [
        "plugin:@typescript-eslint/recommended" 
    ],
    "parserOptions": {
        "project": "tsconfig.eslint.json",
        "sourceType": "module"
    },
    "plugins": [ "@typescript-eslint" ],
    "rules": {
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "none",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/semi": [
            "error",
            "never"
        ],
        "@typescript-eslint/explicit-function-return-type": "off",
        'quotes': [2, 'single', { "avoidEscape": true }],
    },
    "overrides": [
        {
            "files": ["**/*.spec.*"],
            "rules": {
              "@typescript-eslint/no-explicit-any": "off"
            }
        }
    ]
}