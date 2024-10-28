const path = require('path')

console.log(path.sep)

const resolute = path.join('/content/','subfolder','README.md')
console.log(resolute)

const base = path.basename(resolute)
console.log(base)

const absolute = path.resolve(__dirname,'content','subfolder','README.md')
console.log(absolute)

