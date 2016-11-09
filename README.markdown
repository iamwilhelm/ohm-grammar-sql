# Grammar for SQL written in Ohm

(Ohm)[https://github.com/cdglabs/ohm] is a parser generator language you use
to generate parsers for other languages.

This library is a (currently incomplete) grammar for SQL 2003, a port from
(ISO/IEC 9075-2:2003 - Database Languages - SQL - Part 2: Foundation (SQL/Foundation))[http://savage.net.au/SQL/sql-2003-2.bnf.html]
(also available in pdf)[http://jtc1sc32.org/doc/N1501-1550/32N1526T-text%20for%20FCD%209075-2.pdf]

## Usage

```
let sql = require('ohm-grammar-sql')

let match = sql.grammar.match('select * from users')

if (m.succeeded()) {
  console.log("valid SQL!")
} else {
  console.log("invalid SQL. :(")
}
```

## Trying it out

You can use the (Ohm Editor)[https://ohmlang.github.io/editor/] to try it out
live, and see the parse tree. Just copy the contents of `src/sql.ohm` into
the grammar, and try different examples.

## Contributing

Currently still implementing most of the grammar. I'm targeting the query parts
of the grammar first. If you want to help port it, just submit a pull request.

Test examples checking the grammar is also helpful, and is on my todo list.
