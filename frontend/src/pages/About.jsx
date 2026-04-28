import React from 'react';

const About = () => {
  return (
    <div className="pt-24 pb-16 px-6 lg:px-12 max-w-4xl mx-auto animate-fade-in-up">
      <h1 className="text-4xl md:text-5xl font-bold text-textPrimary mb-10 text-center">About Dr. Mukta Barman</h1>
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-md border-0 text-lg text-textSecondary space-y-6 leading-relaxed relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-lightBlue rounded-bl-full -z-10 opacity-50"></div>
        
        <p>
          <strong className="text-textPrimary font-semibold">Dr. Mukta Barman</strong> is a dedicated medical professional currently serving as an <strong className="text-textPrimary">Indoor Medical Officer at Nagorik Specialised Hospital Limited, Aftabnagar, Dhaka</strong>. With hands-on clinical experience and a patient-centered approach, she is committed to delivering accurate diagnosis, effective treatment, and compassionate care.
        </p>
        <p>
          Her practice focuses on understanding each patient’s condition thoroughly and providing personalized medical solutions. She believes that trust, communication, and ethical responsibility are the foundation of quality healthcare.
        </p>
        <p>
          Dr. Mukta continuously works to enhance her medical knowledge and skills to ensure patients receive up-to-date and reliable treatment.
        </p>
      </div>
    </div>
  );
};

export default About;
