import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.config({
        extends: [
            "next/core-web-vitals",
            "next/typescript",
            "prettier",
            "plugin:prettier/recommended",
        ],
        rules: {
            semi: ["error"],
            quotes: ["error", "double"],
            "prefer-arrow-callback": ["error"],

            // 🔑 Replace default rule with plugin
            "no-unused-vars": "off",
            "unused-imports/no-unused-imports": "error",
            "unused-imports/no-unused-vars": [
                "warn",
                {
                    vars: "all",
                    varsIgnorePattern: "^_",
                    args: "after-used",
                    argsIgnorePattern: "^_",
                },
            ],
            "prettier/prettier": ["error"],
            "react/no-unescaped-entities": "off",
        },
        plugins: ["unused-imports"],
        ignorePatterns: [
            "node_modules/",
            "build/",
            ".next/",
            "out/",
            "next-env.d.ts",
        ],
    }),
];

export default eslintConfig;
