import { Schema, model } from "mongoose";

const schema = new Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telephone: {
        type: Number
    },
    text: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    }
})

module.exports = model('commentaries', schema);