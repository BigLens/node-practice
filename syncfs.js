const {readFileSync, writeFileSync} = require('fs')

const firsttext = readFileSync('./content/texts/firstText.txt', 'utf8')
const secondtext = readFileSync('./content/texts/secondText.txt', 'utf8')

writeFileSync('./content/texts/writeup.txt', `the content in both file is: ${firsttext}! ${secondtext}`)

