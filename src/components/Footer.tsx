import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  Share2,
  X,
  Sparkles,
  ShieldCheck,
  Phone,
  Mail,
  HelpCircle,
  FileText,
  Briefcase,
  Layers,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { StarAccent } from './CarArtwork';

interface FooterProps {
  onShareSite?: () => void;
  onOpenAuth?: (tab?: 'login' | 'register') => void;
  onOpenBlog?: () => void;
  onNavigateToSection?: (id: string) => void;
}

interface ModalContent {
  title: string;
  category: string;
  badge?: string;
  content: React.ReactNode;
}

export function Footer({ onShareSite, onOpenAuth, onOpenBlog, onNavigateToSection }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [activeModal, setActiveModal] = useState<ModalContent | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();
    if (!cleanEmail || !cleanEmail.includes('@') || !cleanEmail.includes('.')) {
      setError('Please enter a valid email address (e.g. name@example.com)');
      return;
    }
    setError('');
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubscribed(true);
      setSubscribedEmail(cleanEmail);
      try {
        const saved = JSON.parse(localStorage.getItem('flex_newsletter_subscribers') || '[]');
        if (!saved.includes(cleanEmail)) {
          saved.push(cleanEmail);
          localStorage.setItem('flex_newsletter_subscribers', JSON.stringify(saved));
        }
      } catch (err) {
        console.error(err);
      }
    }, 500);
  };

  const scrollToSection = (id: string) => {
    if (onNavigateToSection) {
      onNavigateToSection(id);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openInfoModal = (type: string) => {
    switch (type) {
      case 'faq':
        setActiveModal({
          title: 'Frequently Asked Questions',
          category: 'Help Center',
          badge: '24/7 Support',
          content: (
            <div className="space-y-4 text-xs text-neutral-300">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <h5 className="font-bold text-white mb-1 text-sm">What are the age & license requirements?</h5>
                <p className="leading-relaxed">Renters must be at least 21 years old (25 for select hypercars) and possess a valid driver’s license (US, EU, or International Driving Permit) with clean record.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <h5 className="font-bold text-white mb-1 text-sm">How does white-glove doorstep delivery work?</h5>
                <p className="leading-relaxed">Your reserved exotic vehicle will be personally delivered by a FLEX concierge to your hotel, private hangar, airport, or residence within our service zones.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <h5 className="font-bold text-white mb-1 text-sm">What security deposit & insurance is needed?</h5>
                <p className="leading-relaxed">All rentals include $5M comprehensive liability. A refundable security deposit is authorized on your credit card and released upon vehicle return.</p>
              </div>
            </div>
          ),
        });
        break;

      case 'manual':
        setActiveModal({
          title: 'Installation & Quickstart Guide',
          category: 'Resources',
          badge: 'v3.4.0',
          content: (
            <div className="space-y-3.5 text-xs text-neutral-300 leading-relaxed">
              <p>Welcome to the FLEX Keyless Access & Telemetry System. Follow these steps to sync your vehicle:</p>
              <ol className="list-decimal list-inside space-y-2 text-neutral-200">
                <li><strong className="text-white">Download the App</strong> from the Apple App Store or Google Play.</li>
                <li><strong className="text-white">Verify Driver Profile</strong> with your government ID and selfie.</li>
                <li><strong className="text-white">Bluetooth Pairing</strong>: Walk up to your delivered vehicle and tap "Unlock" on your digital dashboard.</li>
                <li><strong className="text-white">Telemetry & Diagnostics</strong>: Real-time tire pressure, fuel levels, and roadside concierge telemetry are activated automatically.</li>
              </ol>
            </div>
          ),
        });
        break;

      case 'release_notes':
        setActiveModal({
          title: 'Release Notes & Changelog',
          category: 'Platform Updates',
          badge: 'Latest Update',
          content: (
            <div className="space-y-3.5 text-xs text-neutral-300">
              <div className="border-l-2 border-[#EFA531] pl-3 py-1">
                <span className="font-bold text-white text-sm">FLEX Engine v3.4.0 — Fall Release</span>
                <p className="text-neutral-400 text-[11px] mt-0.5">October 2026</p>
              </div>
              <ul className="list-disc list-inside space-y-1.5 text-neutral-200">
                <li>Added full responsive dark mode & glassmorphic luxury interface.</li>
                <li>Instant multi-channel social sharing for fleet cars and stories.</li>
                <li>Integrated new Ferrari, Porsche, Lamborghini & BMW high-res brand showcases.</li>
                <li>Optimized 60 FPS background canvas motion rendering.</li>
              </ul>
            </div>
          ),
        });
        break;

      case 'community':
        setActiveModal({
          title: 'Community & VIP Concierge Help',
          category: 'Support Network',
          badge: 'Live Assistance',
          content: (
            <div className="space-y-4 text-xs text-neutral-300">
              <p>Our dedicated VIP concierge team is available 24 hours a day, 7 days a week.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#EFA531]" />
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase font-semibold block">VIP Hotline</span>
                    <strong className="text-white font-mono">1-800-FLEX-VIP</strong>
                  </div>
                </div>
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#EFA531]" />
                  <div>
                    <span className="text-[10px] text-neutral-400 uppercase font-semibold block">Concierge Email</span>
                    <a href="mailto:ayushchavhan899@gmail.com" className="text-amber-400 hover:text-amber-300 font-mono font-bold transition-colors">
                      ayushchavhan899@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ),
        });
        break;

      case 'about':
        setActiveModal({
          title: 'About FLEX Luxury Rentals',
          category: 'Company',
          badge: 'Established 2023',
          content: (
            <div className="space-y-3 text-xs text-neutral-300 leading-relaxed">
              <p>FLEX is the premier exotic and performance luxury vehicle rental service engineered for discerning drivers who demand unprecedented standards.</p>
              <p>With hubs in Dallas, Miami, Los Angeles, Las Vegas, and New York, our meticulously curated fleet of Lamborghini, Ferrari, Porsche, and BMW vehicles is maintained in pristine showroom condition.</p>
              <p>Every booking includes complimentary white-glove doorstep delivery, 24/7 dedicated concierge assistance, and comprehensive insurance coverage.</p>
              <div className="pt-2">
                <p className="text-neutral-400 text-[11px]">Direct Contact: <a href="mailto:ayushchavhan899@gmail.com" className="text-amber-400 hover:underline font-mono">ayushchavhan899@gmail.com</a></p>
              </div>
            </div>
          ),
        });
        break;

      case 'career':
        setActiveModal({
          title: 'Careers at FLEX',
          category: 'Join Our Team',
          badge: 'We are hiring',
          content: (
            <div className="space-y-3.5 text-xs text-neutral-300">
              <p>Join the team redefining modern luxury mobility. We are actively hiring across multiple divisions:</p>
              <div className="space-y-2">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
                  <div>
                    <h6 className="font-bold text-white">VIP Fleet Concierge Specialist</h6>
                    <span className="text-[10px] text-neutral-400">Dallas, TX · Full-Time</span>
                  </div>
                  <a href="mailto:ayushchavhan899@gmail.com?subject=Application:%20VIP%20Fleet%20Concierge%20Specialist" className="px-2 py-1 text-[10px] bg-amber-400/20 text-amber-300 hover:bg-amber-400 hover:text-neutral-950 rounded-lg font-bold transition-colors">Apply Now</a>
                </div>
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
                  <div>
                    <h6 className="font-bold text-white">Exotic Vehicle Master Technician</h6>
                    <span className="text-[10px] text-neutral-400">Miami, FL · Full-Time</span>
                  </div>
                  <a href="mailto:ayushchavhan899@gmail.com?subject=Application:%20Exotic%20Vehicle%20Master%20Technician" className="px-2 py-1 text-[10px] bg-amber-400/20 text-amber-300 hover:bg-amber-400 hover:text-neutral-950 rounded-lg font-bold transition-colors">Apply Now</a>
                </div>
              </div>
              <p className="text-[11px] text-neutral-400 pt-1">Or send your CV directly to <a href="mailto:ayushchavhan899@gmail.com" className="text-amber-400 font-mono hover:underline">ayushchavhan899@gmail.com</a></p>
            </div>
          ),
        });
        break;

      case 'press':
        setActiveModal({
          title: 'Press & Media Kit',
          category: 'Media Inquiries',
          badge: 'Press Kit',
          content: (
            <div className="space-y-3 text-xs text-neutral-300 leading-relaxed">
              <p>For press inquiries, brand partnerships, or media asset requests, please reach out to our global communications office:</p>
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl space-y-1.5">
                <p><strong className="text-white">Media Inquiries:</strong> <a href="mailto:ayushchavhan899@gmail.com" className="text-amber-400 font-mono hover:underline">ayushchavhan899@gmail.com</a></p>
                <p><strong className="text-white">Partnerships:</strong> <a href="mailto:ayushchavhan899@gmail.com" className="text-amber-400 font-mono hover:underline">ayushchavhan899@gmail.com</a></p>
              </div>
              <p className="text-[11px] text-neutral-400">High-resolution brand assets, fleet photography, and executive bios are available upon request.</p>
            </div>
          ),
        });
        break;

      case 'support':
        setActiveModal({
          title: 'Customer Support & Concierge',
          category: '24/7 Assistance',
          badge: 'Active Service',
          content: (
            <div className="space-y-3 text-xs text-neutral-300">
              <p>Need assistance with an existing booking or customized fleet dispatch? Contact our direct line:</p>
              <div className="p-3.5 bg-neutral-900 border border-amber-400/40 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-amber-400 font-bold uppercase block">Priority Roadside Dispatch</span>
                  <span className="text-base font-black text-white font-mono">1-800-555-FLEX</span>
                  <a href="mailto:ayushchavhan899@gmail.com" className="text-xs text-neutral-300 hover:text-amber-400 flex items-center gap-1.5 mt-1 font-mono transition-colors">
                    <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    ayushchavhan899@gmail.com
                  </a>
                </div>
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
            </div>
          ),
        });
        break;

      case 'security':
        setActiveModal({
          title: 'Security & Safety Protocols',
          category: 'Protection',
          badge: '$5M Policy',
          content: (
            <div className="space-y-3 text-xs text-neutral-300 leading-relaxed">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <ShieldCheck className="w-5 h-5" />
                <span>Zero-Liability Comprehensive Coverage</span>
              </div>
              <p>Every vehicle in our fleet is protected by state-of-the-art encrypted GPS tracking, real-time telemetry diagnostics, and sanitized white-glove inspection before every handover.</p>
            </div>
          ),
        });
        break;

      case 'privacy':
        setActiveModal({
          title: 'Privacy Policy',
          category: 'Legal',
          badge: 'Updated 2026',
          content: (
            <div className="space-y-2 text-xs text-neutral-300 leading-relaxed max-h-[50vh] overflow-y-auto pr-1">
              <p>Your privacy is of utmost importance to FLEX. We collect only necessary telemetry and personal identification for insurance verification and keyless access operations.</p>
              <p>We do not sell or monetize personal customer records with third-party advertising networks. Data is encrypted using AES-256 standards.</p>
            </div>
          ),
        });
        break;

      case 'terms':
        setActiveModal({
          title: 'Terms & Conditions',
          category: 'Legal',
          badge: 'Rental Agreement',
          content: (
            <div className="space-y-2 text-xs text-neutral-300 leading-relaxed max-h-[50vh] overflow-y-auto pr-1">
              <p>All rentals are subject to verified driver credential validation. Standard mileage includes 150 miles per day with additional mileage billed transparently.</p>
              <p>Cancellations made 24 hours prior to scheduled delivery are 100% fully refundable without penalty.</p>
            </div>
          ),
        });
        break;

      default:
        break;
    }
  };

  return (
    <footer className="w-full bg-black/65 backdrop-blur-2xl text-white pt-10 sm:pt-16 pb-8 sm:pb-12 mt-8 sm:mt-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Newsletter Subscription Top Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-8 sm:pb-12 border-b border-white/10 gap-6 sm:gap-8">
          {/* Left: Star + Headline */}
          <div className="flex items-start gap-3 sm:gap-4">
            <StarAccent className="w-6 h-6 sm:w-8 sm:h-8 text-[#EFA531] shrink-0 mt-1" />
            <h3 className="text-lg sm:text-2xl lg:text-[26px] font-black font-heading tracking-wider uppercase max-w-md text-white leading-tight drop-shadow-md">
              Stay up to date
              <br />
              on all the latest news.
            </h3>
          </div>

          {/* Right: Email Input + Airplane Submit Button */}
          <div className="w-full md:w-auto">
            {subscribed ? (
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 animate-fade-in shadow-xl max-w-md">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold text-white block">Subscribed to FLEX Updates! 🎉</span>
                    <span className="text-emerald-200 text-[11px]">
                      VIP dispatches will arrive at <strong className="font-mono text-white">{subscribedEmail}</strong>
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setSubscribed(false);
                    setEmail('');
                  }}
                  className="text-[10px] uppercase font-bold text-amber-300 hover:text-amber-200 underline ml-auto cursor-pointer"
                >
                  Change
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-1.5 w-full max-w-md">
                <div className="flex items-center border-b-2 border-white/20 focus-within:border-amber-400 pb-2 transition-colors relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="Your Email"
                    required
                    className="w-full bg-transparent text-sm text-white placeholder-neutral-400 focus:outline-none pr-3"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-9 h-9 rounded-full bg-[#EFA531] hover:bg-amber-400 text-neutral-950 flex items-center justify-center transition-all hover:scale-105 active:scale-95 shrink-0 shadow-md cursor-pointer group disabled:opacity-50"
                    aria-label="Submit Newsletter Email"
                    title="Subscribe to updates"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-4 h-4 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send className="w-4 h-4 -rotate-12 ml-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    )}
                  </button>
                </div>
                {error && <span className="text-xs text-rose-400 mt-1 font-medium animate-fade-in">{error}</span>}
              </form>
            )}
          </div>
        </div>

        {/* Multi-Column Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 py-8 sm:py-14 border-b border-white/10">
          {/* Column 1: Pages */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-200 mb-4">Pages</h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <button
                  onClick={() => scrollToSection('fleet-section')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Rental
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('premium-car-rental')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Locations
                </button>
              </li>
              <li>
                <button
                  onClick={() => openInfoModal('faq')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (onOpenBlog) {
                      onOpenBlog();
                    } else {
                      window.location.hash = '#/blog';
                    }
                  }}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-200 mb-4">Resources</h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <button
                  onClick={() => openInfoModal('manual')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Installation Manual
                </button>
              </li>
              <li>
                <button
                  onClick={() => openInfoModal('release_notes')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Release Note
                </button>
              </li>
              <li>
                <button
                  onClick={() => openInfoModal('community')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Community Help
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-200 mb-4">Company</h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <button
                  onClick={() => openInfoModal('about')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => openInfoModal('press')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Press
                </button>
              </li>
              <li>
                <button
                  onClick={() => openInfoModal('support')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Support
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Product */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-200 mb-4">Product</h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <button
                  onClick={() => scrollToSection('mobile-app')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Demo
                </button>
              </li>
              <li>
                <button
                  onClick={() => openInfoModal('security')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Security
                </button>
              </li>
              <li>
                <button
                  onClick={() => openInfoModal('faq')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Features
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Follow & Share */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-200 mb-4">Share & Follow</h4>
            <div className="flex items-center gap-2.5 flex-wrap">
              {/* Facebook Share */}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.origin : '')}`}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-white/10 hover:border-white/40 transition-all hover:scale-105 cursor-pointer"
                aria-label="Share on Facebook"
                title="Share on Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>

              {/* LinkedIn Share */}
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.origin : '')}`}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-white/10 hover:border-white/40 transition-all hover:scale-105 cursor-pointer"
                aria-label="Share on LinkedIn"
                title="Share on LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* Twitter / X Share */}
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Experience Flex Luxury Exotic & Performance Car Rental')}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.origin : '')}`}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-white/10 hover:border-white/40 transition-all hover:scale-105 cursor-pointer"
                aria-label="Share on Twitter / X"
                title="Share on Twitter / X"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* Email Direct Contact Button */}
              <a
                href="mailto:ayushchavhan899@gmail.com"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-white/10 hover:border-white/40 transition-all hover:scale-105 cursor-pointer"
                aria-label="Email Us"
                title="Email ayushchavhan899@gmail.com"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>

              {/* All Share Channels Modal Trigger */}
              {onShareSite && (
                <button
                  onClick={onShareSite}
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-white/10 hover:border-white/40 transition-all hover:scale-105 cursor-pointer"
                  aria-label="More Sharing Options"
                  title="Share Flex Website"
                >
                  <Share2 className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Legal Notice */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-400 pt-8 gap-4">
          <p>All rights reserved © Flex 2026</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => openInfoModal('privacy')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>|</span>
            <button
              onClick={() => openInfoModal('terms')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Terms & Condition
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Information Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in text-white">
          <div className="bg-neutral-900/98 border border-white/20 rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
            {/* Ambient background glow */}
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-white/10 mb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  {activeModal.category} {activeModal.badge && `· ${activeModal.badge}`}
                </span>
                <h3 className="text-lg font-bold font-heading text-white">{activeModal.title}</h3>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1.5 text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="py-2">{activeModal.content}</div>

            {/* Footer Buttons */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-end gap-2.5">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 text-xs font-bold text-neutral-950 bg-[#EFA531] hover:bg-amber-400 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
