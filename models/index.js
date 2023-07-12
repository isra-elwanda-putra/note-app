const dbConfig = require("../config/database");
const mongoose = require('mongoose');

module.exports = {
    mongoose,
    url: dbConfig.url,
    note: require('./note.model')(mongoose)
}