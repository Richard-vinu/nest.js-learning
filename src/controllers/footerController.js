const Footer = require('../models/Footer');

// Get footer data
exports.getFooter = async (req, res) => {
  try {
    const footer = await Footer.findOne();
    if (!footer) {
      return res.status(404).json({
        status: 'fail',
        message: 'Footer data not found',
      });
    }
    res.status(200).json({
      status: 'success',
      message: 'Footer data fetched successfully',
      data: footer,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch footer data',
      error: error.message,
    });
  }
};

// Update footer data
exports.updateFooter = async (req, res) => {
  try {
    const updatedFooter = await Footer.findOneAndUpdate({}, req.body, {
      new: true,
      runValidators: true,
      upsert: true, // Creates the document if it doesn't exist
    });

    res.status(200).json({
      status: 'success',
      message: 'Footer data updated successfully',
      data: updatedFooter,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Failed to update footer data',
      error: error.message,
    });
  }
};
