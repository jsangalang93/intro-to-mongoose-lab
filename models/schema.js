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
const Schema = mongoose.models ('Schema', schema.js)

module.exports = Schema;