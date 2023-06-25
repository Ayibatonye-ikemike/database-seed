const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    state: {
        type: String,
        required: true
    },
    capital: {
        type: String,
        required: false
    },
    region: {
        type: String,
        required: false
    },
    slogan: {
        type: String,
        required: false
    },
    
    lgas: {
        type: Array,
        required: true
    },
    landmass: {
        type: String,
        required: true
    },
    population: {
        type: String,
        required: true
    },
    dialect: {
        type: String,
        required: true
    },
    map: {
        type: String,
        required: false
    },
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        required: true
    },
    created_by: {
        type: String,
        required: true
    },
    past_governors: {
        type: Array,
        required: true
    },
    borders: {
        type: Array,
        required: true
    },
    known_for: {
        type: Array,
        required: true
    }
});

const locationModel = mongoose.model('Location', locationSchema);

module.exports = locationModel