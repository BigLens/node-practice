const lodash = require('lodash')

const items = [1,[2,[3,[4,[5]]]]];
const anotherItems = lodash.flattenDeep(items)
console.log(anotherItems)
