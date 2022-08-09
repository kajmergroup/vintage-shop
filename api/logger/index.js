const buildDevLogger = require('./dev-logger');
const buildProdLogger = require('./prod-logger');

let logger = buildDevLogger();


module.exports = logger;