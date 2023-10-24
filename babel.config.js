module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@app/assests": "./assets",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
