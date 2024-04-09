const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
    id: {
        type: String,
        required: false,
    },
    x: {
        type: Number,
        required: true
    },
    y: {
        type: Number,
        required: true
    },
    z: {
        type: Number,
        required: true
    }
});

const routeSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        trim: true
    },
    difficulty: {
        type: Number,
        required: true
    },
    availability: {
        type: Boolean,
        required: true
    },
    length: {
        type: Number,
        required: true
    },
    locs: [pointSchema],
    description: {
        type: String,
        required: true,
        trim: true
    }
});

const Route = mongoose.model('Route', routeSchema);

module.exports = Route;