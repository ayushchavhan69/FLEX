/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Wifi, Battery, Signal, Bell, Info, ShieldCheck, Clock, X, Sparkles } from 'lucide-react';
import { StarAccent } from './CarArtwork';

export function MobileAppSection() {
  const [activeNotice, setActiveNotice] = useState<{ store: string; show: boolean } | null>(null);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleDownload = (store: string) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setActiveNotice({ store, show: true });
    // Automatically disappear after 4 seconds
    timerRef.current = setTimeout(() => {
      setActiveNotice(null);
    }, 4000);
  };

  React.useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <section id="mobile-app" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 my-4 sm:my-8">
      {/* Container Card with Glassmorphic Amber Glow and Modern Phone Mockup on Right */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-amber-500/40 via-amber-400/25 to-amber-600/35 backdrop-blur-2xl border border-white/20 shadow-2xl p-5 sm:p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
        {/* Left Side: Headline & Store Download Badges */}
        <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 z-10">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-heading leading-tight tracking-wide drop-shadow-md">
            PREMIUM CAR
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-amber-400">
              APP EXPERIENCE
            </span>
          </h2>

          <p className="text-xs sm:text-base text-neutral-200 font-medium max-w-md leading-relaxed">
            Unlock instant keyless access, telemetry diagnostics, and real-time fleet reservations right from your pocket.
          </p>

          {/* App Store and Google Play Download Badges */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            {/* Apple App Store */}
            <button
              onClick={() => handleDownload('Apple App Store')}
              className="bg-black/80 hover:bg-black text-white border border-white/20 hover:border-amber-400/50 rounded-xl px-4 py-2.5 flex items-center justify-center sm:justify-start gap-3 transition-all hover:scale-105 shadow-md active:scale-95 cursor-pointer"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current shrink-0" viewBox="0 0 170 170">
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.34-5.77-8.91-10.4-19.16-13.88-30.76-3.48-11.6-5.22-22.61-5.22-33.02 0-14.89 3.7-27.18 11.09-36.87 7.4-9.68 16.9-14.61 28.5-14.77 5.11 0 10.55 1.34 16.32 4.02 5.77 2.68 9.69 4.07 11.76 4.17 1.63 0 5.72-1.47 12.27-4.42 6.54-2.94 12.23-4.32 17.06-4.13 13.06.66 23.49 5.37 31.3 14.13-11.43 6.94-17.04 16.65-16.83 29.13.22 10 4.13 18.25 11.75 24.77 7.62 6.52 16.59 10.3 26.92 11.34-2.18 6.52-4.8 12.82-7.85 18.91zM119.22 31.84c0-7.39 2.67-14.44 8.01-21.15 5.34-6.72 11.97-10.69 19.89-11.92.54 1.3.82 2.61.82 3.92 0 7.28-2.83 14.34-8.49 21.18-5.66 6.84-12.41 10.66-20.23 11.47z"/>
              </svg>
              <div className="text-left">
                <span className="block text-[9px] uppercase tracking-wider text-neutral-300">Download on the</span>
                <span className="block text-xs font-bold leading-tight">App Store</span>
              </div>
            </button>

            {/* Google Play */}
            <button
              onClick={() => handleDownload('Google Play')}
              className="bg-black/80 hover:bg-black text-white border border-white/20 hover:border-amber-400/50 rounded-xl px-4 py-2.5 flex items-center justify-center sm:justify-start gap-3 transition-all hover:scale-105 shadow-md active:scale-95 cursor-pointer"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current shrink-0" viewBox="0 0 512 512">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
              </svg>
              <div className="text-left">
                <span className="block text-[9px] uppercase tracking-wider text-neutral-300">GET IT ON</span>
                <span className="block text-xs font-bold leading-tight">Google Play</span>
              </div>
            </button>
          </div>

          {/* Under Progress Notification Banner */}
          {activeNotice && (
            <div className="flex items-start gap-3.5 bg-neutral-900/95 backdrop-blur-xl border border-amber-400/40 rounded-2xl p-4 text-white shadow-2xl max-w-md animate-fade-in">
              <div className="w-9 h-9 rounded-xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                <Clock className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      Under Progress
                    </span>
                    <Sparkles className="w-3 h-3 text-amber-400" />
                  </div>
                  <button
                    onClick={() => setActiveNotice(null)}
                    className="text-neutral-400 hover:text-white p-1 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                    aria-label="Dismiss message"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                  The <strong className="text-white">{activeNotice.store}</strong> application is currently under progress and active development. Coming soon!
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Smartphone Frame */}
        <div className="w-full lg:w-1/2 flex items-center justify-center relative">
          {/* Decorative Star Accent */}
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-20 hidden sm:block">
            <StarAccent className="w-10 h-10 text-amber-400" />
          </div>

          {/* Smartphone Frame */}
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] rounded-[44px] sm:rounded-[48px] bg-[#111317] p-2.5 sm:p-3 shadow-2xl border-4 border-[#22252B] transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
            {/* Gloss Outer Edge */}
            <div className="rounded-[40px] bg-neutral-950 overflow-hidden text-white border border-neutral-800">
              
              {/* Dynamic Island & Phone Top Status Bar */}
              <div className="pt-3 px-6 pb-2 flex items-center justify-between bg-black text-xs font-bold">
                <span>9:41</span>
                {/* Dynamic Island pill */}
                <div className="w-20 h-4 bg-neutral-900 rounded-full mx-auto border border-neutral-800" />
                <div className="flex items-center gap-1.5 text-neutral-400">
                  <Signal className="w-3 h-3" />
                  <Wifi className="w-3 h-3" />
                  <Battery className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Sub-header Navigation Tabs inside Phone */}
              <div className="px-5 py-2.5 flex items-center justify-between text-[11px] font-semibold border-b border-neutral-800 bg-neutral-900">
                <div className="flex items-center gap-1.5 text-white">
                  <Info className="w-3 h-3 text-amber-400" />
                  <span>Information</span>
                </div>
                <div className="flex items-center gap-1.5 text-neutral-400">
                  <Bell className="w-3 h-3" />
                  <span>Notifications</span>
                </div>
              </div>

              {/* Nearest Car Section inside App */}
              <div className="p-4 bg-neutral-950 space-y-3">
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-400">
                  NEAREST CAR
                </div>

                {/* Car Preview Container */}
                <div className="bg-neutral-900 rounded-2xl p-3 shadow-sm border border-neutral-800 flex flex-col items-center">
                  <div className="w-full flex items-center justify-center my-2 min-h-[90px]">
                    <img
                      src="/yellow-bmw-m4.png"
                      alt="BMW M4 Competition"
                      className="w-full h-auto max-h-[110px] object-contain drop-shadow-lg transition-transform hover:scale-105 duration-300 select-none"
                    />
                  </div>
                  <div className="w-full flex items-center justify-between mt-1">
                    <span className="text-xs font-bold text-white">BMW M4 Competition</span>
                    <span className="text-[10px] font-bold text-neutral-950 bg-amber-400 px-2 py-0.5 rounded-full">Available</span>
                  </div>
                </div>

                {/* Quick Telemetry Specs Bar */}
                <div className="bg-neutral-900 rounded-xl p-2.5 shadow-sm border border-neutral-800 grid grid-cols-3 gap-2 text-center">
                  <div className="border-r border-neutral-800">
                    <span className="block text-[9px] text-neutral-400 font-medium">Range</span>
                    <span className="text-xs font-black text-white">370km</span>
                  </div>
                  <div className="border-r border-neutral-800">
                    <span className="block text-[9px] text-neutral-400 font-medium">Fuel</span>
                    <span className="text-xs font-black text-white">55L</span>
                  </div>
                  <div>
                    <span className="block text-[9px] text-neutral-400 font-medium">Hourly</span>
                    <span className="text-xs font-black text-amber-400">$45/h</span>
                  </div>
                </div>

                {/* Jane Cooper User Balance Footer inside Phone */}
                <div className="bg-neutral-900 rounded-xl p-2.5 shadow-sm border border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 font-bold text-xs flex items-center justify-center text-neutral-950">
                      JC
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-white leading-tight">Jane Cooper</span>
                      <span className="block text-[9px] text-neutral-400">Verified Driver</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-black text-white">$ 4,253</span>
                  </div>
                </div>
              </div>

              {/* Bottom Home Indicator Bar */}
              <div className="h-4 bg-black flex items-center justify-center">
                <div className="w-24 h-1 bg-neutral-600 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
