const { db } = require('../config/firebase');

const getAllExpenses = async (req, res) => {
  try {
    const expensesSnapshot = await db.collection('expenses').get();
    const expenses = [];
    expensesSnapshot.forEach(doc => {
      expenses.push({ id: doc.id, ...doc.data() });
    });
    res.status(200).json({ success: true, data: expenses });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const createExpense = async (req, res) => {
  try {
    const { userId, amount, category, description } = req.body;
    const expense = await db.collection('expenses').add({
      userId,
      amount,
      category,
      description,
      date: new Date().toISOString()
    });
    res.status(201).json({
      success: true,
      data: { id: expense.id, userId, amount, category, description }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await db.collection('expenses').doc(id).update({
      ...data,
      updatedAt: new Date().toISOString()
    });
    res.status(200).json({
      success: true,
      message: 'Expense updated successfully'
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection('expenses').doc(id).delete();
    res.status(200).json({
      success: true,
      message: 'Expense deleted successfully'
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  getAllExpenses,
  createExpense,
  updateExpense,
  deleteExpense
};