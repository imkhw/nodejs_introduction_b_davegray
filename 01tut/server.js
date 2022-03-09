// 1) node runs on server, not in browser (backend)
// 2) the console is the terminal window
console.log('hello world')
// 3) global object instead of window object
console.log(global)
// 4) common core modules
// 5) commonjs modules instead of es6 modules
// 6) missing some js apis like fetch

const os = require('os')
const path = require('path')

const { add, subtract, multiply, divide } = require('./math')

console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename))

console.log(add(1, 2))
console.log(subtract(1, 2))
console.log(multiply(1, 2))
console.log(divide(1, 2))
