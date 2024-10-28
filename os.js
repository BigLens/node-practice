const os = require('os')

const user = os.userInfo()
console.log(user)

console.log(`this mobile has been on for ${os.uptime()}seconds`)

const phoneDetails = {
	name: os.type(),
	release: os.release(),
	totalmem: os.totalmem(),
	freemem: os.freemem()
}
console.log(phoneDetails)
