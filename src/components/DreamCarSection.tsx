/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Gauge, Cog, Users, Fuel, Tag, ChevronLeft, ChevronRight, Share2 } from 'lucide-react';
import { GreenUrusShowcase, YellowPorschePeek, DarkGreySuvPeek } from './CarArtwork';

export interface CarFleetItem {
  id: string;
  name: string;
  model: string;
  brand: string;
  topSpeed: string;
  transmission: string;
  seats: string;
  fuelType: string;
  dailyRate: number;
  color: string;
  category: string;
  image?: string;
}

export const FLEET_CARS: CarFleetItem[] = [
  {
    id: 'urus-green',
    name: 'Lamborghini Urus Performante',
    model: '2024 V8 Twin-Turbo',
    brand: 'Lamborghini',
    topSpeed: '306 km/h',
    transmission: '6 speed',
    seats: '5 seats',
    fuelType: '5 seats',
    dailyRate: 225,
    color: 'Verde Mantis',
    category: 'Super SUV',
    image: '/green-lamborghini-urus.png',
  },
  {
    id: 'porsche-911-yellow',
    name: 'Porsche 911 GT3 RS',
    model: '4.0L Naturally Aspirated Boxer-6',
    brand: 'Porsche',
    topSpeed: '318 km/h',
    transmission: '7 speed PDK',
    seats: '2 seats',
    fuelType: '4 seats',
    dailyRate: 240,
    color: 'GT Silver & Guards Red',
    category: 'Supercar',
    image: '/porsche-gt3-rs.png',
  },
  {
    id: 'cayenne-red',
    name: 'Porsche Cayenne GTS Turbo',
    model: '4.0L Twin-Turbo V8',
    brand: 'Porsche',
    topSpeed: '300 km/h',
    transmission: '8 speed Tiptronic',
    seats: '5 seats',
    fuelType: '5 seats',
    dailyRate: 195,
    color: 'Carmine Red',
    category: 'Luxury Performance SUV',
    image: '/porsche-cayenne-red.png',
  },
];

interface DreamCarSectionProps {
  onRentNow: (car: CarFleetItem) => void;
  onViewDetails: (car: CarFleetItem) => void;
  onShareCar?: (car: CarFleetItem) => void;
}

export function DreamCarSection({ onRentNow, onViewDetails, onShareCar }: DreamCarSectionProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentCar = FLEET_CARS[selectedIndex];

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % FLEET_CARS.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + FLEET_CARS.length) % FLEET_CARS.length);
  };

  return (
    <section id="fleet-section" className="w-full py-12 sm:py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Headline */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-wide uppercase leading-tight drop-shadow-md">
            PICK YOUR DREAM
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-amber-400">
              CAR TODAY
            </span>
          </h2>
        </div>

        {/* 3-Car Showcase Carousel */}
        <div className="relative flex items-center justify-center min-h-[300px] sm:min-h-[500px] overflow-hidden my-2 sm:my-4">
          {/* Previous Car (Porsche 911 GT3 RS peek) */}
          <div
            onClick={handlePrev}
            className="hidden md:block absolute -left-32 lg:-left-16 w-80 lg:w-96 cursor-pointer z-10 transition-all hover:scale-105 drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] opacity-80 hover:opacity-100"
            title="Switch to Porsche 911 GT3 RS"
          >
            <img
              src="/porsche-gt3-rs.png"
              alt="Porsche 911 GT3 RS"
              className="w-full h-auto object-contain select-none"
            />
          </div>

          {/* Center Active Car */}
          <div className="z-20 w-full max-w-4xl px-2 sm:px-4 flex flex-col items-center drop-shadow-[0_30px_60px_rgba(0,0,0,0.85)]">
            {selectedIndex === 0 ? (
              <div className="w-full max-w-3xl flex items-center justify-center my-2">
                <img
                  src="/green-lamborghini-urus.png"
                  alt="Lamborghini Urus Performante Verde Mantis"
                  className="w-full max-h-[250px] sm:max-h-[460px] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] filter hover:scale-105 transition-transform duration-500 select-none"
                />
              </div>
            ) : selectedIndex === 1 ? (
              <div className="w-full max-w-3xl flex items-center justify-center my-2">
                <img
                  src="/porsche-gt3-rs.png"
                  alt="Porsche 911 GT3 RS"
                  className="w-full max-h-[250px] sm:max-h-[460px] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] filter hover:scale-105 transition-transform duration-500 select-none"
                />
              </div>
            ) : (
              <div className="w-full max-w-3xl flex items-center justify-center my-2">
                <img
                  src="/porsche-cayenne-red.png"
                  alt="Porsche Cayenne GTS Turbo"
                  className="w-full max-h-[250px] sm:max-h-[460px] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] filter hover:scale-105 transition-transform duration-500 select-none"
                />
              </div>
            )}
          </div>

          {/* Next Car (Porsche Cayenne GTS Turbo peek) */}
          <div
            onClick={handleNext}
            className="hidden md:block absolute -right-32 lg:-right-16 w-80 lg:w-96 cursor-pointer z-10 transition-all hover:scale-105 drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] opacity-80 hover:opacity-100"
            title="Switch to Porsche Cayenne GTS"
          >
            <img
              src="/porsche-cayenne-red.png"
              alt="Porsche Cayenne GTS Turbo"
              className="w-full h-auto object-contain select-none"
            />
          </div>

          {/* Side Navigation Buttons (Left & Right) */}
          <button
            onClick={handlePrev}
            className="absolute left-1 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-amber-400 hover:text-neutral-950 backdrop-blur-xl shadow-2xl border border-white/20 hover:border-amber-400 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer"
            aria-label="Previous Car"
            title="Previous Car"
          >
            <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7 stroke-[2.5] group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-1 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-amber-400 hover:text-neutral-950 backdrop-blur-xl shadow-2xl border border-white/20 hover:border-amber-400 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer"
            aria-label="Next Car"
            title="Next Car"
          >
            <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7 stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Car Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mb-4">
          {FLEET_CARS.map((car, idx) => (
            <button
              key={car.id}
              onClick={() => setSelectedIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === selectedIndex
                  ? 'w-8 bg-amber-400 shadow-md shadow-amber-400/50'
                  : 'w-2.5 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Select ${car.name}`}
            />
          ))}
        </div>

        {/* Specs Bar underneath */}
        <div className="max-w-xl mx-auto mt-4 sm:mt-6 mb-6 sm:mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 py-3 sm:py-4 border-t border-b border-white/15 bg-black/40 backdrop-blur-md rounded-2xl px-3 sm:px-4">
            {/* Speed */}
            <div className="flex flex-col items-center text-center p-1.5 rounded-xl bg-white/5 sm:bg-transparent">
              <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-amber-400 mb-1">
                <Gauge className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8]" />
              </div>
              <span className="text-[10px] text-neutral-400 sm:hidden uppercase font-semibold">Speed</span>
              <span className="text-xs font-bold text-white">{currentCar.topSpeed}</span>
            </div>

            {/* Transmission */}
            <div className="flex flex-col items-center text-center p-1.5 rounded-xl bg-white/5 sm:bg-transparent">
              <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-amber-400 mb-1">
                <Cog className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8]" />
              </div>
              <span className="text-[10px] text-neutral-400 sm:hidden uppercase font-semibold">Gearbox</span>
              <span className="text-xs font-bold text-white">{currentCar.transmission}</span>
            </div>

            {/* Seats */}
            <div className="flex flex-col items-center text-center p-1.5 rounded-xl bg-white/5 sm:bg-transparent">
              <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-amber-400 mb-1">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8]" />
              </div>
              <span className="text-[10px] text-neutral-400 sm:hidden uppercase font-semibold">Seats</span>
              <span className="text-xs font-bold text-white">{currentCar.seats}</span>
            </div>

            {/* Capacity / Fuel */}
            <div className="flex flex-col items-center text-center p-1.5 rounded-xl bg-white/5 sm:bg-transparent">
              <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-amber-400 mb-1">
                <Fuel className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8]" />
              </div>
              <span className="text-[10px] text-neutral-400 sm:hidden uppercase font-semibold">Fuel</span>
              <span className="text-xs font-bold text-white">{currentCar.fuelType}</span>
            </div>
          </div>
        </div>

        {/* Price & Action Row */}
        <div className="max-w-md mx-auto bg-black/60 backdrop-blur-2xl rounded-2xl border border-white/20 shadow-2xl p-3.5 sm:p-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Price with tag icon */}
          <div className="flex items-center justify-between sm:justify-start gap-2 pl-1 sm:pl-2">
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-amber-400" />
              <div className="flex items-baseline">
                <span className="text-xs font-bold text-neutral-400 mr-0.5">$</span>
                <span className="text-xl font-black text-white tracking-tight">
                  {currentCar.dailyRate}
                </span>
                <span className="text-xs font-medium text-neutral-400 ml-1">/day</span>
              </div>
            </div>
            <span className="sm:hidden text-[10px] font-bold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20 uppercase tracking-wider">
              {currentCar.category}
            </span>
          </div>

          {/* Action buttons: Share, View Details & Rent Now */}
          <div className="flex items-center gap-2">
            {onShareCar && (
              <button
                onClick={() => onShareCar(currentCar)}
                className="p-2.5 sm:p-2 bg-white/10 hover:bg-white/20 border border-white/20 text-neutral-200 hover:text-amber-400 rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer"
                title={`Share ${currentCar.name}`}
                aria-label={`Share ${currentCar.name}`}
              >
                <Share2 className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => onViewDetails(currentCar)}
              className="flex-1 sm:flex-none px-3.5 sm:px-4 py-2.5 sm:py-2 text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-colors whitespace-nowrap shadow-sm active:scale-95 cursor-pointer text-center"
            >
              View Details
            </button>
            <button
              onClick={() => onRentNow(currentCar)}
              className="flex-1 sm:flex-none px-4 sm:px-4 py-2.5 sm:py-2 text-xs font-bold text-neutral-950 bg-[#E8A338] hover:bg-amber-400 rounded-xl transition-colors whitespace-nowrap shadow-md active:scale-95 cursor-pointer text-center"
            >
              Rent Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
