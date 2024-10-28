const path = require('path')
console.log(__dirname)

const resolute = path.join('/content/','subfolder','README.md')
console.log(resolute)

const base = path.basename(resolute)
console.log(base)

