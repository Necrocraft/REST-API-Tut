const mongoose = require("mongoose");

const schemaPosts = mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    timeStamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Posts', schemaPosts);