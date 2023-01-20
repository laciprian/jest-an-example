import http from 'http';
import app from '../app';
import connectDB from '../connect';

/**
 * Get port from environment and store in Express.
 */
const PORT = normalizePort(process.env.PORT || '3000');
const DB_CONNECTION_URI =
  process.env.DB_CONNECTION_URI || 'mongodb://localhost:27017/jest';

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

server.on('error', onError);

const start = async () => {
  await connectDB(DB_CONNECTION_URI);

  server.listen(PORT, function (error) {
    if (!error) {
      console.log(`App is running at http://localhost:${PORT}`);
    }
  });
};

start().catch(error => {
  console.log(error);
  console.log('Failed to connect to the database, server is not running.');
});

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof PORT === 'string' ? 'Pipe ' + PORT : 'Port ' + PORT;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

