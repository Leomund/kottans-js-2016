const http = require("http");

module.exports = class App{
	constructor() {
		this.middlewares = [];
	}
	use(middleware) {
		this.middlewares.push(middleware);
	}
	start(host, port, callback) {
		http.createServer((req, res) => {
			this.middlewares.forEach(middleware => middleware(req, res))
		}).listen(port, host, callback);
	}
}