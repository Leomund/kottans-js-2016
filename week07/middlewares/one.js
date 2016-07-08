module.exports = (req, res) => {
	if (req.url !== '/favicon.ico') {
		console.log("url", req.url); 
		console.log("method", req.method); 
	}
}