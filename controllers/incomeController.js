const { db } = require('../config/firebase');

const getAllIncome = async (req, res) => {
  try {
    const incomeSnapshot = await db.collection('income').get();
    const income = [];
    incomeSnapshot.forEach(doc => {
      income.push({ id: doc.id, ...doc.data() });
    });
    res.status(200).json({ success: true, data: income });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const createIncome = async (req, res) => {
  try {
    const { userId, amount, source, description } = req.body;
    const income = await db.collection('income').add({
      userId,
      amount,
      source,
      description,
      date: new Date().toISOString()
    });
    res.status(201).json({
      success: true,
      data: { id: income.id, userId, amount, source, description }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const updateIncome = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await db.collection('income').doc(id).update({
      ...data,
      updatedAt: new Date().toISOString()
    });
    res.status(200).json({
      success: true,
      message: 'Income updated successfully'
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const deleteIncome = async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection('income').doc(id).delete();
    res.status(200).json({
      success: true,
      message: 'Income deleted successfully'
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  getAllIncome,
  createIncome,
  updateIncome,
  deleteIncome
};