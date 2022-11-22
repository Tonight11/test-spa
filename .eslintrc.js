module.exports = {
    root: true,
    extends: ["eslint:recommended", "plugin:vue/vue3-essential", "prettier"],
    env: {
        node: true,
        commonjs: true,
        browser: true,
        es6: true,
    },
    rules: {
        indent: "error",
    },
};
