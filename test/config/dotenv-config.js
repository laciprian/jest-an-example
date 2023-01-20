const path = require('path');

/** makes feathersjs load test.json from config dir. */
const configDir = path.resolve(__dirname, '../../config');
process.env['NODE_ENV'] = 'test';
process.env['DB_CONNECTION_URI'] = 'mongodb://localhost:27017/jest';
process.env['NODE_CONFIG_DIR'] = configDir;
