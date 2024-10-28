const {readFile, writeFile} = require('fs')

readFile('./content/texts/firstText.txt','utf8',(err, result) =>{
	if(err){
		console.log(err)
		return
	}
	const firsttext = result;

	readFile('./content/texts/secondText.txt','utf8',(err, result) =>{
		if(err){
			console.log(err)
			return
		}
		const secondtext = result;
		
		writeFile('./content/texts/forge.txt', `contents in file: ${firsttext}! ${secondtext}`,(err, result) => {
			if(err){
				console.log(err)
				return
			}
			console.log(result)
		});
	});
});
