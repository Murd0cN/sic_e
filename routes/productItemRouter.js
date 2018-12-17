var express = require('express');
var router = express.Router();
var ProductItem = require('../models/productItem');

/* GET materials listing. */
router.get('/', function (req, res, next) {
  ProductItem.find(function (err, productItems) {
    if (err)
      res.send(err);

    res.json(productItems);
  });
});

// create a productItem (accessed at POST http://localhost:8080/api/materials)
router.post('/',function (req, res) {

  var productItem = new ProductItem();      // create a new instance of the Material model
  productItem.name = req.body.name;  // set the materials name (comes from the request)

  // save the material and check for errors
  productItem.save(function (err) {
    if (err)
      res.send(err);

    res.json({ message: 'ProductItem created!' });
  });

});


// on routes that end in /materials/:material_id
// ----------------------------------------------------
router.route('/:productItem_id')

  // get the productItem with that id (accessed at GET http://localhost:8080/materials/:productItem_id)
  .get(function (req, res) {
    ProductItem.findById(req.params.productItem_id, function (err, productItem) {
      if (err)
        res.send(err);
      res.json(productItem);
    });
  });

router.route('/:productItem_id')

  // update the productItem with this id (accessed at PUT http://localhost:8080/api/materials/:productItem_id)
  .put(function (req, res) {

    // use our bear model to find the bear we want
    ProductItem.findById(req.params.productItem_id, function (err, productItem) {

      if (err)
        res.send(err);

      productItem.name = req.body.name;  // update the materials info

      // save the material
      productItem.save(function (err) {
        if (err)
          res.send(err);

        res.json({ message: 'ProductItem updated!' });
      });

    });
  });

// on routes that end in /productItems/:productItem_id
// ----------------------------------------------------
router.route('/:productItem_id')

  // delete the productItem with this id (accessed at DELETE http://localhost:8080/productItems/:productItem_id)
  .delete(function (req, res) {
    ProductItem.remove({
      _id: req.params.productItem_id
    }, function (err, productItem) {
      if (err)
        res.send(err);

      res.json({ message: 'Successfully deleted' });
    });
  });



module.exports = router;
