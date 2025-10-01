const Contact = require('../models/Contact');

// Create a new contact message
exports.createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'Please provide all required fields: name, email, and message'
      });
    }

    // Create new contact
    const contact = new Contact({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim()
    });

    // Save to database
    await contact.save();

    res.status(201).json({
      message: 'Contact message sent successfully!',
      contact: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        createdAt: contact.createdAt
      }
    });

  } catch (error) {
    console.error('Create contact error:', error);

    // Handle validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        error: 'Validation failed',
        details: validationErrors
      });
    }

    res.status(500).json({
      error: 'Failed to send message. Please try again later.'
    });
  }
};

// Get all contact messages (for admin purposes)
exports.getAllContacts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .select('-__v');

    const total = await Contact.countDocuments();

    res.json({
      contacts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });

  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({
      error: 'Failed to retrieve contacts'
    });
  }
};

// Get a specific contact message
exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id).select('-__v');

    if (!contact) {
      return res.status(404).json({
        error: 'Contact message not found'
      });
    }

    res.json(contact);

  } catch (error) {
    console.error('Get contact by ID error:', error);
    
    if (error.name === 'CastError') {
      return res.status(400).json({
        error: 'Invalid contact ID format'
      });
    }

    res.status(500).json({
      error: 'Failed to retrieve contact'
    });
  }
};

// Mark contact as read
exports.markAsRead = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true }
    ).select('-__v');

    if (!contact) {
      return res.status(404).json({
        error: 'Contact message not found'
      });
    }

    res.json({
      message: 'Contact marked as read',
      contact
    });

  } catch (error) {
    console.error('Mark as read error:', error);
    
    if (error.name === 'CastError') {
      return res.status(400).json({
        error: 'Invalid contact ID format'
      });
    }

    res.status(500).json({
      error: 'Failed to update contact'
    });
  }
};

// Delete a contact message
exports.deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        error: 'Contact message not found'
      });
    }

    res.json({
      message: 'Contact message deleted successfully'
    });

  } catch (error) {
    console.error('Delete contact error:', error);
    
    if (error.name === 'CastError') {
      return res.status(400).json({
        error: 'Invalid contact ID format'
      });
    }

    res.status(500).json({
      error: 'Failed to delete contact'
    });
  }
};