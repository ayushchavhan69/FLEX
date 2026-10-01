/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, Check, Gauge, Cog, Users, Fuel, ShieldCheck, Sparkles, Share2 } from 'lucide-react';
import { CarFleetItem } from './DreamCarSection';

interface CarDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  car: CarFleetItem;
  onRentNow: (car: CarFleetItem) => void;
  onShareCar?: (car: CarFleetItem) => void;
}

export function CarDetailsModal({ isOpen, onClose, car, onRentNow, onShareCar }: CarDetailsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in text-white">
      <div className="bg-neutral-900/95 backdrop-blur-2xl rounded-2xl max-w-xl w-full p-5 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto border border-white/20">
        <div className="absolute top-4 right-4 sm:top-5 sm:right-5 flex items-center gap-1.5">
          {onShareCar && (
            <button
              onClick={() => onShareCar(car)}
              className="p-2 rounded-full text-neutral-400 hover:text-amber-400 hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Share vehicle details"
              title="Share Vehicle"
            >
              <Share2 className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
            {car.category}
          </span>
          <h3 className="text-xl sm:text-3xl font-black text-white font-heading mt-2">
            {car.name}
          </h3>
          <p className="text-xs text-neutral-400 mt-1">{car.model} · Color: {car.color}</p>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 my-4 sm:my-6">
            <div className="p-2.5 sm:p-3 bg-white/5 rounded-xl text-center border border-white/10">
              <Gauge className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-amber-400 mb-1" />
              <span className="block text-[10px] text-neutral-400 uppercase font-semibold">Max Speed</span>
              <span className="font-bold text-xs text-white">{car.topSpeed}</span>
            </div>
            <div className="p-2.5 sm:p-3 bg-white/5 rounded-xl text-center border border-white/10">
              <Cog className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-amber-400 mb-1" />
              <span className="block text-[10px] text-neutral-400 uppercase font-semibold">Transmission</span>
              <span className="font-bold text-xs text-white">{car.transmission}</span>
            </div>
            <div className="p-2.5 sm:p-3 bg-white/5 rounded-xl text-center border border-white/10">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-amber-400 mb-1" />
              <span className="block text-[10px] text-neutral-400 uppercase font-semibold">Capacity</span>
              <span className="font-bold text-xs text-white">{car.seats}</span>
            </div>
            <div className="p-2.5 sm:p-3 bg-white/5 rounded-xl text-center border border-white/10">
              <Fuel className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-amber-400 mb-1" />
              <span className="block text-[10px] text-neutral-400 uppercase font-semibold">Fuel Config</span>
              <span className="font-bold text-xs text-white">{car.fuelType}</span>
            </div>
          </div>

          {/* Performance & Concierge Features */}
          <div className="space-y-3 mb-5 sm:mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
              Included Concierge Standards
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Hand-detailed before delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Unlimited 4G telemetry Wi-Fi</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct airport / hotel drop-off</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>24/7 dedicated dispatch engineer</span>
              </div>
            </div>
          </div>

          {/* Price & CTA */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="flex items-baseline justify-between sm:justify-start">
              <div>
                <span className="text-[11px] text-neutral-400 block font-medium">Daily Rate</span>
                <div className="flex items-baseline">
                  <span className="text-2xl font-black text-amber-400">${car.dailyRate}</span>
                  <span className="text-xs text-neutral-400 ml-1">/ day</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {onShareCar && (
                <button
                  onClick={() => onShareCar(car)}
                  className="px-3.5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-neutral-200 hover:text-white font-bold rounded-xl text-xs transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer"
                  title="Share Vehicle"
                >
                  <Share2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Share</span>
                </button>
              )}
              <button
                onClick={() => {
                  onClose();
                  onRentNow(car);
                }}
                className="flex-1 sm:flex-none px-6 py-2.5 bg-[#E8A338] hover:bg-amber-400 text-neutral-950 font-bold rounded-xl text-xs transition-transform active:scale-95 shadow-md cursor-pointer text-center"
              >
                Rent This Vehicle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
