const App = require('./app.js');
const config = require('./config/default.json');

var app = new App();

app.use(require('./middlewares/one.js'));
app.use(require('./middlewares/two.js'));

app.start(config.host, config.port, () => console.log(`listening on ${config.host}:${config.port}`));