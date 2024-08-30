
const mongoose = require('mongoose');

const conn = mongoose.connect(process.env.URL)
        .then(db => {
            console.log("Database Connected");
            return db;
        }).catch(err => {
            console.log("Connection Error");
        })

module.exports = conn;