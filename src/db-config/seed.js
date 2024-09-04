const mongoose = require('mongoose');
const connectDB = require('./db'); 
const Hero = require('../models/Hero'); 
const AboutUs = require('../models/AboutUs');
const Footer = require('../models/Footer');


// Dummy data for Hero schema
const heroData = [
  {
    title: 'Hero Title 1',
    subTitle: 'Hero Subtitle 1',
    image: 'https://example.com/hero1.jpg',
  }
];

// Dummy data for AboutUs schema
const aboutData = [
  {
    title: 'AboutUs Us',
    subTitle1: 'Our Mission',
    subTitle2: 'Our Vision',
    youTubeCount: '1000',
    instagramCount: '2000',
    facebookCount: '3000',
    twitterCount: '4000',
    image: 'https://example.com/about.jpg',
  },
];

const footerData = {
    contactInfo: {
      address: '123 Main Street, City, Country',
      phone: '+1234567890',
      email: 'info@example.com',
    },
    socialLinks: {
      facebook: 'https://facebook.com/yourcompany',
      twitter: 'https://twitter.com/yourcompany',
      instagram: 'https://instagram.com/yourcompany',
      linkedIn: 'https://linkedin.com/company/yourcompany',
      youtube: 'https://youtube.com/yourcompany',
    },
    quickLinks: [
      { label: 'Home', url: '/' },
      { label: 'About Us', url: '/about' },
      { label: 'Services', url: '/services' },
      { label: 'Contact', url: '/contact' },
    ],
    copyrightText: '© 2024 Your Company Name. All rights reserved.',
  };

// Function to seed the database
const seedDatabase = async () => {
  try {
    await connectDB();

    // Clear existing data
    await Hero.deleteMany({});
    await AboutUs.deleteMany({});
    await Footer.deleteMany({});
    console.log('Existing data cleared');

    // Insert dummy data
    await Hero.insertMany(heroData);
    await AboutUs.insertMany(aboutData);
    await Footer.insertMany(footerData);
    console.log('Dummy data inserted successfully');
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
