import { useState } from 'react';

const Appointment = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    phone: '',
    date: '',
    service: 'General Consultation',
    notes: ''
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ patientName: '', email: '', phone: '', date: '', service: 'General Consultation', notes: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xs shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-surfaceStrong px-6 py-8 text-center">
          <h2 className="text-3xl font-bold text-white">Book an Appointment</h2>
          <p className="mt-2 text-white/90 text-lg">Schedule your visit with Dr. Mukta Barman</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {status === 'success' && (
            <div className="bg-green-50 text-green-800 p-4 rounded-md border border-green-200" role="alert">
              Your appointment request has been sent successfully. We will contact you soon to confirm.
            </div>
          )}
          
          {status === 'error' && (
            <div className="bg-red-50 text-red-800 p-4 rounded-md border border-red-200" role="alert">
              There was an error submitting your request. Please try again.
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="patientName" className="block text-sm font-medium text-textPrimary mb-2">Full Name</label>
              <input
                type="text"
                id="patientName"
                name="patientName"
                required
                value={formData.patientName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-surfaceRaised focus:border-transparent transition-shadow"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-textPrimary mb-2">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-surfaceRaised focus:border-transparent transition-shadow"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-textPrimary mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-surfaceRaised focus:border-transparent transition-shadow"
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-textPrimary mb-2">Preferred Date</label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-surfaceRaised focus:border-transparent transition-shadow"
              />
            </div>
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-textPrimary mb-2">Service Required</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-surfaceRaised focus:border-transparent transition-shadow bg-white"
            >
              <option value="General Consultation">General Consultation</option>
              <option value="Minor Surgery">Minor Surgery</option>
              <option value="Diagnostics">Diagnostics</option>
              <option value="Emergency">Emergency</option>
            </select>
          </div>

          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-textPrimary mb-2">Additional Notes</label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              value={formData.notes}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-surfaceRaised focus:border-transparent transition-shadow"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full btn-primary flex justify-center items-center py-4 text-lg"
            >
              {status === 'loading' ? 'Submitting...' : 'Confirm Appointment'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
