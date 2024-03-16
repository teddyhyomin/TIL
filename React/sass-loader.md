## sass-loader config custmizing

### yarn eject and fix webpack.cofig.js

```js
            {
              test: sassRegex,
              exclude: sassModuleRegex,
              use: getStyleLoaders(
                {
                  importLoaders: 3,
                  sourceMap: isEnvProduction
                    ? shouldUseSourceMap
                    : isEnvDevelopment,
                  modules: {
                    mode: 'icss',
                  },
                }).concat({
                  loader:require.resolve("sass-loader"),
                  options: {
                    sassOptions:{
                      includePaths: [paths.appSrc + "/styles"],
                    },
                    additionalData: "@import 'utils';",
                  },
                }),
              // Don't consider CSS imports dead code even if the
              // containing package claims to have no side effects.
              // Remove this when webpack adds a warning or an error for this.
              // See https://github.com/webpack/webpack/issues/6571
              sideEffects: true,
            },
```
