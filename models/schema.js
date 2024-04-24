const mongoose = require('mongoose') 

const labSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: number,
        required: true
    }
})

module.exports = schema;