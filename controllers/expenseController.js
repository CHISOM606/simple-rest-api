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
    const expenseData = {
      userId: req.body.userId,
      Savings: {
        RRSP: req.body.Savings?.RRSP || 0,
        "Investment savings": req.body.Savings?.["Investment savings"] || 0,
        "Long-term savings": req.body.Savings?.["Long-term savings"] || 0,
        "Bonds": req.body.Savings?.Bonds || 0,
        "others": req.body.Savings?.others || 0
      },
      "Payment Obligations": {
        "Credit card": req.body["Payment Obligations"]?.["Credit card"] || 0,
        "loan": req.body["Payment Obligations"]?.loan || 0,
        "vehicle lease": req.body["Payment Obligations"]?.["vehicle lease"] || 0,
        "Line of credit": req.body["Payment Obligations"]?.["Line of credit"] || 0
      },
      Insurance: {
        "Life Insurance": req.body.Insurance?.["Life Insurance"] || 0,
        "Health insurance": req.body.Insurance?.["Health insurance"] || 0,
        "others": req.body.Insurance?.others || 0
      },
      Housing: {
        "Rent": req.body.Housing?.Rent || 0,
        "Rent insurance": req.body.Housing?.["Rent insurance"] || 0,
        "Storage and parking": req.body.Housing?.["Storage and parking"] || 0,
        "Utilities": req.body.Housing?.Utilities || 0,
        "maintenance": req.body.Housing?.maintenance || 0
      },
      Utilities: {
        "Phone": req.body.Utilities?.Phone || 0,
        "Internet": req.body.Utilities?.Internet || 0,
        "water": req.body.Utilities?.water || 0,
        "Electricity": req.body.Utilities?.Electricity || 0,
        "Cable": req.body.Utilities?.Cable || 0,
        "others": req.body.Utilities?.others || 0
      },
      Personal: {
        "Transportation": req.body.Personal?.Transportation || 0,
        "Clothing": req.body.Personal?.Clothing || 0,
        "gifts-family": req.body.Personal?.["gifts-family"] || 0,
        "Personal grooming": req.body.Personal?.["Personal grooming"] || 0,
        "dining out": req.body.Personal?.["dining out"] || 0,
        "Hobbies": req.body.Personal?.Hobbies || 0,
        "others": req.body.Personal?.others || 0
      },
      createdAt: new Date().toISOString()
    };

    const expense = await db.collection('expenses').add(expenseData);
    res.status(201).json({
      success: true,
      data: { id: expense.id, ...expenseData }
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