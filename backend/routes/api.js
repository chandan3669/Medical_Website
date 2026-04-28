const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');
const Appointment = require('../models/Appointment');

// --- DOCTOR PROFILE ROUTES ---
router.get('/doctor', async (req, res) => {
  try {
    const doctor = await Doctor.findOne();
    if (!doctor) {
      // Create default if none exists for testing
      const defaultDoctor = new Doctor({
        fullName: "Dr. Mukta Barman",
        specialization: ["General Medicine", "Diagnostics", "Minor Surgeries"],
        experience: [{ title: "Medical Officer", organization: "Dhaka Hospital", duration: "1.5 Years" }]
      });
      await defaultDoctor.save();
      return res.json(defaultDoctor);
    }
    res.json(doctor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// --- APPOINTMENT ROUTES ---
router.post('/appointments', async (req, res) => {
  try {
    const newAppt = new Appointment(req.body);
    const savedAppt = await newAppt.save();
    res.status(201).json(savedAppt);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/appointments', async (req, res) => {
  try {
    const appts = await Appointment.find().sort({ date: 1 });
    res.json(appts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
