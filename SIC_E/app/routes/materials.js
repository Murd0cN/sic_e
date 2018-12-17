// on routes that end in /materials
// ----------------------------------------------------
var express = require('express');
var router = express.Router();
var Material = require('../models/material');

router.route('/materials')

    // create a material (accessed at POST http://localhost:8080/api/materials)
    .post(function (req, res) {

        var material = new Material();      // create a new instance of the Material model
        material.name = req.body.name;  // set the materials name (comes from the request)

        // save the material and check for errors
        material.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Material created!' });
        });

    });

// on routes that end in /materials/:material_id
// ----------------------------------------------------
router.route('/materials/:material_id')

    // get the material with that id (accessed at GET http://localhost:8080/api/materials/:material_id)
    .get(function (req, res) {
        Material.findById(req.params.material_id, function (err, material) {
            if (err)
                res.send(err);
            res.json(material);
        });
    });

router.route('/materials/:material_id')

    // update the material with this id (accessed at PUT http://localhost:8080/api/materials/:material_id)
    .put(function (req, res) {

        // use our bear model to find the bear we want
        Material.findById(req.params.material_id, function (err, material) {

            if (err)
                res.send(err);

            material.name = req.body.name;  // update the materials info

            // save the material
            material.save(function (err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Material updated!' });
            });

        });
    });

// on routes that end in /bears/:bear_id
// ----------------------------------------------------
router.route('/bears/:bear_id')

    // delete the material with this id (accessed at DELETE http://localhost:8080/api/materials/:material_id)
    .delete(function (req, res) {
        Material.remove({
            _id: req.params.material_id
        }, function (err, material) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });


module.exports = router;