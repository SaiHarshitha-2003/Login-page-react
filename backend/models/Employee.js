// backend/models/Employee.js
const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobileNo: { type: String, required: true },
  designation: { type: String, required: true },
  gender: { type: String, enum: ['M', 'F'], required: true },
  course: { type: [String], enum: ['MCA', 'BCA', 'BSC'], required: true },
  image: { type: String }, // Store image URL or path
}, { timestamps: true });

module.exports = mongoose.model('Employee', EmployeeSchema);
