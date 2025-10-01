const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// POST /api/contact - Create a new contact message
router.post('/', contactController.createContact);

// GET /api/contact - Get all contact messages (for admin)
router.get('/', contactController.getAllContacts);

// GET /api/contact/:id - Get a specific contact message
router.get('/:id', contactController.getContactById);

// PUT /api/contact/:id/read - Mark contact as read
router.put('/:id/read', contactController.markAsRead);

// DELETE /api/contact/:id - Delete a contact message
router.delete('/:id', contactController.deleteContact);

module.exports = router;