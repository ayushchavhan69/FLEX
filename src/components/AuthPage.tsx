/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, Eye, EyeOff, Lock, Mail, User, Sparkles, X, ShieldCheck, FileText } from 'lucide-react';

interface AuthPageProps {
  onBackToHome: () => void;
  onLoginSuccess?: (userEmail: string, userName?: string) => void;
  initialTab?: 'login' | 'register';
}

export function AuthPage({
  onBackToHome,
  onLoginSuccess,
  initialTab = 'login',
}: AuthPageProps) {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>(initialTab);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!password || password.length < 6) {
      setErrorMessage('Password must be at least 6 characters.');
      return;
    }

    if (activeTab === 'register') {
      if (!fullName.trim()) {
        setErrorMessage('Please enter your full name.');
        return;
      }
      if (password !== confirmPassword) {
        setErrorMessage('Passwords do not match.');
        return;
      }
    }

    setIsLoading(true);

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      if (activeTab === 'login') {
        setSuccessMessage('Welcome back! Logging you in...');
      } else {
        setSuccessMessage('Account created successfully! Logging you in...');
      }

      setTimeout(() => {
        if (onLoginSuccess) {
          onLoginSuccess(email, activeTab === 'register' ? fullName : undefined);
        } else {
          onBackToHome();
        }
      }, 1000);
    }, 800);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col font-sans overflow-x-hidden selection:bg-[#EFA531] selection:text-neutral-950">
      {/* Background: Split Yellow & White */}
      <div className="absolute inset-0 flex pointer-events-none z-0">
        {/* Left Side: Rich Warm Mustard Gold (#ECA633 / #EFA531) */}
        <div className="w-full lg:w-[72%] bg-[#EFA531] min-h-full relative overflow-hidden">
          {/* Subtle warm lighting vignette */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-white/10" />
        </div>
        {/* Right Side: Clean Crisp White */}
        <div className="hidden lg:block lg:w-[28%] bg-white min-h-full" />
      </div>

      {/* Top Navigation Bar */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-10 py-3.5 sm:py-7 flex items-center justify-between gap-3">
        {/* Left: Back to Home & Brand Logo */}
        <div className="flex items-center gap-2.5 sm:gap-6 shrink-0">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-neutral-950 bg-black/10 hover:bg-black/20 px-3 sm:px-4 py-2 rounded-full transition-all active:scale-95 cursor-pointer whitespace-nowrap shrink-0 border border-black/10 backdrop-blur-sm"
            title="Return to Rental Fleet"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline">Back to Home</span>
            <span className="sm:hidden">Home</span>
          </button>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onBackToHome();
            }}
            className="text-xl sm:text-3xl font-black tracking-widest text-neutral-950 font-heading select-none hover:opacity-80 transition-opacity uppercase shrink-0"
          >
            FLEX
          </a>
        </div>

        {/* Right: High-Contrast Luxury Segmented Pill Switcher */}
        <div className="flex items-center bg-black/10 p-1 rounded-full border border-black/10 backdrop-blur-sm shrink-0">
          <button
            onClick={() => {
              setActiveTab('login');
              setErrorMessage('');
            }}
            className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'login'
                ? 'bg-neutral-950 text-white shadow-sm'
                : 'text-neutral-900 hover:text-black'
            }`}
          >
            Login
          </button>

          <button
            onClick={() => {
              setActiveTab('register');
              setErrorMessage('');
            }}
            className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'register'
                ? 'bg-neutral-950 text-white shadow-sm'
                : 'text-neutral-900 hover:text-black'
            }`}
          >
            Sign Up
          </button>
        </div>
      </header>

      {/* Main Content Area: Form Card on Left + Car on Division */}
      <main className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto w-full px-4 sm:px-10 py-4 sm:py-12">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center">
          
          {/* Left Column: Floating Auth Card */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto lg:mx-0">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-9 text-neutral-900 border border-neutral-100 transition-all duration-300">
              
              {/* Card Header */}
              <div className="mb-5 sm:mb-6">
                <h1 className="text-xl sm:text-3xl font-black font-heading text-neutral-900 tracking-tight">
                  Welcome to FLEX
                </h1>
                <p className="text-xs sm:text-sm text-neutral-500 mt-1 leading-relaxed font-sans">
                  Sign in to access your bookings or create a new account
                </p>
              </div>

              {/* Tab Switcher: Login | Register */}
              <div className="flex border-b border-neutral-200 mb-5 sm:mb-6">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('login');
                    setErrorMessage('');
                  }}
                  className={`flex-1 pb-2.5 text-sm font-bold transition-all cursor-pointer relative ${
                    activeTab === 'login'
                      ? 'text-neutral-950 font-heading'
                      : 'text-neutral-400 hover:text-neutral-700'
                  }`}
                >
                  Login
                  {activeTab === 'login' && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#EFA531] rounded-full" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('register');
                    setErrorMessage('');
                  }}
                  className={`flex-1 pb-2.5 text-sm font-bold transition-all cursor-pointer relative ${
                    activeTab === 'register'
                      ? 'text-neutral-950 font-heading'
                      : 'text-neutral-400 hover:text-neutral-700'
                  }`}
                >
                  Register
                  {activeTab === 'register' && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#EFA531] rounded-full" />
                  )}
                </button>
              </div>

              {/* Subheading */}
              <h2 className="text-xs sm:text-sm font-bold text-neutral-900 mb-3.5 capitalize">
                {activeTab === 'login' ? 'Login' : 'Create Account'}
              </h2>

              {/* Error & Success Feedback Alerts */}
              {errorMessage && (
                <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs font-medium">
                  {errorMessage}
                </div>
              )}

              {successMessage && (
                <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>{successMessage}</span>
                </div>
              )}

              {/* Form Elements */}
              <form onSubmit={handleSubmit} className="space-y-3.5">
                {/* Full Name for Registration */}
                {activeTab === 'register' && (
                  <div>
                    <div className="relative">
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Full Name"
                        required
                        className="w-full bg-white border border-neutral-300 focus:border-[#EFA531] rounded-lg px-4 py-2.5 sm:py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                )}

                {/* Email Field */}
                <div>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      required
                      className="w-full bg-white border border-neutral-300 focus:border-[#EFA531] rounded-lg px-4 py-2.5 sm:py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      required
                      className="w-full bg-white border border-neutral-300 focus:border-[#EFA531] rounded-lg px-4 py-2.5 sm:py-3 pr-10 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 cursor-pointer"
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password for Registration */}
                {activeTab === 'register' && (
                  <div>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm Password"
                        required
                        className="w-full bg-white border border-neutral-300 focus:border-[#EFA531] rounded-lg px-4 py-2.5 sm:py-3 pr-10 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none transition-colors"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 cursor-pointer"
                        aria-label="Toggle confirm password visibility"
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                )}

                {/* Forgot Password Link (Only on login) */}
                {activeTab === 'login' && (
                  <div className="flex justify-end pt-0.5">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        alert('Password reset link has been sent to your email.');
                      }}
                      className="text-xs text-neutral-500 hover:text-[#EFA531] transition-colors font-medium"
                    >
                      Forgot Password?
                    </a>
                  </div>
                )}

                {/* Main Action Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 px-4 bg-[#EFA531] hover:bg-[#e09520] active:scale-[0.99] text-white font-bold rounded-lg text-sm transition-all shadow-md shadow-amber-500/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isLoading ? (
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : activeTab === 'login' ? (
                      'Sign in'
                    ) : (
                      'Create Account'
                    )}
                  </button>
                </div>
              </form>

              {/* Bottom Quick Switch */}
              <div className="mt-5 sm:mt-6 text-center text-xs text-neutral-500">
                {activeTab === 'login' ? (
                  <p>
                    Don't have an account?{' '}
                    <button
                      onClick={() => {
                        setActiveTab('register');
                        setErrorMessage('');
                      }}
                      className="text-[#EFA531] font-bold hover:underline ml-1 cursor-pointer"
                    >
                      Register now
                    </button>
                  </p>
                ) : (
                  <p>
                    Already have an account?{' '}
                    <button
                      onClick={() => {
                        setActiveTab('login');
                        setErrorMessage('');
                      }}
                      className="text-[#EFA531] font-bold hover:underline ml-1 cursor-pointer"
                    >
                      Sign in
                    </button>
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Car positioned across the split boundary with curved corners */}
          <div className="lg:col-span-7 flex items-center justify-center lg:justify-start relative">
            <div className="relative w-full max-w-2xl lg:-ml-8 select-none rounded-2xl sm:rounded-3xl lg:rounded-[32px] overflow-hidden shadow-2xl border border-neutral-100/80 bg-white">
              {/* Yellow Dodge Challenger SRT Muscle Car */}
              <img
                src="/yellow-challenger-auth.jpg"
                alt="Yellow Dodge Challenger SRT Muscle Car"
                className="w-full h-auto object-contain rounded-2xl sm:rounded-3xl lg:rounded-[32px] block transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>

        </div>
      </main>

      {/* Footer Info */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-neutral-800 lg:text-neutral-500 text-center sm:text-left">
        <p>© 2026 FLEX Luxury Fleet. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setActiveLegalModal('privacy')}
            className="hover:text-[#EFA531] hover:underline cursor-pointer transition-colors"
          >
            Privacy Policy
          </button>
          <span>·</span>
          <button
            type="button"
            onClick={() => setActiveLegalModal('terms')}
            className="hover:text-[#EFA531] hover:underline cursor-pointer transition-colors"
          >
            Terms of Service
          </button>
        </div>
      </footer>

      {/* Interactive Legal Policy Modals */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in text-white">
          <div className="bg-neutral-900 border border-white/15 rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
            {/* Ambient gold glow */}
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-[#EFA531] shrink-0">
                  {activeLegalModal === 'privacy' ? (
                    <ShieldCheck className="w-5 h-5" />
                  ) : (
                    <FileText className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                    FLEX Luxury Fleet · Legal
                  </span>
                  <h3 className="text-lg font-bold font-heading text-white">
                    {activeLegalModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setActiveLegalModal(null)}
                className="p-1.5 text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-2 text-xs text-neutral-300 leading-relaxed max-h-[55vh] overflow-y-auto pr-2 space-y-3.5">
              {activeLegalModal === 'privacy' ? (
                <>
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                    <h5 className="font-bold text-white mb-1 text-xs">1. Information Collection & Telematics</h5>
                    <p>We collect essential driver information (valid driver's license, contact credentials) and vehicle telemetry diagnostics to verify identity, ensure keyless access security, and maintain insurance validity.</p>
                  </div>
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                    <h5 className="font-bold text-white mb-1 text-xs">2. Bank-Grade Data Security</h5>
                    <p>All sensitive information, including identity records and payment details, is encrypted using AES-256 protocols. FLEX never sells, trades, or distributes customer data to third-party marketing entities.</p>
                  </div>
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                    <h5 className="font-bold text-white mb-1 text-xs">3. Your Rights & Control</h5>
                    <p>You may request access to, correction of, or permanent deletion of your customer profile data by contacting our data protection concierge anytime at <span className="text-amber-400 font-mono">ayushchavhan899@gmail.com</span>.</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                    <h5 className="font-bold text-white mb-1 text-xs">1. Driver Eligibility & Verification</h5>
                    <p>Renters must be at least 21 years of age (25 for select hypercars) with an active, unexpired driver’s license and valid payment authorization.</p>
                  </div>
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                    <h5 className="font-bold text-white mb-1 text-xs">2. $5M Comprehensive Protection</h5>
                    <p>All fleet rentals include zero-deductible comprehensive insurance coverage. A security deposit hold is authorized at delivery and released upon vehicle inspection.</p>
                  </div>
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                    <h5 className="font-bold text-white mb-1 text-xs">3. White-Glove Delivery & Cancellation</h5>
                    <p>Vehicles are delivered directly to your doorstep. Cancellations made 24 hours prior to delivery are 100% fully refundable with zero fees.</p>
                  </div>
                </>
              )}
            </div>

            {/* Footer Buttons */}
            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-end gap-2.5">
              <button
                onClick={() => setActiveLegalModal(null)}
                className="px-5 py-2 text-xs font-bold text-neutral-950 bg-[#EFA531] hover:bg-amber-400 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
              >
                Understood & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
