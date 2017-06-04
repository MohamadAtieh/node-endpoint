'use strict';
export {}

const mongoose = require('mongoose');

// Define our token schema
const RefreshTokenSchema   = new mongoose.Schema({
  value: { type: String, required: true },
  userId: { type: String, required: true },
  clientId: { type: String, required: true },
  scope: {type: String, required: true }
});

// Export the Mongoose model
module.exports = mongoose.model('RefreshToken', RefreshTokenSchema);
