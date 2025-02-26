const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  descripyion: String,
  price: Number,
  imageUrl: String
});

module.exports = mongoose.model('Product', productSchema);
