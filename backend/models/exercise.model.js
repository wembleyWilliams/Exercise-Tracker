const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    username : {type: String, required: true },
    description : {tpye: String, require: true },
    duration : { type: number, required: true },
    date: { type: date, required: true },
    timestamps: true,
})

const Exercise = mongoose.model('Exercise', userSchema)

module.exports = Exercise;