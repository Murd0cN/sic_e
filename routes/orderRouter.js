var express = require('express');
var router = express.Router();
var Order = require('../models/order');

/* GET materials listing. */
router.get('/', function (req, res, next) {
  Order.find(function (err, orders) {
    if (err)
      res.send(err);

    res.json(orders);
  });
});

// create a productItem (accessed at POST http://localhost:8080/api/materials)
router.post('/',function (req, res) {

  var order = new Order();      // create a new instance of the Material model
  order.name = req.body.name;  // set the materials name (comes from the request)
  order.orderItems = req.body.orderItems;

  // save the material and check for errors
  order.save(function (err) {
    if (err)
      res.send(err);

    res.json({ message: 'Order created!' });
  });

});


// on routes that end in /materials/:material_id
// ----------------------------------------------------
router.route('/:order_id')

  // get the productItem with that id (accessed at GET http://localhost:8080/materials/:productItem_id)
  .get(function (req, res) {
    Order.findById(req.params.order_id, function (err, order) {
      if (err)
        res.send(err);
      res.json(order);
    });
  });

router.route('/:order_id')

  // update the productItem with this id (accessed at PUT http://localhost:8080/api/materials/:productItem_id)
  .put(function (req, res) {

    // use our bear model to find the bear we want
    Order.findById(req.params.order_id, function (err, order) {

      if (err)
        res.send(err);

      order.name = req.body.name;  // update the materials info

      // save the material
      order.save(function (err) {
        if (err)
          res.send(err);

        res.json({ message: 'Order updated!' });
      });

    });
  });

// on routes that end in /productItems/:productItem_id
// ----------------------------------------------------
router.route('/:order_id')

  // delete the productItem with this id (accessed at DELETE http://localhost:8080/productItems/:productItem_id)
  .delete(function (req, res) {
    Order.remove({
      _id: req.params.order_id
    }, function (err, order) {
      if (err)
        res.send(err);

      res.json({ message: 'Successfully deleted' });
    });
  });



module.exports = router;
