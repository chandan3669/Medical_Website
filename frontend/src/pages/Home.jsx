import { Link } from 'react-router-dom';
import { Phone, Clock, MapPin, Activity, Heart, Shield, ArrowRight, Star, Calendar } from 'lucide-react';

const Home = () => {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative bg-lightBlue pt-20 pb-32 lg:pt-32 lg:pb-48 px-6 lg:px-12 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent rounded-bl-[100px] -z-0 opacity-50 hidden lg:block"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-surfaceRaised/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-surfaceStrong/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-surfaceRaised font-medium text-sm mb-6 shadow-sm">
              <Activity size={18} />
              <span>Committed to precise diagnosis, compassionate care, and patient trust.</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-textPrimary leading-tight mb-6">
              Compassionate Care. <br/>
              <span className="text-surfaceRaised">Advanced Solutions.</span>
            </h1>
            <p className="text-lg text-textSecondary mb-8 max-w-xl mx-auto lg:mx-0">
              Dr. Mukta Barman provides comprehensive medical care, specializing in <strong className="text-textPrimary font-semibold">Medicine</strong> and <strong className="text-textPrimary font-semibold">Oncology</strong>, ensuring your health is in the best hands.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link to="/book" className="btn-primary w-full sm:w-auto flex justify-center items-center gap-2 group">
                Book Appointment
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 relative animate-fade-in-up mt-12 lg:mt-0" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10 w-full max-w-lg mx-auto bg-white/50">
              <img 
                src="/hero.png" 
                alt="Dr. Mukta Barman" 
                className="w-full h-auto min-h-[400px] max-h-[600px] object-cover object-top"
              />
            </div>
            
            {/* Floating Card 1 */}
            <div className="absolute top-10 -left-6 lg:-left-12 bg-white p-4 rounded-xl shadow-float z-20 flex items-center gap-4 animate-float">
              <div className="w-12 h-12 bg-lightBlue rounded-full flex items-center justify-center text-surfaceRaised">
                <Star size={24} fill="currentColor" />
              </div>
              <div>
                <p className="text-2xl font-bold text-textPrimary">4.9/5</p>
                <p className="text-sm text-textSecondary">Patient Rating</p>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute bottom-10 -right-6 lg:-right-12 bg-white p-4 rounded-xl shadow-float z-20 flex items-center gap-4 animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="w-12 h-12 bg-lightBlue rounded-full flex items-center justify-center text-surfaceRaised">
                <Shield size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-textPrimary">3+ Years</p>
                <p className="text-sm text-textSecondary">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INFO CARDS SECTION */}
      <section className="relative z-20 -mt-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surfaceRaised text-white p-8 rounded-2xl shadow-soft flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
            <div>
              <Clock size={36} className="mb-4 opacity-80" />
              <h3 className="text-xl font-bold mb-4">Working Hours</h3>
              <ul className="space-y-3 opacity-90 text-sm">
                <li className="flex justify-between border-b border-white/20 pb-2"><span>Monday - Friday</span> <span>08:00 - 20:00</span></li>
                <li className="flex justify-between border-b border-white/20 pb-2"><span>Saturday</span> <span>09:00 - 18:00</span></li>
                <li className="flex justify-between pb-2"><span>Sunday</span> <span>Closed</span></li>
              </ul>
            </div>
          </div>

          <div className="bg-textPrimary text-white p-8 rounded-2xl shadow-soft flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
            <div>
              <Calendar size={36} className="mb-4 opacity-80 text-surfaceRaised" />
              <h3 className="text-xl font-bold mb-4">Appointments</h3>
              <p className="opacity-90 text-sm mb-6 leading-relaxed">
                Schedule your visit quickly and easily. We offer flexible times to accommodate your busy lifestyle and ensure you receive the care you need.
              </p>
            </div>
            <Link to="/book" className="text-surfaceRaised font-medium inline-flex items-center gap-2 group mt-auto">
              Book Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <a href="https://maps.app.goo.gl/XQSUs8AYmWVLsKjCA" target="_blank" rel="noopener noreferrer" className="bg-surfaceStrong text-white p-8 rounded-2xl shadow-soft flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 group">
            <div>
              <MapPin size={36} className="mb-4 text-white group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold mb-4">Location</h3>
              <p className="opacity-90 text-sm mb-4 leading-relaxed">
                <span className="font-semibold text-white block mb-1">Nagorik Specialised Hospital Limited</span>
                Indoor Medical Officer<br/>
                Aftabnagar, Dhaka
              </p>
            </div>
            <div className="text-white font-medium text-sm inline-flex items-center gap-2 group-hover:opacity-80 transition-opacity mt-4">
              View on Map <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>
      </section>

      {/* SERVICES PREVIEW SECTION */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="text-surfaceRaised font-semibold uppercase tracking-wider text-sm mb-2">Our Services</h4>
          <h2 className="text-3xl md:text-4xl text-textPrimary mb-4">High-Quality Services for You</h2>
          <p className="text-textSecondary">We are committed to providing you with the best medical care possible, using state-of-the-art technology and compassionate expertise.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "General Medical Consultation", icon: Heart, desc: "Comprehensive care focusing on prevention, diagnosis, and personalized treatment plans." },
            { title: "Diagnosis and Treatment Planning", icon: Activity, desc: "Expert, accurate diagnosis and advanced treatment options tailored to your needs." },
            { title: "Indoor Patient Management", icon: Shield, desc: "Dedicated and comprehensive care for patients requiring hospital admission." }
          ].map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 border-0 transition-all duration-300 group">
              <div className="w-16 h-16 bg-lightBlue text-surfaceRaised rounded-xl flex items-center justify-center mb-6 group-hover:bg-surfaceRaised group-hover:text-white transition-colors duration-300">
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-3">{service.title}</h3>
              <p className="text-textSecondary text-sm leading-relaxed mb-6">{service.desc}</p>
              <Link to="/services" className="text-textPrimary font-semibold text-sm inline-flex items-center gap-2 group-hover:text-surfaceRaised transition-colors">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
};

export default Home;
