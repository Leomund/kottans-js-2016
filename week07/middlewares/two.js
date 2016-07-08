module.exports = (req, res) => {
	if (req.url !== '/favicon.ico') {
		console.log(req.headers); 
		res.end("Hello World");
	}
}