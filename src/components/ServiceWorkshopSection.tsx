/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { RedPorscheRear, StarAccent, ScenicDriveCard } from './CarArtwork';

interface ServiceWorkshopSectionProps {
  onSeeAllCars: () => void;
}

export function ServiceWorkshopSection({ onSeeAllCars }: ServiceWorkshopSectionProps) {
  return (
    <section id="how-it-works" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-20 bg-transparent">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-black/50 backdrop-blur-2xl border border-white/15 rounded-3xl p-5 sm:p-8 lg:p-12 shadow-2xl">
        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6 sm:space-y-8 relative">
          <div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-heading leading-tight tracking-wide drop-shadow-md">
              PREMIUM CAR
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-amber-400">
                WORKSHOP
              </span>
            </h2>

            <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-md font-sans">
              Selected Car Service is ready to help with service and repairs of exclusive modern and classic cars.
              With our workshop for exclusive cars, we have the opportunity to provide the best service for your
              car in a separate specialist workshop. Contact us to find out more about what we can offer you and
              your car at our exclusive workshop.
            </p>

            <div className="mt-6 sm:mt-8 flex items-center">
              <button
                onClick={onSeeAllCars}
                className="w-full sm:w-auto text-center px-6 py-3 bg-[#EFA531] hover:bg-amber-400 text-neutral-950 text-xs font-bold rounded-xl transition-all shadow-lg active:scale-95 cursor-pointer"
              >
                See all our Cars
              </button>
            </div>
          </div>

          {/* Peeking preview image & decorative golden star */}
          <div className="relative pt-4 sm:pt-6">
            <div className="absolute -left-2 sm:-left-3 top-1 sm:top-2 z-10">
              <StarAccent className="w-6 h-6 sm:w-8 sm:h-8 text-[#EFA531]" />
            </div>
            <div className="w-full max-w-[220px] sm:w-56 drop-shadow-xl">
              <ScenicDriveCard />
            </div>
          </div>
        </div>

        {/* Right Column: Red Supercar Mountain Drive Photo */}
        <div className="lg:col-span-7 relative">
          <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/15 group relative bg-black/40">
            <img
              src="/red-mountain-supercar.jpg"
              alt="Red Supercar Alpine Scenic Mountain Drive"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
