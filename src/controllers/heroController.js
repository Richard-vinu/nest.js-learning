const Hero = require('../models/Hero');

// Get all heroes
exports.getAllHero = async (req, res) => {
  try {
    const heroes = await Hero.find();
    res.status(200).json({
      status: 'success',
      message: 'Hero fetched successfully',
      data: heroes,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch heroes',
      error: error.message,
    });
  }
};

// Get hero by ID
exports.getHeroById = async (req, res) => {
  try {
    const hero = await Hero.findById(req.params.id);
    if (!hero) {
      return res.status(404).json({
        status: 'fail',
        message: 'Hero not found',
      });
    }
    res.status(200).json({
      status: 'success',
      message: 'Hero fetched successfully',
      data: hero,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch hero',
      error: error.message,
    });
  }
};

// Update hero by ID
exports.updateHero = async (req, res) => {
  try {
    const updatedHero = await Hero.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedHero) {
      return res.status(404).json({
        status: 'fail',
        message: 'Hero not found',
      });
    }
    res.status(200).json({
      status: 'success',
      message: 'Hero updated successfully',
      data: updatedHero,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Failed to update hero',
      error: error.message,
    });
  }
};
