includePaths: [paths.appSrc + "/styles"],
},
sourceMap: isEnvProduction && shouldUseSourceMap,
prependData: `@import 'utils';`,
},
}),
// Don't consider CSS imports dead code even if the 