/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Search, MapPin, Calendar, Clock, ArrowDown } from 'lucide-react';
import { YellowUrusHero, StarAccent } from './CarArtwork';

interface HeroSectionProps {
  onSearch: (params: { vehicleType: string; location: string; start: string; stop: string }) => void;
  onScrollDown: () => void;
}

export const AVAILABLE_CITIES = [
  'Dallas, Texas',
  'Miami, Florida',
  'Los Angeles, California',
  'Las Vegas, Nevada',
  'New York, New York',
];

export function HeroSection({ onSearch, onScrollDown }: HeroSectionProps) {
  const vehicleType = 'Car';
  const [location, setLocation] = useState('Dallas, Texas');
  const [showLocationPicker, setShowLocationPicker] = useState(false);
  const [startDate, setStartDate] = useState('Oct 16, 11:00 AM');
  const [stopDate, setStopDate] = useState('Oct 18, 5:00 PM');
  const [editingStart, setEditingStart] = useState(false);
  const [editingStop, setEditingStop] = useState(false);

  const handleSearchClick = () => {
    onSearch({
      vehicleType,
      location,
      start: startDate,
      stop: stopDate,
    });
  };

  return (
    <section id="premium-car-rental" className="relative w-full overflow-hidden pt-4 sm:pt-8 pb-12 sm:pb-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        {/* Main Headline */}
        <div className="text-center my-3 sm:my-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-wide text-white drop-shadow-2xl font-heading leading-[1.08]">
            PREMIUM CAR
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-amber-400">
              RENTAL
            </span>
          </h1>
        </div>

        {/* Floating Booking / Reservation Card */}
        <div className="w-full max-w-3xl mt-4 sm:mt-6 mb-4 z-20">
          <div className="bg-black/60 backdrop-blur-2xl rounded-2xl p-4 border border-white/20 shadow-2xl grid grid-cols-1 sm:grid-cols-10 items-center gap-3 sm:gap-2">
            {/* Location selector */}
            <div className="sm:col-span-3 border-b sm:border-b-0 sm:border-r border-white/10 pb-2.5 sm:pb-0 sm:pr-3 relative">
              <span className="block text-[11px] font-semibold text-neutral-400">Location</span>
              <button
                type="button"
                onClick={() => setShowLocationPicker(!showLocationPicker)}
                className="w-full text-left font-bold text-sm text-white hover:text-amber-400 transition-colors flex items-center justify-between mt-0.5 cursor-pointer"
              >
                <span className="truncate">{location}</span>
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 ml-1" />
              </button>

              {/* City picker dropdown */}
              {showLocationPicker && (
                <div className="absolute top-full left-0 right-0 sm:right-auto sm:w-56 mt-2 bg-neutral-900/98 backdrop-blur-2xl rounded-xl shadow-2xl border border-white/20 py-2 z-50 text-white animate-fade-in">
                  {AVAILABLE_CITIES.map((city) => (
                    <button
                      key={city}
                      onClick={() => {
                        setLocation(city);
                        setShowLocationPicker(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-xs font-semibold hover:bg-white/10 flex items-center justify-between text-neutral-200 hover:text-white cursor-pointer"
                    >
                      <span>{city}</span>
                      {city === location && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Start Date / Time */}
            <div className="sm:col-span-3 border-b sm:border-b-0 sm:border-r border-white/10 pb-2.5 sm:pb-0 sm:px-3">
              <span className="block text-[11px] font-semibold text-neutral-400">Start</span>
              {editingStart ? (
                <input
                  type="text"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  onBlur={() => setEditingStart(false)}
                  autoFocus
                  className="w-full text-xs font-bold text-white border-b border-amber-400 focus:outline-none bg-transparent py-0.5"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setEditingStart(true)}
                  className="w-full text-left font-bold text-sm text-white hover:text-amber-400 transition-colors flex items-center justify-between mt-0.5 cursor-pointer"
                >
                  <span className="truncate">{startDate}</span>
                  <Calendar className="w-4 h-4 text-neutral-400 shrink-0 ml-1" />
                </button>
              )}
            </div>

            {/* Stop Date / Time */}
            <div className="sm:col-span-3 border-b sm:border-b-0 pb-2.5 sm:pb-0 sm:px-3">
              <span className="block text-[11px] font-semibold text-neutral-400">Stop</span>
              {editingStop ? (
                <input
                  type="text"
                  value={stopDate}
                  onChange={(e) => setStopDate(e.target.value)}
                  onBlur={() => setEditingStop(false)}
                  autoFocus
                  className="w-full text-xs font-bold text-white border-b border-amber-400 focus:outline-none bg-transparent py-0.5"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setEditingStop(true)}
                  className="w-full text-left font-bold text-sm text-white hover:text-amber-400 transition-colors flex items-center justify-between mt-0.5 cursor-pointer"
                >
                  <span className="truncate">{stopDate}</span>
                  <Clock className="w-4 h-4 text-neutral-400 shrink-0 ml-1" />
                </button>
              )}
            </div>

            {/* Search Button */}
            <div className="sm:col-span-1 flex justify-center sm:justify-end pt-1 sm:pt-0">
              <button
                onClick={handleSearchClick}
                className="w-full sm:w-11 h-11 bg-[#EFA531] hover:bg-amber-400 text-neutral-950 font-bold rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg cursor-pointer"
                aria-label="Search available cars"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                <span className="sm:hidden text-xs font-bold uppercase tracking-wider">Search Fleet</span>
              </button>
            </div>
          </div>
        </div>

        {/* Hero Visual Area with Golden Wave and Yellow Urus */}
        <div className="relative w-full max-w-5xl mt-2 flex flex-col items-center justify-center">
          {/* Soft translucent golden ambient glow */}
          <div className="absolute -bottom-8 w-[120%] h-48 sm:h-64 bg-gradient-to-t from-amber-500/25 via-amber-500/10 to-transparent rounded-[100%] opacity-80 -z-10 transform scale-y-75 pointer-events-none" />

          {/* Golden Star Accent on Upper Right */}
          <div className="absolute right-6 sm:right-12 top-2 sm:top-6 z-10 hidden sm:block animate-pulse">
            <StarAccent className="w-7 h-7 sm:w-9 sm:h-9 text-[#F3A932]" />
          </div>

          {/* Yellow BMW M4 Performance Coupe */}
          <div className="w-full max-w-3xl px-2 sm:px-4 z-10 flex justify-center my-2">
            <img
              src="/yellow-bmw-m4.png"
              alt="Yellow BMW M4 High Performance Coupe"
              className="w-full max-h-[240px] sm:max-h-[380px] object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.85)] filter hover:scale-105 transition-transform duration-500 select-none"
            />
          </div>

          {/* Downward Scroll Arrow Indicator Button */}
          <div className="relative -mt-4 sm:-mt-6 z-20">
            <div className="bg-black/60 backdrop-blur-md p-1.5 rounded-full shadow-2xl border border-white/20 flex items-center justify-center">
              <button
                onClick={onScrollDown}
                className="w-10 h-10 rounded-full bg-[#EFA531] hover:bg-amber-400 text-neutral-950 flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-md cursor-pointer"
                aria-label="Scroll down to fleet overview"
              >
                <ArrowDown className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
