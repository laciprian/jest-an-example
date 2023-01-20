//import initSeeder from './seeder';
import connectDB from '../../src/connect';

const DB_CONNECTION_URI =
  process.env.DB_CONNECTION_URI || 'mongodb://localhost:27017/jest';

beforeAll(async function () {
   await connectDB(DB_CONNECTION_URI);
  //await initSeeder(app);
});

afterAll(async () => {
  //await mongoose.connection.close();

  //if (!process.argv.includes('--runInBand')) app.get('sequelizeClient').close();
});
