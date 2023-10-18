const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        // Add a regular expression pattern for email validation
        // match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    },
    mobile: {
        type: String, 
        required: true,
        // Add a regular expression pattern for mobile number validation (example: 123-456-7890)
        // match: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/
    }
})

module.exports = mongoose.model('Contact', contactSchema);