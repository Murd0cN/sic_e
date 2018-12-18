const mongoose = require('mongoose');
const schema = mongoose.Schema;


let OrderSchema = new mongoose.Schema ({
    item : { type: mongoose.Schema.Types.ObjectId, ref: 'Item'}
});

module.exports = mongoose.model('Order', OrderSchema);