const mongoose = require('mongoose');

const FooterSchema = new mongoose.Schema({
  contactInfo: {
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  socialLinks: {
    facebook: {
      type: String,
    },
    twitter: {
      type: String,
    },
    instagram: {
      type: String,
    },
    linkedIn: {
      type: String,
    },
    youtube: {
      type: String,
    },
  },
  quickLinks: [
    {
      label: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  ],
  copyrightText: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Footer', FooterSchema);
