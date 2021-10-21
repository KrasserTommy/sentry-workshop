module.exports = {
  root: true,
  extends: ["react-app"],
  overrides: [
    {
      files: ["**/*.js?(x)"],
      rules: {
        "no-undef": "off",
      },
    },
  ],
};
