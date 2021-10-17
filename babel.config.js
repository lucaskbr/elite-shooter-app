/* ./babel.config.js */
/* eslint-disable */
module.exports = function(api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@components": "./src/components",
            "@assets": "./assets",
            "@services": "./src/services",
            "@screens": "./src/screens",
            "@contexts": "./src/contexts",
            "@containers": "./src/containers",
            "@utils": "./src/utils",
          },
        },
      ],
      [
        "module:react-native-dotenv",
        {
          "moduleName": "@env",
          "path": ".env",
          "blacklist": null,
          "whitelist": null,
          "safe": false,
          "allowUndefined": true
        }
      ]
    ],
  }
}
