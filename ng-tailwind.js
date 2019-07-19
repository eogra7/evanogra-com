module.exports = {
  // Tailwind Paths
  configJS: 'apps/evanogra-com/tailwind.config.js',
  sourceCSS: 'apps/evanogra-com/src/tailwind.css',
  outputCSS: 'apps/evanogra-com/src/styles.css',
  // Sass
  sass: false,
  // PurgeCSS Settings
  purge: false,
  keyframes: false,
  fontFace: false,
  rejected: false,
  whitelist: [],
  whitelistPatterns: [],
  whitelistPatternsChildren: [],
  extensions: [
    '.ts',
    '.html',
    '.js'
  ],
  extractors: [],
  content: []
}
