import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const userSchema = new Schema({
  id: String,
  name: String,
  email: String,
  level: Number,
  achievements: Array,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('users', userSchema);
