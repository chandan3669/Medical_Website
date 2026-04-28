import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24 pb-24 px-6 lg:px-12 max-w-5xl mx-auto animate-fade-in-up">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-textPrimary mb-6">Contact & Appointments</h1>
        <p className="text-lg text-textSecondary leading-relaxed">
          For appointments, consultations, or medical inquiries, feel free to get in touch. Patients are encouraged to book appointments in advance to ensure proper scheduling and attention.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <a href="https://maps.app.goo.gl/XQSUs8AYmWVLsKjCA" target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-3xl shadow-md border-0 hover:shadow-xl transition-all duration-300 flex items-start gap-5 group cursor-pointer">
          <div className="w-14 h-14 rounded-2xl bg-lightBlue text-surfaceRaised flex items-center justify-center shrink-0 group-hover:bg-surfaceRaised group-hover:text-white transition-colors">
            <MapPin size={28} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-textPrimary mb-2">Chamber / Hospital</h3>
            <p className="text-textSecondary leading-relaxed group-hover:text-textPrimary transition-colors">
              Nagorik Specialised Hospital Limited<br/>
              Aftabnagar, Dhaka
            </p>
          </div>
        </a>

        <div className="bg-white p-8 rounded-3xl shadow-md border-0 hover:shadow-xl transition-all duration-300 flex items-start gap-5 group">
          <div className="w-14 h-14 rounded-2xl bg-lightBlue text-surfaceRaised flex items-center justify-center shrink-0 group-hover:bg-surfaceRaised group-hover:text-white transition-colors">
            <Clock size={28} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-textPrimary mb-2">Availability</h3>
            <p className="text-textSecondary leading-relaxed">
              Mon - Fri: 8:00 AM - 8:00 PM<br/>
              Sat - Sun: 10:00 AM - 4:00 PM
            </p>
          </div>
        </div>

        <a href="tel:01521255495" className="bg-white p-8 rounded-3xl shadow-md border-0 hover:shadow-xl transition-all duration-300 flex items-start gap-5 group cursor-pointer">
          <div className="w-14 h-14 rounded-2xl bg-lightBlue text-surfaceRaised flex items-center justify-center shrink-0 group-hover:bg-surfaceRaised group-hover:text-white transition-colors">
            <Phone size={28} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-textPrimary mb-2">Phone</h3>
            <p className="text-textSecondary leading-relaxed font-medium group-hover:text-textPrimary transition-colors">
              01521255495
            </p>
          </div>
        </a>

        <a href="mailto:drbarman0708@gmail.com" className="bg-white p-8 rounded-3xl shadow-md border-0 hover:shadow-xl transition-all duration-300 flex items-start gap-5 group cursor-pointer">
          <div className="w-14 h-14 rounded-2xl bg-lightBlue text-surfaceRaised flex items-center justify-center shrink-0 group-hover:bg-surfaceRaised group-hover:text-white transition-colors">
            <Mail size={28} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-textPrimary mb-2">Email</h3>
            <p className="text-textSecondary leading-relaxed font-medium group-hover:text-textPrimary transition-colors">
              drbarman0708@gmail.com
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
