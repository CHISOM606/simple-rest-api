const { db } = require('../config/firebase');

const getAllUsers = async (req, res) => {
  try {
    const usersSnapshot = await db.collection('users').get();
    const users = [];
    usersSnapshot.forEach(doc => {
      users.push({ id: doc.id, ...doc.data() });
    });
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const userData = {
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      address: {
        street: req.body.address.street,
        suite: req.body.address.suite,
        city: req.body.address.city,
        zipcode: req.body.address.zipcode
      },
      createdAt: new Date().toISOString()
    };

    const user = await db.collection('users').add(userData);
    res.status(201).json({
      success: true,
      data: { id: user.id, ...userData }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updateData = {};

    // Handle nested address updates
    if (data.name) updateData.name = data.name;
    if (data.username) updateData.username = data.username;
    if (data.email) updateData.email = data.email;
    if (data.address) {
      updateData.address = {
        street: data.address.street || data.address.street,
        suite: data.address.suite || data.address.suite,
        city: data.address.city || data.address.city,
        zipcode: data.address.zipcode || data.address.zipcode
      };
    }

    updateData.updatedAt = new Date().toISOString();

    await db.collection('users').doc(id).update(updateData);
    res.status(200).json({
      success: true,
      message: 'User updated successfully'
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection('users').doc(id).delete();
    res.status(200).json({
      success: true,
      message: 'User deleted successfully'
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser
};