const mongoose = require("mongoose");

const CategorySchem = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model("Category", CategorySchem);