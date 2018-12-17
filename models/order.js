var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const autoIncrement = require('mongoose-plugin-autoinc');
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
//const AutoIncrement = require('mongoose-sequence')(mongoose);


var OrderSchema   = new Schema({
    name: String,
    orderItems: [{ type: Schema.Types.Object, ref: 'ProductItem' }]
});

OrderSchema.plugin(autoIncrement.autoIncrement,{
    model:'Order',
    startAt: 1
});

module.exports = mongoose.model('Order', OrderSchema);