import initSeeder from './seeder';
import connectDB from '../../connect';

export default async () => {
  await connectDB(DB_CONNECTION_URI);
};
