import mongoose from 'mongoose';

const connectDB = connectionURI => {
  mongoose.set('strictQuery', false);

  return mongoose.connect(connectionURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

export default connectDB;
