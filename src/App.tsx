import React, { useState } from 'react';
import { ChevronDown, Play, ArrowRight, Menu, X, Zap, TrendingUp, Brain } from 'lucide-react';
import HowItWorks from './components/HowItWorks';
import LogoMarquee from './components/LogoMarquee';
import SignupForm from './components/SignupForm';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToForm = () => {
    const formElement = document.getElementById('form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    scrollToForm();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Navigation */}
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <img
                  src="/Storyclash-ai-grau.svg"
                  alt="Storyclash.ai"
                  className="h-8 w-auto"
                />
              </div>
              <span className="hidden sm:inline-block text-[#C8C9CF] opacity-70 mx-3 text-lg font-light" aria-hidden="true">|</span>
              <span className="hidden sm:inline-block text-[#7424B3] text-base font-semibold tracking-[-0.01em]">
                Creator Personas
              </span>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <button
                onClick={scrollToForm}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2.5 rounded-md text-sm font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                ✨ Start the magic →
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => {
                    scrollToForm();
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2.5 rounded-md text-sm font-semibold text-center"
                >
                  ✨ Start the magic →
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[80vh] bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-200/20 to-purple-200/20 rounded-full blur-2xl"></div>
        </div>
        
        <div className="mx-auto max-w-[980px] px-4 pt-56 pb-40 text-center relative z-10">
          {/* Brand Icon */}
          <div className="flex justify-center">
            <img 
              src="/Storyclash_ai_logo_icons copy.svg" 
              alt="Storyclash AI Icon" 
              className="h-10 w-auto"
            />
          </div>
          
          {/* Headline */}
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E40DA8] to-[#7424B3]">Creator</span> Personas - Find Your <br />Perfect Creator <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E40DA8] to-[#7424B3]">Match</span> in Seconds, <br />Not Weeks
          </h1>
          
          {/* Subline */}
          <p className="mt-6 text-lg text-gray-500 max-w-[760px] mx-auto leading-relaxed">
            From brand to creators in seconds - our AI researches your brand, competitors, and market to build a creator persona and match you with the perfect influencers.
          </p>
          
          {/* Input and Button Form */}
          <form onSubmit={handleHeroSubmit} className="mt-8">
            <div className="mx-auto w-full max-w-[560px]">
              <input
                type="text"
                name="domain"
                placeholder="Enter your domain…"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-3 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 text-white text-base font-medium hover:opacity-90 transition-all duration-300"
            >
              ✨ Start the magic →
            </button>
          </form>
          
          {/* Helper text */}
          <p className="mt-3 text-xs text-gray-400">
            Free trial • No credit card
          </p>
        </div>
      </section>

      {/* How It Works Component */}
      <div className="py-24">
        <HowItWorks />
      </div>

      {/* Lead Form Section */}
      <SignupForm />

      {/* Video Section */}
      <section className="py-20 px-6">
        <div className="max-w-[880px] mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Watch Creator Personas in Action</h3>
            <p className="text-gray-600">See how AI finds the perfect creators for your brand</p>
          </div>
          <div className="aspect-video rounded-xl overflow-hidden bg-gray-100 shadow-sm ring-1 ring-black/5">
            <iframe
              src="https://www.youtube.com/embed/iin3uhVIexo"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Logo Marquee */}
      <LogoMarquee />

      {/* Automation Benefits Section */}
      <section className="py-16 md:py-24 px-6 bg-[#FAFAFB] relative" style={{ boxShadow: 'inset 0 1px 0 rgba(0,0,0,0.03)' }}>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B1C1E] mb-4 leading-tight">
              Automate Creator Discovery and Save 10+ Hours Per Week
            </h2>
            <p className="text-lg text-[#4A4C57] max-w-[700px] mx-auto leading-relaxed">
              Build reusable creator personas for every product, market, and campaign. Our AI instantly matches you with high-performing influencers while you focus on strategy, not spreadsheets.
            </p>
          </div>

          {/* Feature Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="py-8 md:py-0 md:px-8 lg:px-12 text-center md:text-left">
              <Zap className="w-6 h-6 text-[#5B5C63] opacity-70 mb-4 mx-auto md:mx-0" />
              <h3 className="text-xl md:text-2xl font-semibold text-[#1B1C1E] mb-3">100x Faster Searches</h3>
              <p className="text-[#4A4C57] leading-relaxed">
                Use rich persona profiles to automate discovery. Surface ideal creators in seconds instead of spending hours on manual research.
              </p>
            </div>

            <div className="py-8 md:py-0 md:px-8 lg:px-12 text-center md:text-left">
              <TrendingUp className="w-6 h-6 text-[#5B5C63] opacity-70 mb-4 mx-auto md:mx-0" />
              <h3 className="text-xl md:text-2xl font-semibold text-[#1B1C1E] mb-3">20% More Revenue Per Creator</h3>
              <p className="text-[#4A4C57] leading-relaxed">
                Our algorithm identifies high-performing creators based on what actually drives results in your industry. Customers see 20% more revenue per collaboration.
              </p>
            </div>

            <div className="py-8 md:py-0 md:px-8 lg:px-12 text-center md:text-left">
              <Brain className="w-6 h-6 text-[#5B5C63] opacity-70 mb-4 mx-auto md:mx-0" />
              <h3 className="text-xl md:text-2xl font-semibold text-[#1B1C1E] mb-3">AI-Powered Creator Insights</h3>
              <p className="text-[#4A4C57] leading-relaxed">
                Get instant insights into why specific creators match your brand - including audience fit, content style, and engagement potential. No spreadsheets. Just clear, actionable data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust/Stats Section */}
      <section aria-label="Trusted by customers" className="py-10 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x lg:divide-x divide-gray-200">
            <div role="group" aria-label="stat" className="py-4 md:py-0 text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                400+
              </div>
              <div className="text-sm text-gray-500 mt-1 leading-tight">
                Brands Using Our AI
              </div>
            </div>
            <div role="group" aria-label="stat" className="py-4 md:py-0 text-center md:px-6 lg:px-8">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                5M+
              </div>
              <div className="text-sm text-gray-500 mt-1 leading-tight">
                Creator Profiles Analyzed
              </div>
            </div>
            <div role="group" aria-label="stat" className="py-4 md:py-0 text-center md:px-6 lg:px-8">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                300+
              </div>
              <div className="text-sm text-gray-500 mt-1 leading-tight">
                Five-Star Reviews
              </div>
            </div>
            <div role="group" aria-label="stat" className="py-4 md:py-0 text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                87%
              </div>
              <div className="text-sm text-gray-500 mt-1 leading-tight">
                Campaign Success Rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100 py-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            Powered by AI • Built by{' '}
            <a 
              href="https://storyclash.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
            >
              Storyclash.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;