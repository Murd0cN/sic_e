var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const autoIncrement = require('mongoose-plugin-autoinc');
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
//const AutoIncrement = require('mongoose-sequence')(mongoose);

var ProductItemSchema   = new Schema({
    name: String
});

ProductItemSchema.plugin(autoIncrement.autoIncrement,{
    model:'ProductItem',
    startAt: 1
});

module.exports = mongoose.model('ProductItem', ProductItemSchema);
