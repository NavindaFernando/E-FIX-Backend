const Product = require("./model");

// get product
const getProducts = (req, res, next) => {
  Product.find()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

// add product
const addProduct = (req, res, next) => {
  const product = new Product({
    productId: req.body.productId,
    productName: req.body.productName,
    productPrice: req.body.productPrice,
    productDescription: req.body.productDescription,
    productColor: req.body.productColor,
    productQty: req.body.productQty,
    productSize: req.body.productSize,
    productImage: req.body.productImage,
  });
  product
    .save()
    .then(response => {
      res.json({ response });
    })
    .catch(error => {
      res.json({ error });
    });
};

// update product
const updateProduct = (req, res, next) => {
  const {
    productId,
    productName,
    productPrice,
    productDescription,
    productColor,
    productQty,
    productSize,
    productImage,
  } = req.body;

  Product.updateOne(
    { productId: productId },
    {
      $set: {
        productName: productName,
        productPrice: productPrice,
        productDescription: productDescription,
        productColor: productColor,
        productQty: productQty,
        productSize: productSize,
        productImage: productImage,
      },
    }
  )
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

// delete product
const deleteProduct = (req, res, next) => {
    const productId = req.body.productId;
    Product.deleteOne({productId:productId})
    .then((response) => {
        res.json({ response });
      })
      .catch((error) => {
        res.json({ error });
      });
}

exports.getProducts = getProducts;
exports.addProduct = addProduct;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;