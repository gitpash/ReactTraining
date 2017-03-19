module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "kentcdodds"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
            "modules": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "no-console": 0,
        // "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    }
};
