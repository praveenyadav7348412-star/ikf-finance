/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  Menu, X, Globe, Phone, MapPin, Search, ChevronRight,
  Truck, Briefcase, Car, Bike, Tractor, Home,
  FileText, CheckCircle, Zap, Shield, Building, Award
} from 'lucide-react';

// EMI Calculator Component
function EMICalculator() {
  const [amount, setAmount] = useState(500000);
  const [interest, setInterest] = useState(10.5);
  const [tenure, setTenure] = useState(36);

  const emi = useMemo(() => {
    const p = amount;
    const r = interest / 12 / 100;
    const n = tenure;
    if (r === 0) return p / n;
    return Math.round((p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
  }, [amount, interest, tenure]);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8 border border-slate-100">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Interactive EMI Calculator</h3>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-slate-600 font-medium">Loan Amount</label>
            <span className="font-bold text-slate-900">₹ {amount.toLocaleString('en-IN')}</span>
          </div>
          <input 
            type="range" 
            min="50000" 
            max="5000000" 
            step="10000"
            value={amount} 
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full accent-amber-500 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-slate-400 mt-1">
            <span>₹ 50K</span>
            <span>₹ 50L</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-slate-600 font-medium">Interest Rate (p.a.)</label>
            <span className="font-bold text-slate-900">{interest}%</span>
          </div>
          <input 
            type="range" 
            min="7" 
            max="24" 
            step="0.5"
            value={interest} 
            onChange={(e) => setInterest(Number(e.target.value))}
            className="w-full accent-amber-500 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-slate-400 mt-1">
            <span>7%</span>
            <span>24%</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-slate-600 font-medium">Tenure (Months)</label>
            <span className="font-bold text-slate-900">{tenure} Months</span>
          </div>
          <input 
            type="range" 
            min="12" 
            max="84" 
            step="6"
            value={tenure} 
            onChange={(e) => setTenure(Number(e.target.value))}
            className="w-full accent-amber-500 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-slate-400 mt-1">
            <span>12m</span>
            <span>84m</span>
          </div>
        </div>

        <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-100 flex flex-col items-center">
          <p className="text-slate-500 font-medium mb-1">Your Estimated Monthly EMI</p>
          <p className="text-4xl font-bold text-slate-900 mb-4">₹ {emi.toLocaleString('en-IN')}</p>
          <button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-6 rounded-lg transition-colors shadow-sm">
            Get Sanctioned
          </button>
        </div>
      </div>
    </div>
  );
}

function IKFLogo({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center gap-1.5 cursor-pointer select-none">
      <div className="flex flex-col justify-center">
        <span 
          className={`text-3xl md:text-4xl font-black leading-[0.8] tracking-tighter ${dark ? 'text-white' : 'text-[#145f7c]'}`} 
          style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
        >
          IKF
        </span>
        <span 
          className={`text-[9px] md:text-[11px] font-semibold tracking-[0.2em] mt-1 uppercase ${dark ? 'text-slate-400' : 'text-slate-800'}`} 
          style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
        >
          Finance
        </span>
      </div>
      <div className="flex items-center justify-center translate-y-[-2px] md:translate-y-[-3px]">
        <svg className="w-6 h-8 md:w-7 md:h-9" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="17,45 5,45 25,25 37,25" fill="#F29221" />
          <polygon points="5,5 17,5 37,25 25,25" fill="#E58218" />
        </svg>
      </div>
    </div>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const products = [
    { title: "Commercial Vehicle Loans", icon: Truck, desc: "Finance for new and used commercial vehicles." },
    { title: "Small Business Loans (MSME)", icon: Briefcase, desc: "Working capital and expansion loans for SMEs." },
    { title: "Used Car Loans", icon: Car, desc: "Easy financing for pre-owned cars at attractive rates." },
    { title: "Two-Wheeler Loans", icon: Bike, desc: "Quick approvals for your daily commute rides." },
    { title: "Agricultural Equipment Loans", icon: Tractor, desc: "Tractors and farming equipment financing." },
    { title: "Housing Finance", icon: Home, desc: "Make your dream home a reality with affordable EMIs." },
  ];

  const steps = [
    { title: "Apply Online", icon: FileText, desc: "Fill a quick and secure online application form in under 5 minutes." },
    { title: "Instant Verification", icon: CheckCircle, desc: "Digital document verification with minimal physical paperwork." },
    { title: "Fast Disbursal", icon: Zap, desc: "Funds transferred directly to your bank account within 24-48 hours." },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-amber-200 selection:text-slate-900">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 py-2 px-4 md:px-8 text-xs md:text-sm border-b border-slate-800 hidden md:flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> 1800-123-4567</span>
          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Find a Branch</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white transition-colors">Investors</a>
          <a href="#" className="hover:text-white transition-colors">Careers</a>
          <div className="flex items-center gap-1 border-l border-slate-700 pl-4">
            <Globe className="w-3 h-3" />
            <select className="bg-transparent border-none focus:ring-0 cursor-pointer hover:text-white transition-colors outline-none">
              <option value="en" className="text-slate-900">English</option>
              <option value="hi" className="text-slate-900">हिन्दी</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <IKFLogo />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 font-medium text-slate-600">
              <a href="#" className="hover:text-amber-600 transition-colors">Loans</a>
              <a href="#" className="hover:text-amber-600 transition-colors">About Us</a>
              <a href="#" className="hover:text-amber-600 transition-colors">Investor Relations</a>
              <a href="#" className="hover:text-amber-600 transition-colors">Network</a>
              <a href="#" className="hover:text-amber-600 transition-colors">Contact</a>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <button className="text-slate-700 font-semibold hover:text-slate-900 transition-colors">
                Pay EMI Online
              </button>
              <button className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors shadow-sm">
                Apply Now
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 py-4 px-4 shadow-lg absolute w-full">
            <nav className="flex flex-col gap-4 font-medium text-slate-600">
              <a href="#" className="p-2 hover:bg-slate-50 rounded-md">Loans</a>
              <a href="#" className="p-2 hover:bg-slate-50 rounded-md">About Us</a>
              <a href="#" className="p-2 hover:bg-slate-50 rounded-md">Investor Relations</a>
              <a href="#" className="p-2 hover:bg-slate-50 rounded-md">Network</a>
              <a href="#" className="p-2 hover:bg-slate-50 rounded-md">Contact</a>
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-slate-100">
                <button className="w-full border border-slate-200 text-slate-700 font-semibold py-2.5 rounded-lg">
                  Pay EMI Online
                </button>
                <button className="w-full bg-slate-900 text-white font-semibold py-2.5 rounded-lg">
                  Apply Now
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-slate-900 overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
          {/* Abstract background shapes */}
          <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-slate-800 opacity-50 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-amber-900 opacity-20 blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-amber-500 text-sm font-semibold mb-6">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                  Fast, Transparent, Trusted
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                  Powering Dreams, <br/><span className="text-amber-500">Building Businesses</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0">
                  Easy asset and business financing designed for your growth. Get customized loan solutions with minimal paperwork and fast disbursals.
                </p>
                
                {/* Trust Stats */}
                <div className="grid grid-cols-3 gap-4 border-t border-slate-800 pt-8 mt-8">
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">30+</div>
                    <div className="text-xs md:text-sm text-slate-400">Years of Trust</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">500+</div>
                    <div className="text-xs md:text-sm text-slate-400">Branches</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">100k+</div>
                    <div className="text-xs md:text-sm text-slate-400">Happy Customers</div>
                  </div>
                </div>
              </div>

              {/* Instant Apply Form Preview */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl relative max-w-md mx-auto w-full">
                <div className="absolute -top-4 -right-4 bg-amber-500 text-slate-900 font-bold py-1 px-4 rounded-full text-sm shadow-md rotate-3">
                  Quick Approval
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Check Eligibility Instantly</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" placeholder="As per PAN Card" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Mobile Number</label>
                    <div className="flex">
                      <span className="inline-flex items-center px-4 py-3 rounded-l-lg border border-r-0 border-slate-200 bg-slate-50 text-slate-500">
                        +91
                      </span>
                      <input type="tel" className="w-full px-4 py-3 rounded-r-lg border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" placeholder="99999 99999" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Loan Requirement Type</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all appearance-none bg-white">
                      <option>Commercial Vehicle Loan</option>
                      <option>Small Business Loan (MSME)</option>
                      <option>Personal / Home Loan</option>
                      <option>Agriculture Loan</option>
                    </select>
                  </div>
                  <button type="button" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-6 rounded-lg transition-colors mt-2 flex items-center justify-center gap-2">
                    Apply Now <ChevronRight className="w-5 h-5" />
                  </button>
                  <p className="text-xs text-center text-slate-500 mt-4 flex items-center justify-center gap-1">
                    <Shield className="w-3 h-3" /> Safe and secure data handling
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcase Grid */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Loan Offerings</h2>
              <p className="text-lg text-slate-600">Tailored financial solutions designed to meet your specific personal and business needs with attractive interest rates.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-amber-200 transition-all group cursor-pointer">
                  <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-50 transition-colors">
                    <product.icon className="w-7 h-7 text-slate-700 group-hover:text-amber-600 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{product.title}</h3>
                  <p className="text-slate-600 mb-6 line-clamp-2">{product.desc}</p>
                  <a href="#" className="inline-flex items-center font-semibold text-amber-600 hover:text-amber-700">
                    Know More <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive EMI Calculator & Customer Journey */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Customer Journey */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">A Seamless Loan Process</h2>
                <p className="text-lg text-slate-600 mb-10">We value your time. Our streamlined process ensures quick processing so you can focus on what matters most.</p>
                
                <div className="space-y-8 relative">
                  {/* Connecting Line */}
                  <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-slate-100"></div>
                  
                  {steps.map((step, index) => (
                    <div key={index} className="flex gap-6 relative z-10">
                      <div className="shrink-0 w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center border-4 border-white shadow-sm">
                        <step.icon className="w-6 h-6 text-amber-600" />
                      </div>
                      <div className="pt-3 pb-6">
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Step {index + 1}: {step.title}</h4>
                        <p className="text-slate-600">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* EMI Calculator */}
              <div className="lg:pl-8">
                <EMICalculator />
              </div>

            </div>
          </div>
        </section>

        {/* Branch Locator & Trust Section */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Branch Locator */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Find a Branch Near You</h2>
                <p className="text-slate-400 text-lg mb-8">With over 500+ branches across the nation, we are always close to you.</p>
                
                <div className="bg-slate-800 p-2 rounded-xl flex items-center max-w-md">
                  <div className="pl-4 text-slate-400">
                    <Search className="w-5 h-5" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Enter Pincode or State..." 
                    className="w-full bg-transparent px-4 py-3 outline-none text-white placeholder-slate-500"
                  />
                  <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-6 rounded-lg transition-colors shrink-0">
                    Search
                  </button>
                </div>

                <div className="mt-8 bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                  <h4 className="font-semibold mb-4 text-amber-500 flex items-center gap-2">
                    <MapPin className="w-5 h-5" /> Featured Branches
                  </h4>
                  <ul className="space-y-4">
                    <li className="border-b border-slate-700 pb-4">
                      <div className="font-bold text-lg">Mumbai Head Office</div>
                      <div className="text-sm text-slate-400 mt-1">BKC, Bandra East, Mumbai, Maharashtra 400051</div>
                    </li>
                    <li className="border-b border-slate-700 pb-4">
                      <div className="font-bold text-lg">Delhi Regional Office</div>
                      <div className="text-sm text-slate-400 mt-1">Connaught Place, New Delhi 110001</div>
                    </li>
                    <li>
                      <a href="#" className="text-amber-500 hover:text-amber-400 text-sm font-semibold inline-flex items-center">
                        View All Branches <ChevronRight className="w-4 h-4" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Trust & Compliance */}
              <div className="lg:pl-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-8">Trust & Compliance</h2>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                    <Building className="w-8 h-8 text-amber-500 mb-4" />
                    <h4 className="font-bold text-lg mb-2">RBI Registered</h4>
                    <p className="text-sm text-slate-400">Registered Non-Banking Financial Company (NBFC) under Reserve Bank of India guidelines.</p>
                  </div>
                  
                  <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                    <Award className="w-8 h-8 text-amber-500 mb-4" />
                    <h4 className="font-bold text-lg mb-2">CRISIL Rated</h4>
                    <p className="text-sm text-slate-400">High safety credit rating for consistent financial stability and performance.</p>
                  </div>
                  
                  <div className="sm:col-span-2 bg-slate-800 p-6 rounded-xl border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <h4 className="font-bold text-lg mb-1">Investor Relations</h4>
                      <p className="text-sm text-slate-400">Access our latest annual reports and corporate governance disclosures.</p>
                    </div>
                    <button className="border border-slate-600 hover:border-amber-500 text-white font-semibold py-2 px-6 rounded-lg transition-colors whitespace-nowrap">
                      View Reports
                    </button>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            
            <div className="lg:col-span-2">
              <div className="mb-6">
                <IKFLogo dark />
              </div>
              <p className="mb-6 max-w-sm">
                Empowering businesses and individuals with transparent, fast, and accessible financing solutions for over 30 years.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-lg border border-slate-800">
                  <Phone className="w-4 h-4 text-amber-500" />
                  <span className="text-white font-semibold">1800-123-4567</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-amber-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Board of Directors</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Branch Locator</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Products</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-amber-500 transition-colors">Commercial Vehicle</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">MSME Loans</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Two-Wheeler</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Agriculture Equipment</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Housing Finance</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Compliance</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-amber-500 transition-colors">Fair Practice Code</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Grievance Redressal</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">RBI Ombudsman</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">© 2026 IKF Finance Ltd. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center hover:bg-slate-800 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center hover:bg-slate-800 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

