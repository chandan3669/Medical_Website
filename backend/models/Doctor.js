const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  specialization: [String],
  experience: [
    {
      title: String,
      organization: String,
      duration: String
    }
  ],
  education: [
    {
      degree: String,
      institute: String,
      passingYear: Number
    }
  ],
  contactInfo: {
    mobileNumbers: [String],
    email: String,
    address: String
  }
});

module.exports = mongoose.model('Doctor', DoctorSchema);
