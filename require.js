const sayHi = require('./hi-variable')
const names = require('./name-variable')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

const data = require('./object-and-array')
console.log(data)

require('./invoke')

