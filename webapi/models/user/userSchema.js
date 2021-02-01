const mongodb = require('mongoose');

const userSchema = mongodb.Schema({

    // _id:            mongodb.Schema.Types.ObjectId,
    firstName:      { type: String, required: true },
    lastName:       { type: String, required: true },
    email:          { type: String, required: true, unique: true },
    passwordHash:   { type: String, required: true },
    role:           { type: String },

    created:        { type: Date, default: Date.now },
    modified:       { type: Date, default: Date.now }

})

module.exports = mongodb.model('user', userSchema);