import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Users, Mic, Code, Network, ChevronDown, Github, Twitter, Linkedin, Mail, ArrowUp, MapPin, Star, Zap, Coffee, Trophy } from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Countdown timer (assuming event date is April 15, 2025)
  useEffect(() => {
    const eventDate = new Date('2025-04-15T09:00:00');
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Show scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const speakers = [
    {
      name: "Dr. Priya Sharma",
      role: "Google Cloud Architect",
      company: "Google",
      image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=300",
      topic: "Building Scalable AI Solutions",
      quote: "The future of technology lies in democratizing AI for everyone."
    },
    {
      name: "Rohit Mehta",
      role: "Senior DevOps Engineer",
      company: "Microsoft",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300",
      topic: "Cloud-Native Security",
      quote: "Security isn't a feature, it's the foundation of everything we build."
    },
    {
      name: "Sarah Chen",
      role: "ML Research Scientist",
      company: "DeepMind",
      image: "https://images.pexels.com/photos/3771836/pexels-photo-3771836.jpeg?auto=compress&cs=tinysrgb&w=300",
      topic: "Ethics in AI Development",
      quote: "Technology should amplify human potential, not replace human judgment."
    }
  ];

  const techTalks = [
    {
      title: "Kubernetes at Scale",
      description: "Learn how to orchestrate containerized applications with advanced Kubernetes patterns and best practices.",
      time: "10:00 AM",
      speaker: "Alex Kumar",
      category: "DevOps",
      icon: <Network className="w-6 h-6" />
    },
    {
      title: "Serverless Architecture Deep Dive",
      description: "Explore cutting-edge serverless patterns and how they're reshaping modern application development.",
      time: "11:30 AM",
      speaker: "Maya Patel",
      category: "Cloud",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Machine Learning Pipelines",
      description: "Build robust ML pipelines that scale from prototype to production with confidence.",
      time: "2:00 PM",
      speaker: "David Wong",
      category: "AI/ML",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Web Performance Optimization",
      description: "Master the art of creating lightning-fast web applications that users love.",
      time: "3:30 PM",
      speaker: "Lisa Rodriguez",
      category: "Frontend",
      icon: <Trophy className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: "Amit Gupta",
      role: "Full Stack Developer",
      text: "GCCD events have been instrumental in my career growth. The networking opportunities are unmatched!",
      company: "TechCorp"
    },
    {
      name: "Neha Singh",
      role: "Product Manager",
      text: "I've formed lasting professional relationships and learned cutting-edge technologies at every GCCD event.",
      company: "InnovateLabs"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50 overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-red-600/10 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-28 h-28 bg-yellow-500/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-green-600/10 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-lg transition-all duration-300">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-700 via-red-700 to-yellow-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 via-red-700 to-green-700 bg-clip-text text-transparent">
                GCCD Kolkata '25
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('speakers')} className="text-gray-700 hover:text-blue-700 transition-all duration-300 hover:scale-105 font-medium">
                Speakers
              </button>
              <button onClick={() => scrollToSection('talks')} className="text-gray-700 hover:text-red-700 transition-all duration-300 hover:scale-105 font-medium">
                Tech Talks
              </button>
              <button onClick={() => scrollToSection('networking')} className="text-gray-700 hover:text-green-700 transition-all duration-300 hover:scale-105 font-medium">
                Networking
              </button>
              <button onClick={() => scrollToSection('register')} className="bg-gradient-to-r from-blue-700 via-red-700 to-yellow-600 text-white px-8 py-3 rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 transform font-semibold">
                Register Now
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/20 via-red-700/20 to-yellow-600/20 animate-pulse"></div>
        
        {/* Floating Animation Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-700 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-red-700 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-yellow-600 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-green-700 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6 animate-fade-in">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-blue-700 via-red-700 via-yellow-600 to-green-700 bg-clip-text text-transparent leading-tight animate-slide-up">
              GCCD Kolkata '25
            </h1>
            <p className="text-xl md:text-3xl text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed font-medium animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Join the most exciting Google Cloud Community Day in Eastern India! 
              Connect with industry leaders, explore cutting-edge technologies, and shape the future of cloud computing.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-lg text-gray-600 mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Calendar className="w-5 h-5 text-blue-700" />
                <span className="font-semibold">April 15, 2025</span>
              </div>
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <MapPin className="w-5 h-5 text-red-700" />
                <span className="font-semibold">Science City, Kolkata</span>
              </div>
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Users className="w-5 h-5 text-green-700" />
                <span className="font-semibold">500+ Developers</span>
              </div>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-10 shadow-2xl mb-16 max-w-3xl mx-auto border border-gray-200 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-3xl font-bold mb-8 text-gray-800">Event Countdown</h3>
            <div className="grid grid-cols-4 gap-6">
              {[
                { label: 'Days', value: timeLeft.days, color: 'from-blue-700 to-blue-800', bg: 'bg-blue-100' },
                { label: 'Hours', value: timeLeft.hours, color: 'from-red-700 to-red-800', bg: 'bg-red-100' },
                { label: 'Minutes', value: timeLeft.minutes, color: 'from-yellow-600 to-yellow-700', bg: 'bg-yellow-100' },
                { label: 'Seconds', value: timeLeft.seconds, color: 'from-green-700 to-green-800', bg: 'bg-green-100' }
              ].map((item, index) => (
                <div key={item.label} className="text-center group">
                  <div className={`${item.bg} rounded-2xl p-6 mb-3 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <div className={`text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r ${item.color} bg-clip-text animate-pulse`}>
                      {item.value.toString().padStart(2, '0')}
                    </div>
                  </div>
                  <div className="text-lg text-gray-600 font-semibold">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <button 
              onClick={() => scrollToSection('register')}
              className="bg-gradient-to-r from-blue-700 via-red-700 to-yellow-600 text-white px-12 py-5 rounded-full text-xl font-bold hover:shadow-2xl hover:scale-110 transition-all duration-300 transform hover:-translate-y-1"
            >
              Register Now - Free!
            </button>
            <button 
              onClick={() => scrollToSection('speakers')}
              className="border-3 border-blue-700 text-blue-700 px-12 py-5 rounded-full text-xl font-bold hover:bg-blue-700 hover:text-white transition-all duration-300 hover:scale-105 transform"
            >
              Meet the Speakers
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-10 h-10 text-gray-500" />
        </div>
      </section>

      {/* Key Speakers Section */}
      <section id="speakers" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-blue-700 via-red-700 to-green-700 bg-clip-text text-transparent">
              Meet Our Speakers
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto font-medium">
              Learn from industry pioneers who are shaping the future of cloud technology and developer communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {speakers.map((speaker, index) => (
              <div key={index} className="group cursor-pointer animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100 relative overflow-hidden">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700/5 via-red-700/5 to-green-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative mb-8">
                    <div className="relative">
                      <img 
                        src={speaker.image} 
                        alt={speaker.name}
                        className="w-28 h-28 rounded-full mx-auto object-cover ring-4 ring-blue-200 group-hover:ring-red-300 transition-all duration-500 group-hover:scale-110"
                      />
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-yellow-600 to-red-700 rounded-full flex items-center justify-center animate-pulse">
                        <Star className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{speaker.name}</h3>
                  <p className="text-blue-700 font-bold mb-2 text-lg">{speaker.role}</p>
                  <p className="text-gray-600 text-base mb-6">{speaker.company}</p>
                  <div className="bg-gradient-to-r from-blue-100 via-red-100 to-yellow-100 rounded-2xl p-6 mb-6 group-hover:shadow-lg transition-all duration-300">
                    <p className="text-base font-bold text-gray-700 mb-3">Speaking on:</p>
                    <p className="text-gray-800 font-bold text-lg">{speaker.topic}</p>
                  </div>
                  <blockquote className="text-gray-700 italic text-base font-medium">
                    "{speaker.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Talks Section */}
      <section id="talks" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-red-700 via-yellow-600 to-green-700 bg-clip-text text-transparent">
              Tech Talks & Sessions
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto font-medium">
              Dive deep into cutting-edge technologies with hands-on sessions designed to accelerate your learning journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {techTalks.map((talk, index) => {
              const colors = [
                'from-blue-700 to-blue-800',
                'from-red-700 to-red-800', 
                'from-yellow-600 to-yellow-700',
                'from-green-700 to-green-800'
              ];
              const bgColors = [
                'bg-blue-200 text-blue-800',
                'bg-red-200 text-red-800',
                'bg-yellow-200 text-yellow-800', 
                'bg-green-200 text-green-800'
              ];
              
              return (
                <div key={index} className="group animate-slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                    {/* Animated background */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${colors[index % colors.length]} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    <div className="flex items-start gap-6 mb-8 relative">
                      <div className={`w-16 h-16 bg-gradient-to-r ${colors[index % colors.length]} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                        {talk.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <span className={`text-base ${bgColors[index % bgColors.length]} px-4 py-2 rounded-full font-bold`}>
                            {talk.category}
                          </span>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Clock className="w-5 h-5" />
                            <span className="text-base font-semibold">{talk.time}</span>
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">{talk.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">{talk.description}</p>
                    <div className="flex items-center gap-3 text-base text-gray-600">
                      <Mic className="w-5 h-5" />
                      <span className="font-semibold">by {talk.speaker}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16 animate-fade-in">
            <p className="text-gray-700 mb-8 text-xl font-medium">And many more exciting sessions to be announced!</p>
            <button className="bg-gradient-to-r from-blue-700 via-red-700 to-yellow-600 text-white px-12 py-4 rounded-full font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg">
              View Full Agenda
            </button>
          </div>
        </div>
      </section>

      {/* Networking Section */}
      <section id="networking" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-green-700 via-blue-700 to-red-700 bg-clip-text text-transparent">
              Networking & Community
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto font-medium">
              Connect with like-minded developers, share ideas, and build lasting professional relationships in the vibrant tech community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-20">
            {[
              {
                icon: <Users className="w-10 h-10 text-white" />,
                title: "Developer Meetups",
                description: "Join structured networking sessions designed to connect developers across different experience levels and tech stacks.",
                color: "from-blue-700 to-blue-800"
              },
              {
                icon: <Coffee className="w-10 h-10 text-white" />,
                title: "Coffee Chats",
                description: "Casual conversations over coffee where you can share experiences, discuss projects, and explore collaboration opportunities.",
                color: "from-red-700 to-red-800"
              },
              {
                icon: <Network className="w-10 h-10 text-white" />,
                title: "Tech Showcases",
                description: "Present your projects, get feedback from peers, and discover innovative solutions from the community.",
                color: "from-green-700 to-green-800"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="bg-gradient-to-br from-blue-100 via-red-100 to-yellow-100 rounded-3xl p-12 md:p-16 shadow-xl animate-fade-in">
            <h3 className="text-3xl font-bold text-center mb-16 text-gray-800">What Our Community Says</h3>
            <div className="grid md:grid-cols-2 gap-10">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-2 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${index === 0 ? 'from-blue-700 to-red-700' : 'from-green-700 to-yellow-600'} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-lg">{testimonial.name}</p>
                      <p className="text-gray-600">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="register" className="py-24 bg-gradient-to-r from-blue-700 via-red-700 to-yellow-600 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-ping"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black mb-8 animate-slide-up">Ready to Join the Revolution?</h2>
          <p className="text-2xl mb-16 max-w-4xl mx-auto opacity-95 font-medium animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Don't miss out on the biggest cloud technology event in Eastern India. Register now and be part of the innovation!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <button className="bg-white text-blue-700 px-14 py-5 rounded-full text-xl font-black hover:bg-gray-100 hover:scale-110 transition-all duration-300 shadow-2xl transform hover:-translate-y-1">
              Register for Free
            </button>
            <button className="border-3 border-white text-white px-14 py-5 rounded-full text-xl font-black hover:bg-white hover:text-blue-700 transition-all duration-300 hover:scale-105 transform">
              Download Brochure
            </button>
          </div>

          <div className="flex justify-center gap-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            {[
              { icon: <Twitter className="w-6 h-6" />, delay: '0s' },
              { icon: <Linkedin className="w-6 h-6" />, delay: '0.1s' },
              { icon: <Github className="w-6 h-6" />, delay: '0.2s' },
              { icon: <Mail className="w-6 h-6" />, delay: '0.3s' }
            ].map((social, index) => (
              <a key={index} href="#" className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-125 transition-all duration-300 animate-bounce" style={{ animationDelay: social.delay }}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="animate-fade-in">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-700 via-red-700 to-yellow-600 rounded-xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">GCCD Kolkata '25</span>
              </div>
              <p className="text-gray-400 text-lg">
                Empowering developers and building the future of cloud technology in Eastern India.
              </p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h4 className="font-bold mb-6 text-xl">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors text-lg hover:scale-105 inline-block">About Event</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg hover:scale-105 inline-block">Speakers</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg hover:scale-105 inline-block">Schedule</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg hover:scale-105 inline-block">Sponsors</a></li>
              </ul>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h4 className="font-bold mb-6 text-xl">Contact Info</h4>
              <div className="space-y-3 text-gray-400 text-lg">
                <p>📧 hello@gccdkolkata.dev</p>
                <p>📱 +91 98765 43210</p>
                <p>📍 Science City, Kolkata</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 animate-fade-in">
            <p className="text-lg">&copy; 2024 GCCD Kolkata. All rights reserved. Made with ❤️ by the developer community.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-700 via-red-700 to-yellow-600 text-white rounded-full shadow-2xl hover:shadow-3xl hover:scale-125 transition-all duration-300 z-50 animate-bounce"
        >
          <ArrowUp className="w-6 h-6 mx-auto" />
        </button>
      )}
    </div>
  );
}

export default App;