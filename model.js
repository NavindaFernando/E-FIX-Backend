const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  productId: Number,
  productName: String,
  productPrice: String,
  productDescription: String,
  productColor: String,
  productQty: String,
  productSize: String,
  productImage: String,
  productSubImageOne: String,
  productSubImageTwo: String,
  productSubImageThree: String,
  productSubImageFour: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
