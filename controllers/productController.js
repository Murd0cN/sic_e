const Product = require('../models/product');

exports.test = function(req, res) {
    res.send('Greetings from the Test Controller');
};

exports.product_create = function (req, res) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

exports.product_update = function(req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set : req.body}, function(err, product) {
        if (err) return next(err);
        res.send(product);
    }) 
}; 