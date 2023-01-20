const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const achievementSchema = new Schema({
  id: String,
  name: String,
  description: String,
  image: String,
  products: Array
});

module.exports = mongoose.model('achievements', achievementSchema);
