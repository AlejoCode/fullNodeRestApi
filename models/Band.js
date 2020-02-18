const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BandSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please filled the name, We need it tho o:']
    },
    year: {
        type: Number,
        required: [true, 'Iow what happened with the Year ? ']
    },
    status: {
        type: Boolean,
        default: false
    }
});

const Band = mongoose.model('band', BandSchema);

module.exports = Band;