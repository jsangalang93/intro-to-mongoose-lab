const mongoose = require('mongoose') 

const labSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})
const Schema = mongoose.model('Schema', labSchema)

module.exports = Schema;