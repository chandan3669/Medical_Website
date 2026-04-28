import React from 'react';
import { Stethoscope, ClipboardList, Bed, Heart, Activity } from 'lucide-react';

const Services = () => {
  const servicesList = [
    { title: "General Medical Consultation", icon: Stethoscope, desc: "Comprehensive care focusing on prevention, diagnosis, and personalized treatment plans." },
    { title: "Diagnosis and Treatment Planning", icon: ClipboardList, desc: "Expert, accurate diagnosis and advanced treatment options tailored to your needs." },
    { title: "Indoor Patient Management", icon: Bed, desc: "Dedicated and comprehensive care for patients requiring hospital admission." },
    { title: "Preventive Healthcare Guidance", icon: Heart, desc: "Routine screenings and evaluations to keep your health on track and prevent illness." },
    { title: "Follow-up and Recovery Monitoring", icon: Activity, desc: "Continuous monitoring to ensure a smooth and healthy recovery process." },
  ];

  return (
    <div className="pt-24 pb-24 px-6 lg:px-12 max-w-7xl mx-auto animate-fade-in-up">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-textPrimary mb-6">Comprehensive Medical Services</h1>
        <p className="text-lg text-textSecondary leading-relaxed">
          Dr. Mukta Barman offers a range of medical services aimed at ensuring comprehensive patient care. Each service is delivered with a focus on accuracy, efficiency, and patient comfort.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-3xl shadow-md border-0 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-16 h-16 bg-lightBlue text-surfaceRaised rounded-2xl flex items-center justify-center mb-6 group-hover:bg-surfaceRaised group-hover:text-white transition-colors duration-300">
              <service.icon size={32} />
            </div>
            <h3 className="text-xl font-bold text-textPrimary mb-3">{service.title}</h3>
            <p className="text-textSecondary text-sm leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
