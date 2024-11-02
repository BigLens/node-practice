const {createReadStream} = require('fs');

const stream = createReadStream('bigfile.txt', {encoding:'utf8'})

stream.on('data',(result)=>{
	console.log(result)
})
