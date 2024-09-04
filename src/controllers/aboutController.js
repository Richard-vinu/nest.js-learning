const AboutUs = require('../models/AboutUs');

// Get all AboutUs entries
exports.getAllAboutUs = async (req, res) => {
  try {
    const aboutUs = await AboutUs.find();
    res.status(200).json({
      status: 'success',
      message: 'AboutUs entries fetched successfully',
      data: aboutUs,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch AboutUs entries',
      error: error.message,
    });
  }
};

// Get AboutUs by ID
exports.getAboutById = async (req, res) => {
  try {
    const aboutUs = await AboutUs.findById(req.params.id);
    if (!aboutUs) {
      return res.status(404).json({
        status: 'fail',
        message: 'AboutUs entry not found',
      });
    }
    res.status(200).json({
      status: 'success',
      message: 'AboutUs entry fetched successfully',
      data: aboutUs,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch AboutUs entry',
      error: error.message,
    });
  }
};

// Update AboutUs by ID
exports.updateAbout = async (req, res) => {
  try {
    const updatedAbout = await AboutUs.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedAbout) {
      return res.status(404).json({
        status: 'fail',
        message: 'AboutUs entry not found',
      });
    }
    res.status(200).json({
      status: 'success',
      message: 'AboutUs entry updated successfully',
      data: updatedAbout,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Failed to update AboutUs entry',
      error: error.message,
    });
  }
};
