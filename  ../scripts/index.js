const compileSass = require('compile-sass')
// const { compileSassAndSave } = require('compile-sass')

app.use('/css/:cssName', compileSass.setup({
  sassFilePath: path.join(__dirname, 'scss/'),
  sassFileExt: 'scss',
  embedSrcMapInProd: true,
  resolveTildes: true,
  nodeSassOptions: {
    errLogToConsole: true,
    noCache: true,
    force: true
  }
}))

// await compileSassAndSave('scss/styles.scss', 'css/styles.css')
