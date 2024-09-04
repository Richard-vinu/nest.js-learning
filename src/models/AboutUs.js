const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  subTitle1: {
    type: String,
  },
  subTitle2: {
    type: String,
  },
  youTubeCount: {
    type: String,
  },
  instagramCount: {
    type: String,
  },
  facebookCount: {
    type: String,
  },
  twitterCount: {
    type: String,
  },
  image: {
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

module.exports = mongoose.model('AboutUs', AboutSchema);
