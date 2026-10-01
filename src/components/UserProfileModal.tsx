/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  X,
  User,
  ShieldCheck,
  CreditCard,
  Calendar,
  MapPin,
  Award,
  Clock,
  ChevronRight,
  Edit3,
  Phone,
  Mail,
  Car,
  Sparkles,
  CheckCircle2,
  Wallet,
  Check,
} from 'lucide-react';

export interface UserProfileData {
  name: string;
  email: string;
  phone: string;
  location: string;
  membershipTier: string;
  memberId: string;
  memberSince: string;
  licenseStatus: string;
  walletBalance: number;
  rewardPoints: number;
  activeRentalsCount: number;
}

export const DEFAULT_USER: UserProfileData = {
  name: 'Jane Cooper',
  email: 'jane.cooper@vip-flex.com',
  phone: '+1 (214) 555-0198',
  location: 'Dallas, Texas',
  membershipTier: 'VIP Titanium Tier',
  memberId: 'FLX-99420-TX',
  memberSince: 'March 2023',
  licenseStatus: 'Verified Driver (Class C Clean)',
  walletBalance: 4250,
  rewardPoints: 12850,
  activeRentalsCount: 1,
};

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user?: UserProfileData;
  onUpdateUser?: (updated: UserProfileData) => void;
  onOpenBooking?: () => void;
}

export function UserProfileModal({
  isOpen,
  onClose,
  user = DEFAULT_USER,
  onUpdateUser,
  onOpenBooking,
}: UserProfileModalProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<UserProfileData>(user);
  const [savedNotice, setSavedNotice] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (onUpdateUser) {
      onUpdateUser(formData);
    }
    setIsEditing(false);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in text-white">
      <div className="bg-neutral-900/95 border border-white/20 rounded-3xl max-w-2xl w-full p-5 sm:p-8 shadow-2xl relative overflow-hidden max-h-[92vh] overflow-y-auto backdrop-blur-2xl">
        {/* Ambient Top Glow */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer z-10"
          aria-label="Close user profile modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Profile Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 pb-5 sm:pb-6 border-b border-white/10">
          {/* Avatar with Gold Glowing Ring */}
          <div className="relative">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-200 p-[2.5px] shadow-xl shadow-amber-500/20 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-neutral-900 flex items-center justify-center text-amber-400 font-extrabold text-xl sm:text-2xl font-heading">
                {formData.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .slice(0, 2)
                  .toUpperCase()}
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-emerald-500 w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full border-2 border-neutral-900 flex items-center justify-center" title="Account Active & Verified">
              <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-neutral-950 stroke-[3]" />
            </div>
          </div>

          {/* Name & Tier */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h2 className="text-xl sm:text-2xl font-black font-heading text-white tracking-wide truncate">
                {formData.name}
              </h2>
              <span className="px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-extrabold bg-amber-400/20 text-amber-300 border border-amber-400/40 uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                {formData.membershipTier}
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-neutral-400">
              Member ID: <span className="text-neutral-300 font-mono font-semibold">{formData.memberId}</span> · Since {formData.memberSince}
            </p>
            <div className="flex items-center gap-2 mt-1.5 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="truncate">{formData.licenseStatus}</span>
            </div>
          </div>

          {/* Edit Profile Toggle Button */}
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="w-full sm:w-auto px-3.5 py-2 sm:py-1.5 rounded-xl border border-white/20 hover:border-amber-400 text-neutral-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all bg-white/5 hover:bg-white/10 active:scale-95 cursor-pointer"
          >
            <Edit3 className="w-3.5 h-3.5 text-amber-400" />
            <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
          </button>
        </div>

        {savedNotice && (
          <div className="mt-4 p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Profile information updated successfully!</span>
          </div>
        )}

        {/* Main Content Area */}
        {isEditing ? (
          <form onSubmit={handleSave} className="py-5 sm:py-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black/60 border border-white/20 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black/60 border border-white/20 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">Phone Number</label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-black/60 border border-white/20 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">Preferred Location</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-black/60 border border-white/20 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-2.5 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 text-center"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 shadow-md shadow-amber-400/20 active:scale-95 text-center"
              >
                Save Changes
              </button>
            </div>
          </form>
        ) : (
          <div className="py-5 sm:py-6 space-y-4 sm:space-y-6">
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <div className="p-2.5 sm:p-4 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl text-center">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center mx-auto mb-1.5 sm:mb-2">
                  <Wallet className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <span className="block text-[9px] sm:text-[10px] text-neutral-400 uppercase font-semibold">Wallet</span>
                <span className="text-xs sm:text-base md:text-lg font-black text-white">${formData.walletBalance.toLocaleString()}</span>
              </div>

              <div className="p-2.5 sm:p-4 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl text-center">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center mx-auto mb-1.5 sm:mb-2">
                  <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <span className="block text-[9px] sm:text-[10px] text-neutral-400 uppercase font-semibold">VIP Points</span>
                <span className="text-xs sm:text-base md:text-lg font-black text-amber-400">{formData.rewardPoints.toLocaleString()}</span>
              </div>

              <div className="p-2.5 sm:p-4 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl text-center">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center mx-auto mb-1.5 sm:mb-2">
                  <Car className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <span className="block text-[9px] sm:text-[10px] text-neutral-400 uppercase font-semibold">Bookings</span>
                <span className="text-xs sm:text-base md:text-lg font-black text-emerald-400">{formData.activeRentalsCount} Active</span>
              </div>
            </div>

            {/* Contact & Location Info */}
            <div className="bg-black/40 border border-white/10 rounded-2xl p-3.5 sm:p-4.5 space-y-3">
              <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-300">
                Verified Account Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs text-neutral-300">
                <div className="flex items-center gap-2.5 p-2 bg-white/5 rounded-xl border border-white/5">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="truncate">{formData.email}</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 bg-white/5 rounded-xl border border-white/5">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{formData.phone}</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 bg-white/5 rounded-xl border border-white/5">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{formData.location}</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 bg-white/5 rounded-xl border border-white/5">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Full Comprehensive Coverage</span>
                </div>
              </div>
            </div>

            {/* Active Reservation Card */}
            <div className="bg-gradient-to-r from-amber-500/10 via-neutral-900/80 to-neutral-900 border border-amber-400/30 rounded-2xl p-3.5 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5 sm:gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-neutral-950 border border-white/15 overflow-hidden flex items-center justify-center shrink-0">
                  <img src="/green-lamborghini-urus.png" alt="Lamborghini Urus" className="w-full h-full object-contain p-1" />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-white truncate">Lamborghini Urus Performante</span>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      ON ROAD
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-neutral-400 truncate">Oct 16 · Dallas, TX · 24/7 Concierge Support</p>
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  if (onOpenBooking) onOpenBooking();
                }}
                className="w-full sm:w-auto px-4 py-2.5 bg-[#EFA531] hover:bg-amber-400 text-neutral-950 font-bold rounded-xl text-xs transition-all active:scale-95 shadow-md shrink-0 cursor-pointer text-center"
              >
                Manage Booking
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <span className="text-[10px] sm:text-[11px] text-neutral-400">
            Flex Concierge Priority Line: <strong className="text-neutral-200">1-800-FLEX-VIP</strong>
          </span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors cursor-pointer text-center"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
