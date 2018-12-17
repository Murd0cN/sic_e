var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const autoIncrement = require('mongoose-plugin-autoinc');
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
//const AutoIncrement = require('mongoose-sequence')(mongoose);

var MaterialSchema   = new Schema({
    name: String
});

MaterialSchema.plugin(autoIncrement.autoIncrement,{
    model:'Material',
    startAt: 1
});

module.exports = mongoose.model('Material', MaterialSchema);
