let fs = require('fs')
let path = require('path')
let ohm = require('ohm-js')

let grammarPath = path.resolve(__dirname, 'sql.ohm')
let grammarSrc = fs.readFileSync(grammarPath, { encoding: 'utf-8' })

module.exports = ohm.grammar(grammarSrc)
