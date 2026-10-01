/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import {
  User,
  Menu,
  X,
  Share2,
  LogOut,
} from 'lucide-react';
import { StarAccent } from './CarArtwork';
import { UserProfileData } from './UserProfileModal';

interface NavbarProps {
  onOpenBooking: () => void;
  onSelectCity?: (city: string) => void;
  onShareSite?: () => void;
  onOpenAuth?: (tab?: 'login' | 'register') => void;
  onOpenBlog?: () => void;
  isLoggedIn?: boolean;
  user?: UserProfileData | null;
  onLogout?: () => void;
}

export function Navbar({
  onOpenBooking,
  onShareSite,
  onOpenAuth,
  onOpenBlog,
  isLoggedIn = false,
  user = null,
  onLogout,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false);
      }
    }
    if (showProfileMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showProfileMenu]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const getInitials = (name?: string) => {
    if (!name) return 'U';
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  return (
    <header className="w-full bg-black/50 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50 text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 sm:py-5 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="text-xl sm:text-2xl font-black tracking-widest text-white font-heading select-none hover:text-amber-400 transition-colors"
        >
          FLEX
        </a>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-semibold text-neutral-200 tracking-wide">
          <button
            onClick={() => scrollTo('how-it-works')}
            className="hover:text-amber-400 transition-colors cursor-pointer"
          >
            How it works
          </button>
          <button
            onClick={() => scrollTo('premium-car-rental')}
            className="hover:text-amber-400 transition-colors cursor-pointer"
          >
            Car Locations
          </button>
          <button
            onClick={() => {
              if (onOpenBlog) {
                onOpenBlog();
              } else {
                scrollTo('stories-section');
              }
            }}
            className="hover:text-amber-400 transition-colors cursor-pointer"
          >
            Journal & Stories
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Share Button */}
          {onShareSite && (
            <button
              onClick={onShareSite}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 hover:border-amber-400/50 flex items-center justify-center text-neutral-300 hover:text-amber-400 hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-amber-400 active:scale-95 cursor-pointer"
              aria-label="Share platform"
              title="Share Flex Luxury Rentals"
            >
              <Share2 className="w-4 h-4" />
            </button>
          )}

          {/* User Profile Button & Card (ONLY when Logged In) */}
          {isLoggedIn && user ? (
            <div className="relative" ref={profileMenuRef}>
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#EFA531] bg-neutral-900/90 flex items-center justify-center text-[#EFA531] font-bold text-xs shadow-md shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all focus:outline-none cursor-pointer"
                aria-label="User Profile"
                title={user.name}
              >
                {getInitials(user.name)}
              </button>

              {/* Exact User Information Card from image */}
              {showProfileMenu && (
                <div className="absolute right-0 mt-3 bg-neutral-900/98 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/15 p-4 z-50 text-white min-w-[270px] sm:min-w-[290px] animate-fade-in">
                  <div className="flex items-center gap-3.5">
                    {/* Gold Border Ring with Initials */}
                    <div className="w-12 h-12 rounded-full border-2 border-[#EFA531] bg-neutral-950 flex items-center justify-center text-[#EFA531] font-bold text-sm shrink-0 shadow-md">
                      {getInitials(user.name)}
                    </div>

                    {/* User text details */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-sm sm:text-base font-bold text-white tracking-wide truncate">
                          {user.name}
                        </h3>
                        <StarAccent className="w-3.5 h-3.5 text-[#EFA531] shrink-0" />
                      </div>
                      <p className="text-xs font-semibold text-[#EFA531] leading-tight mt-0.5 truncate">
                        {user.membershipTier || 'VIP Member'}
                      </p>
                      <p className="text-[11px] text-neutral-400 font-sans mt-0.5 truncate">
                        {user.email}
                      </p>
                    </div>
                  </div>

                  {/* Log Out Option */}
                  {onLogout && (
                    <div className="mt-3 pt-3 border-t border-white/10">
                      <button
                        onClick={() => {
                          setShowProfileMenu(false);
                          onLogout();
                        }}
                        className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/5 hover:bg-rose-500/20 text-neutral-300 hover:text-rose-300 text-xs font-semibold transition-colors cursor-pointer"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Log Out</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            /* Logged Out Actions: Login & Sign Up */
            <>
              {onOpenAuth && (
                <button
                  onClick={() => onOpenAuth('login')}
                  className="hidden sm:inline-block px-3.5 py-2 text-xs font-bold text-neutral-200 hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Login
                </button>
              )}

              <button
                onClick={() => {
                  if (onOpenAuth) {
                    onOpenAuth('register');
                  } else {
                    onOpenBooking();
                  }
                }}
                className="px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs font-bold tracking-wide text-neutral-950 bg-[#EFA531] hover:bg-amber-400 rounded-xl transition-all shadow-md active:scale-95 whitespace-nowrap cursor-pointer"
              >
                Sign Up
              </button>
            </>
          )}

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-amber-400 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-900/98 backdrop-blur-2xl border-b border-white/10 px-4 sm:px-6 py-4 space-y-3 text-white animate-fade-in">
          {/* User Card in Mobile Drawer ONLY when logged in */}
          {isLoggedIn && user && (
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-black/60 border border-white/15 mb-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-full border-2 border-[#EFA531] bg-neutral-950 flex items-center justify-center text-[#EFA531] font-bold text-xs shrink-0 shadow-md">
                  {getInitials(user.name)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <p className="text-sm font-bold text-white truncate">{user.name}</p>
                    <StarAccent className="w-3.5 h-3.5 text-[#EFA531] shrink-0" />
                  </div>
                  <p className="text-xs font-semibold text-[#EFA531] mt-0.5 truncate">{user.membershipTier || 'VIP Member'}</p>
                  <p className="text-[11px] text-neutral-400 font-sans mt-0.5 truncate">{user.email}</p>
                </div>
              </div>
              {onLogout && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onLogout();
                  }}
                  className="p-2 text-neutral-400 hover:text-rose-400 ml-2 rounded-lg hover:bg-white/5"
                  title="Log Out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              )}
            </div>
          )}

          <button
            onClick={() => scrollTo('how-it-works')}
            className="block w-full text-left py-2.5 px-3 rounded-xl text-sm font-semibold text-neutral-200 hover:text-amber-400 hover:bg-white/5 transition-colors"
          >
            How it works
          </button>
          <button
            onClick={() => scrollTo('premium-car-rental')}
            className="block w-full text-left py-2.5 px-3 rounded-xl text-sm font-semibold text-neutral-200 hover:text-amber-400 hover:bg-white/5 transition-colors"
          >
            Car Locations
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenBlog) {
                onOpenBlog();
              } else {
                scrollTo('stories-section');
              }
            }}
            className="block w-full text-left py-2.5 px-3 rounded-xl text-sm font-semibold text-neutral-200 hover:text-amber-400 hover:bg-white/5 transition-colors"
          >
            Journal & Stories
          </button>
          <button
            onClick={() => scrollTo('fleet-section')}
            className="block w-full text-left py-2.5 px-3 rounded-xl text-sm font-semibold text-neutral-200 hover:text-amber-400 hover:bg-white/5 transition-colors"
          >
            Explore Fleet
          </button>

          {/* Logged Out buttons on mobile */}
          {!isLoggedIn && onOpenAuth && (
            <div className="pt-3 border-t border-white/10 flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth('login');
                }}
                className="flex-1 py-2.5 rounded-xl text-xs font-bold text-center bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth('register');
                }}
                className="flex-1 py-2.5 rounded-xl text-xs font-bold text-center bg-[#EFA531] hover:bg-amber-400 text-neutral-950 transition-colors"
              >
                Sign Up
              </button>
            </div>
          )}

          {onShareSite && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onShareSite();
              }}
              className="flex items-center gap-2 w-full text-left py-2.5 px-3 rounded-xl text-sm font-semibold text-amber-400 hover:text-amber-300 hover:bg-amber-400/10 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span>Share Flex Platform</span>
            </button>
          )}
        </div>
      )}
    </header>
  );
}
