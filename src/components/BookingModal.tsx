/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, CheckCircle, Calendar, MapPin, Shield, CreditCard } from 'lucide-react';
import { CarFleetItem } from './DreamCarSection';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  car: CarFleetItem;
  initialParams?: {
    location: string;
    start: string;
    stop: string;
    vehicleType: string;
  };
}

export function BookingModal({ isOpen, onClose, car, initialParams }: BookingModalProps) {
  const [driverName, setDriverName] = useState('Jane Cooper');
  const [driverEmail, setDriverEmail] = useState('jane.cooper@example.com');
  const [driverPhone, setDriverPhone] = useState('+1 (555) 234-5678');
  const [includeInsurance, setIncludeInsurance] = useState(true);
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const days = 3;
  const insuranceCost = includeInsurance ? 45 * days : 0;
  const rentalSubtotal = car.dailyRate * days;
  const taxes = Math.round(rentalSubtotal * 0.0825);
  const total = rentalSubtotal + insuranceCost + taxes;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in text-white">
      <div className="bg-neutral-900/95 backdrop-blur-2xl rounded-2xl max-w-lg w-full p-5 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto border border-white/20">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmed ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white font-heading">Reservation Confirmed!</h3>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-sm mx-auto leading-relaxed">
              Your {car.name} is reserved for pickup in {initialParams?.location || 'Dallas, Texas'}. A confirmation pass has been sent to your email.
            </p>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-xs text-neutral-300 max-w-xs mx-auto text-left space-y-1">
              <div className="flex justify-between">
                <span>Vehicle:</span>
                <span className="font-bold text-white">{car.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Period:</span>
                <span className="font-bold text-white">{days} Days</span>
              </div>
              <div className="flex justify-between">
                <span>Total Paid:</span>
                <span className="font-bold text-amber-400">${total}</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 bg-[#EFA531] hover:bg-amber-400 text-neutral-950 font-bold rounded-xl text-xs cursor-pointer shadow-md active:scale-95"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-5 sm:mb-6">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                Instant Reservation
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white font-heading mt-2">
                Book {car.name}
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                {car.category} · ${car.dailyRate}/day · {car.topSpeed}
              </p>
            </div>

            {/* Trip Details Badge Bar */}
            <div className="bg-white/5 rounded-xl p-3 mb-5 sm:mb-6 border border-white/10 grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2 text-neutral-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="truncate">{initialParams?.location || 'Dallas, Texas'}</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-300">
                <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="truncate">{initialParams?.start || 'Oct 16 - Oct 18'}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <div>
                <label className="block text-[11px] font-semibold text-neutral-400 mb-1">Driver Full Name</label>
                <input
                  type="text"
                  required
                  value={driverName}
                  onChange={(e) => setDriverName(e.target.value)}
                  className="w-full text-xs font-semibold text-white bg-white/5 border border-white/20 rounded-lg px-3 py-2.5 focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-neutral-400 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={driverEmail}
                    onChange={(e) => setDriverEmail(e.target.value)}
                    className="w-full text-xs font-semibold text-white bg-white/5 border border-white/20 rounded-lg px-3 py-2.5 focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-neutral-400 mb-1">Phone</label>
                  <input
                    type="tel"
                    required
                    value={driverPhone}
                    onChange={(e) => setDriverPhone(e.target.value)}
                    className="w-full text-xs font-semibold text-white bg-white/5 border border-white/20 rounded-lg px-3 py-2.5 focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Comprehensive Coverage toggle */}
              <label className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border border-white/10 cursor-pointer hover:border-amber-400/30 transition-colors">
                <input
                  type="checkbox"
                  checked={includeInsurance}
                  onChange={(e) => setIncludeInsurance(e.target.checked)}
                  className="mt-0.5 accent-amber-400"
                />
                <div className="text-xs">
                  <div className="flex items-center gap-1 font-bold text-white">
                    <Shield className="w-3.5 h-3.5 text-amber-400" />
                    <span>Selected Protection (+${45 * days})</span>
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-0.5 leading-tight">
                    $0 deductible comprehensive collision damage waiver & roadside concierge.
                  </p>
                </div>
              </label>

              {/* Price Breakdown */}
              <div className="border-t border-white/10 pt-3 space-y-1.5 text-xs text-neutral-300">
                <div className="flex justify-between">
                  <span>${car.dailyRate} × {days} days</span>
                  <span>${rentalSubtotal}</span>
                </div>
                {includeInsurance && (
                  <div className="flex justify-between">
                    <span>Premium Insurance</span>
                    <span>${insuranceCost}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Taxes & Regulatory Fees (8.25%)</span>
                  <span>${taxes}</span>
                </div>
                <div className="flex justify-between font-black text-sm text-white pt-2 border-t border-white/10">
                  <span>Estimated Total</span>
                  <span className="text-amber-400">${total}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 bg-[#EFA531] hover:bg-amber-400 text-neutral-950 font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <CreditCard className="w-4 h-4" />
                <span>Confirm & Reserve Fleet</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
