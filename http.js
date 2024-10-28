const http = require('http')

const server = http.createServer((req,res) => {

	if(req.url === '/'){
		res.end( "This is our home page")
		return;
	}
	if(req.url === '/about'){
		res.end("Know about us");
		return;
	}
	res.end(`
	<h1>Oops!</h1>
	<p>We couldn't find what you are looking for</p>
	<a href="/">back home</a>`
	)
	
	
})
server.listen(5000)
