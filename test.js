let sql = require('./index.js')

let m = sql.grammar.match('select * from submissions')

console.log(m.succeeded())
