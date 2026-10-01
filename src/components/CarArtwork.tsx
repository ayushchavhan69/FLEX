/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

// The 4-pointed golden decorative star accent seen across the design
export function StarAccent({ className = "w-6 h-6 text-amber-400" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="currentColor">
      <path d="M20 0 C20 11 29 20 40 20 C29 20 20 29 20 40 C20 29 11 20 0 20 C11 20 20 11 20 0 Z" />
    </svg>
  );
}

// Hero Yellow Lamborghini Urus Side Profile
export function YellowUrusHero({ className = "w-full max-w-4xl" }: { className?: string }) {
  return (
    <div className={`relative select-none ${className}`}>
      <svg
        viewBox="0 0 1100 480"
        className="w-full h-auto drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="yellowBody" x1="0%" y1="0%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="#FFF275" />
            <stop offset="35%" stopColor="#F5B800" />
            <stop offset="70%" stopColor="#E29E00" />
            <stop offset="100%" stopColor="#B37800" />
          </linearGradient>
          <linearGradient id="yellowHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFBB" />
            <stop offset="100%" stopColor="#F7C61E" />
          </linearGradient>
          <linearGradient id="darkGlass" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E232A" />
            <stop offset="60%" stopColor="#0B0D11" />
            <stop offset="100%" stopColor="#192026" />
          </linearGradient>
          <linearGradient id="rimMetal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3A3D40" />
            <stop offset="50%" stopColor="#1C1E20" />
            <stop offset="100%" stopColor="#0E0F10" />
          </linearGradient>
          <linearGradient id="caliperYellow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFDE17" />
            <stop offset="100%" stopColor="#D49900" />
          </linearGradient>
          <radialGradient id="tireShadow" cx="50%" cy="50%" r="50%">
            <stop offset="65%" stopColor="#151719" />
            <stop offset="90%" stopColor="#0C0E0F" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>
          <filter id="shadowFilter" x="-10%" y="-10%" width="120%" height="140%">
            <feDropShadow dx="0" dy="18" stdDeviation="15" floodColor="#422500" floodOpacity="0.45" />
          </filter>
        </defs>

        {/* Ground Ambient Contact Shadow */}
        <ellipse cx="550" cy="410" rx="460" ry="24" fill="#000000" fillOpacity="0.38" />
        <ellipse cx="230" cy="405" rx="140" ry="18" fill="#000000" fillOpacity="0.6" />
        <ellipse cx="850" cy="405" rx="140" ry="18" fill="#000000" fillOpacity="0.6" />

        <g filter="url(#shadowFilter)">
          {/* Main Car Silhouette / Body Shell */}
          <path
            d="M 120 300 
               C 135 270, 160 250, 195 240
               L 330 205
               C 390 190, 435 155, 475 145
               L 660 145
               C 740 145, 830 185, 890 220
               L 970 250
               C 1020 270, 1045 295, 1050 330
               L 1045 350
               C 1040 370, 1010 380, 970 380
               L 950 380
               C 940 330, 895 290, 840 290
               C 785 290, 740 330, 730 380
               L 350 380
               C 340 330, 295 290, 240 290
               C 185 290, 140 330, 130 380
               L 100 380
               C 85 365, 95 330, 120 300 Z"
            fill="url(#yellowBody)"
          />

          {/* Roof Line & Pillar High-Gloss Yellow */}
          <path
            d="M 330 205
               L 470 145
               L 670 145
               C 725 145, 785 168, 835 195
               L 815 210
               C 765 185, 710 162, 665 162
               L 485 162
               L 355 215 Z"
            fill="url(#yellowHighlight)"
          />

          {/* Side Windows & Pillars (Dark Tinted Glass) */}
          <path
            d="M 360 215
               L 478 160
               L 645 160
               L 645 220
               L 395 228 Z"
            fill="url(#darkGlass)"
          />
          <path
            d="M 660 160
               L 775 185
               L 805 215
               L 660 220 Z"
            fill="url(#darkGlass)"
          />

          {/* Window Chrome / Trim Separator */}
          <line x1="495" y1="160" x2="495" y2="225" stroke="#121518" strokeWidth="6" />
          <line x1="652" y1="160" x2="652" y2="225" stroke="#121518" strokeWidth="8" />

          {/* Sleek Aerodynamic Body Character Lines */}
          <path
            d="M 195 240 L 400 240 L 720 245 L 940 270"
            stroke="#D48E00"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M 230 270 L 440 268 L 740 275 L 960 295"
            stroke="#FFFFCC"
            strokeWidth="2"
            strokeOpacity="0.75"
            strokeLinecap="round"
          />

          {/* Door Shut Lines */}
          <path d="M 495 225 L 485 365" stroke="#996000" strokeWidth="2.5" />
          <path d="M 725 225 L 710 365" stroke="#996000" strokeWidth="2.5" />

          {/* Door Handles (Flush aerodynamic) */}
          <rect x="525" y="240" width="38" height="7" rx="3.5" fill="#B87700" stroke="#FFE76B" strokeWidth="1" />
          <rect x="735" y="246" width="38" height="7" rx="3.5" fill="#B87700" stroke="#FFE76B" strokeWidth="1" />

          {/* Front Bumper & Aggressive Side Air Intakes */}
          <path
            d="M 970 270 L 1040 310 L 1030 355 L 960 365 Z"
            fill="#1B1E22"
          />
          <path
            d="M 985 285 L 1025 315 L 1018 345 L 980 350 Z"
            fill="#0F1012"
          />
          {/* Front Headlight Accent (Signature Y-Shape LED) */}
          <polygon points="980,248 1035,275 1015,282 965,255" fill="#E6F4FF" opacity="0.9" />
          <path d="M 980 252 L 1015 268 L 995 272" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />

          {/* Rear Taillight Strip (Smoked LED) */}
          <polygon points="120 300 155 303 150 312 115 310" fill="#E5192E" />
          <path d="M 120 305 L 165 308" stroke="#FF4757" strokeWidth="3" />

          {/* Rear Lower Diffuser */}
          <path d="M 100 375 L 130 375 L 135 385 L 95 385 Z" fill="#14171A" />
          <circle cx="108" cy="380" r="5" fill="#333" stroke="#888" strokeWidth="1.5" />
          <circle cx="120" cy="380" r="5" fill="#333" stroke="#888" strokeWidth="1.5" />

          {/* Side Mirror */}
          <path
            d="M 460 210 L 430 200 C 420 200, 420 215, 430 220 L 460 220 Z"
            fill="#14171A"
            stroke="#D48E00"
            strokeWidth="2"
          />

          {/* Wheel Arch Moldings (Gloss Black Hexagonal Urus Style) */}
          <path
            d="M 130 380 C 135 310, 185 275, 240 275 C 295 275, 345 310, 350 380 L 335 380 C 330 320, 290 288, 240 288 C 190 288, 150 320, 145 380 Z"
            fill="#181B1F"
          />
          <path
            d="M 730 380 C 735 310, 785 275, 840 275 C 895 275, 945 310, 950 380 L 935 380 C 930 320, 890 288, 840 288 C 790 288, 750 320, 745 380 Z"
            fill="#181B1F"
          />

          {/* Front Wheel Assembly (At 840px) */}
          <g transform="translate(840, 375)">
            {/* Tire Outer */}
            <circle cx="0" cy="0" r="76" fill="url(#tireShadow)" stroke="#2D3136" strokeWidth="5" />
            <circle cx="0" cy="0" r="62" fill="#111315" />
            <circle cx="0" cy="0" r="58" stroke="#3D4146" strokeWidth="1.5" strokeDasharray="6 3" />
            {/* Brake Rotor */}
            <circle cx="0" cy="0" r="46" fill="#4B5056" stroke="#686E77" strokeWidth="2" />
            {/* Brake Caliper (Signature Lamborghini Urus Yellow) */}
            <path d="M 22 -32 C 38 -20, 44 -5, 42 15 L 30 12 C 32 -4, 28 -15, 16 -24 Z" fill="url(#caliperYellow)" stroke="#8C6200" strokeWidth="1" />
            <text x="28" y="-4" fill="#000" fontSize="5" fontWeight="bold" transform="rotate(70 28 -4)">LAMBORGHINI</text>
            {/* Urus Y-Spoke Rim */}
            <g stroke="#E5E7EB" strokeWidth="4" strokeLinecap="round">
              {[0, 72, 144, 216, 288].map((angle, i) => (
                <g key={i} transform={`rotate(${angle})`}>
                  <line x1="0" y1="0" x2="0" y2="48" stroke="#1F2226" strokeWidth="8" />
                  <line x1="0" y1="12" x2="-14" y2="46" stroke="#D1D5DB" strokeWidth="3.5" />
                  <line x1="0" y1="12" x2="14" y2="46" stroke="#D1D5DB" strokeWidth="3.5" />
                  <circle cx="0" cy="46" r="3" fill="#D1D5DB" />
                </g>
              ))}
            </g>
            {/* Center Hub */}
            <circle cx="0" cy="0" r="14" fill="#111" stroke="#FFCC00" strokeWidth="2" />
            <circle cx="0" cy="0" r="6" fill="#FFCC00" />
          </g>

          {/* Rear Wheel Assembly (At 240px) */}
          <g transform="translate(240, 375)">
            {/* Tire Outer */}
            <circle cx="0" cy="0" r="76" fill="url(#tireShadow)" stroke="#2D3136" strokeWidth="5" />
            <circle cx="0" cy="0" r="62" fill="#111315" />
            <circle cx="0" cy="0" r="58" stroke="#3D4146" strokeWidth="1.5" strokeDasharray="6 3" />
            {/* Brake Rotor */}
            <circle cx="0" cy="0" r="46" fill="#4B5056" stroke="#686E77" strokeWidth="2" />
            {/* Brake Caliper (Yellow) */}
            <path d="M 22 -32 C 38 -20, 44 -5, 42 15 L 30 12 C 32 -4, 28 -15, 16 -24 Z" fill="url(#caliperYellow)" stroke="#8C6200" strokeWidth="1" />
            {/* Y-Spoke Rim */}
            <g stroke="#E5E7EB" strokeWidth="4" strokeLinecap="round">
              {[0, 72, 144, 216, 288].map((angle, i) => (
                <g key={i} transform={`rotate(${angle})`}>
                  <line x1="0" y1="0" x2="0" y2="48" stroke="#1F2226" strokeWidth="8" />
                  <line x1="0" y1="12" x2="-14" y2="46" stroke="#D1D5DB" strokeWidth="3.5" />
                  <line x1="0" y1="12" x2="14" y2="46" stroke="#D1D5DB" strokeWidth="3.5" />
                  <circle cx="0" cy="46" r="3" fill="#D1D5DB" />
                </g>
              ))}
            </g>
            {/* Center Hub */}
            <circle cx="0" cy="0" r="14" fill="#111" stroke="#FFCC00" strokeWidth="2" />
            <circle cx="0" cy="0" r="6" fill="#FFCC00" />
          </g>
        </g>
      </svg>
    </div>
  );
}

// Center Green Lamborghini Urus (Front 3/4 Perspective)
export function GreenUrusShowcase({ className = "w-full max-w-2xl" }: { className?: string }) {
  return (
    <div className={`relative select-none ${className}`}>
      <svg
        viewBox="0 0 850 480"
        className="w-full h-auto drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="greenBody" x1="10%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stopColor="#70EA34" />
            <stop offset="35%" stopColor="#48C716" />
            <stop offset="70%" stopColor="#2F9C0A" />
            <stop offset="100%" stopColor="#1B6305" />
          </linearGradient>
          <linearGradient id="greenHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ADFF73" />
            <stop offset="100%" stopColor="#44C811" />
          </linearGradient>
          <radialGradient id="greenGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#55E81C" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#55E81C" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Ground Shadow */}
        <ellipse cx="425" cy="425" rx="380" ry="25" fill="#000000" fillOpacity="0.45" />

        {/* Hood & Windshield Structure */}
        <path
          d="M 210 220 
             L 330 120 
             L 530 120 
             L 660 215 
             L 760 270 
             L 775 320 
             L 750 370 
             L 680 405 
             L 580 405
             C 570 340, 500 290, 440 290
             C 380 290, 310 340, 300 405
             L 160 395 
             C 120 375, 105 340, 110 300
             L 135 260 Z"
          fill="url(#greenBody)"
        />

        {/* Windshield */}
        <path
          d="M 345 130 L 515 130 L 625 210 L 255 210 Z"
          fill="#131920"
        />
        <line x1="430" y1="130" x2="440" y2="210" stroke="#0B0E12" strokeWidth="4" />
        {/* Reflection across windshield */}
        <polygon points="360,135 410,135 340,205 290,205" fill="#FFFFFF" fillOpacity="0.12" />

        {/* Hood Surface with Sharp Urus Creases */}
        <path
          d="M 255 210 L 625 210 L 685 260 L 205 260 Z"
          fill="url(#greenHighlight)"
        />
        <path d="M 330 210 L 320 260" stroke="#1E6B07" strokeWidth="2.5" />
        <path d="M 550 210 L 560 260" stroke="#1E6B07" strokeWidth="2.5" />
        <path d="M 440 215 L 440 260" stroke="#1E6B07" strokeWidth="1.5" />

        {/* Front Nose & Hexagonal Grille */}
        <path
          d="M 205 260 L 685 260 L 710 330 L 660 375 L 225 375 L 180 330 Z"
          fill="#171A1E"
        />
        {/* Hex honeycomb pattern grille */}
        <g stroke="#262B32" strokeWidth="2">
          {[240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640].map((x, i) => (
            <line key={i} x1={x} y1="285" x2={x + 15} y2="360" />
          ))}
          <line x1="220" y1="305" x2="670" y2="305" />
          <line x1="210" y1="335" x2="680" y2="335" />
        </g>

        {/* Lamborghini Front Shield Badge */}
        <polygon points="440,268 447,272 447,284 440,289 433,284 433,272" fill="#FFD700" stroke="#000" strokeWidth="1" />

        {/* Iconic Y-Shape LED Headlights */}
        {/* Left Headlight */}
        <g>
          <polygon points="215,268 285,272 260,288 195,282" fill="#0A0C0E" />
          <path d="M 210 272 L 245 278 L 275 274" stroke="#E0F7FA" strokeWidth="4" strokeLinecap="round" />
          <path d="M 245 278 L 242 286" stroke="#E0F7FA" strokeWidth="3.5" strokeLinecap="round" />
        </g>
        {/* Right Headlight */}
        <g>
          <polygon points="675,268 605,272 630,288 695,282" fill="#0A0C0E" />
          <path d="M 680 272 L 645 278 L 615 274" stroke="#E0F7FA" strokeWidth="4" strokeLinecap="round" />
          <path d="M 645 278 L 648 286" stroke="#E0F7FA" strokeWidth="3.5" strokeLinecap="round" />
        </g>

        {/* Front Splitter Wings */}
        <path d="M 180 375 L 230 375 L 210 395 L 160 390 Z" fill="#0F1215" stroke="#3DCD14" strokeWidth="1" />
        <path d="M 660 375 L 710 375 L 730 390 L 680 395 Z" fill="#0F1215" stroke="#3DCD14" strokeWidth="1" />
        <rect x="260" y="380" width="370" height="15" rx="3" fill="#0B0D0F" stroke="#222" />

        {/* Left Wheel (3/4 angle) */}
        <g transform="translate(195, 370)">
          <ellipse cx="0" cy="0" rx="48" ry="60" fill="#121417" stroke="#2D3239" strokeWidth="4" />
          <ellipse cx="0" cy="0" rx="36" ry="46" fill="#1A1D22" />
          {/* Green brake caliper peeking */}
          <path d="M -15 -20 C 5 -25, 20 -15, 22 5" stroke="#48C716" strokeWidth="6" strokeLinecap="round" />
          {/* Spoke angles */}
          <line x1="-28" y1="-18" x2="28" y2="18" stroke="#4B515B" strokeWidth="4" />
          <line x1="-28" y1="18" x2="28" y2="-18" stroke="#4B515B" strokeWidth="4" />
          <ellipse cx="0" cy="0" rx="10" ry="12" fill="#111" stroke="#FFD700" strokeWidth="1.5" />
        </g>

        {/* Right Wheel (3/4 angle) */}
        <g transform="translate(685, 370)">
          <ellipse cx="0" cy="0" rx="48" ry="60" fill="#121417" stroke="#2D3239" strokeWidth="4" />
          <ellipse cx="0" cy="0" rx="36" ry="46" fill="#1A1D22" />
          {/* Caliper */}
          <path d="M -22 -20 C -5 -25, 10 -15, 15 5" stroke="#48C716" strokeWidth="6" strokeLinecap="round" />
          <line x1="-28" y1="-18" x2="28" y2="18" stroke="#4B515B" strokeWidth="4" />
          <line x1="-28" y1="18" x2="28" y2="-18" stroke="#4B515B" strokeWidth="4" />
          <ellipse cx="0" cy="0" rx="10" ry="12" fill="#111" stroke="#FFD700" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

// Yellow Porsche 911 (Left Carousel Peek)
export function YellowPorschePeek({ className = "w-72" }: { className?: string }) {
  return (
    <div className={`relative opacity-70 hover:opacity-100 transition-opacity cursor-pointer ${className}`}>
      <svg viewBox="0 0 450 300" className="w-full h-auto drop-shadow-lg" fill="none">
        <ellipse cx="260" cy="265" rx="180" ry="16" fill="#000" fillOpacity="0.35" />
        {/* Curvaceous 911 front fender & oval headlight */}
        <path
          d="M 50 240 
             C 65 190, 110 150, 175 140
             L 320 130
             C 380 130, 430 160, 440 210
             L 440 250
             L 370 250
             C 360 215, 320 190, 275 190
             C 230 190, 190 215, 180 250
             L 70 250 Z"
          fill="#F5B800"
        />
        {/* Classic round Porsche headlight */}
        <ellipse cx="140" cy="165" rx="24" ry="30" fill="#E8F4F8" stroke="#444" strokeWidth="3" />
        <ellipse cx="140" cy="165" rx="14" ry="18" fill="#FFF" stroke="#666" strokeWidth="1.5" />
        {/* Front bumper intake */}
        <path d="M 60 220 L 130 220 L 125 242 L 55 240 Z" fill="#181B1E" />
        {/* Wheel */}
        <circle cx="275" cy="245" r="42" fill="#151719" stroke="#333" strokeWidth="4" />
        <circle cx="275" cy="245" r="28" fill="#4B515B" />
        <circle cx="275" cy="245" r="8" fill="#111" stroke="#FFCC00" strokeWidth="1" />
      </svg>
    </div>
  );
}

// Dark Grey SUV (Right Carousel Peek)
export function DarkGreySuvPeek({ className = "w-72" }: { className?: string }) {
  return (
    <div className={`relative opacity-70 hover:opacity-100 transition-opacity cursor-pointer ${className}`}>
      <svg viewBox="0 0 450 300" className="w-full h-auto drop-shadow-lg" fill="none">
        <ellipse cx="200" cy="265" rx="180" ry="16" fill="#000" fillOpacity="0.35" />
        {/* Luxury SUV Front */}
        <path
          d="M 400 240
             C 385 190, 340 150, 275 140
             L 130 130
             C 70 130, 20 160, 10 210
             L 10 250
             L 80 250
             C 90 215, 130 190, 175 190
             C 220 190, 260 215, 270 250
             L 380 250 Z"
          fill="#374151"
        />
        {/* Dark metallic highlights */}
        <path d="M 130 135 L 275 145 L 360 200 L 160 190 Z" fill="#4B5563" />
        {/* Headlight */}
        <polygon points="310,165 350,172 345,188 300,180" fill="#E5E7EB" stroke="#111" strokeWidth="2" />
        {/* Grille */}
        <rect x="330" y="210" width="60" height="28" rx="4" fill="#111827" />
        {/* Wheel */}
        <circle cx="175" cy="245" r="42" fill="#111315" stroke="#374151" strokeWidth="4" />
        <circle cx="175" cy="245" r="28" fill="#1F2937" />
        <circle cx="175" cy="245" r="8" fill="#9CA3AF" />
      </svg>
    </div>
  );
}

// Red Porsche 911 Rear Perspective (RK71 AEC Plate on Open Country Road)
export function RedPorscheRear({ className = "w-full h-full" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-xl bg-neutral-900 group ${className}`}>
      {/* Background Country Road Landscape */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-emerald-800/40 to-neutral-800" />
      <svg
        viewBox="0 0 700 520"
        className="relative z-10 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#879AA8" />
            <stop offset="40%" stopColor="#B3C4D0" />
            <stop offset="60%" stopColor="#556B4E" />
            <stop offset="100%" stopColor="#35402F" />
          </linearGradient>
          <linearGradient id="roadGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4A4E53" />
            <stop offset="100%" stopColor="#25272A" />
          </linearGradient>
          <linearGradient id="porscheRed" x1="0%" y1="0%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="#FF3347" />
            <stop offset="40%" stopColor="#E5192E" />
            <stop offset="75%" stopColor="#BA0A1C" />
            <stop offset="100%" stopColor="#800410" />
          </linearGradient>
        </defs>

        {/* Sky & Distant Trees Landscape */}
        <rect width="700" height="340" fill="url(#skyGrad)" />
        <path d="M 0 240 Q 180 200 350 230 Q 520 260 700 220 L 700 340 L 0 340 Z" fill="#2E3C29" opacity="0.8" />
        
        {/* Asphalt Road & Dynamic Motion Blur */}
        <polygon points="120,340 580,340 700,520 0,520" fill="url(#roadGrad)" />
        <line x1="350" y1="340" x2="350" y2="520" stroke="#E5E7EB" strokeWidth="5" strokeDasharray="30 20" opacity="0.6" />

        {/* Shadow under car */}
        <ellipse cx="350" cy="460" rx="250" ry="24" fill="#000000" fillOpacity="0.75" />

        {/* Porsche Rear Body Shell */}
        {/* Roof & Rear Glass (Tapered Fastback) */}
        <path
          d="M 245 190 
             C 270 130, 320 115, 350 115 
             C 380 115, 430 130, 455 190
             L 510 240
             L 190 240 Z"
          fill="#11161B"
        />
        {/* Rear Engine Louvres / Grille with vertical cooling slats */}
        <path d="M 230 205 L 470 205 L 490 245 L 210 245 Z" fill="#0D0F12" />
        <g stroke="#374151" strokeWidth="2.5">
          {[245, 270, 295, 320, 345, 355, 380, 405, 430, 455].map((x, i) => (
            <line key={i} x1={x} y1="208" x2={x} y2="242" />
          ))}
        </g>
        {/* High-mounted 3rd brake light (vertical twin strip) */}
        <line x1="346" y1="212" x2="346" y2="238" stroke="#FF1E27" strokeWidth="3" />
        <line x1="354" y1="212" x2="354" y2="238" stroke="#FF1E27" strokeWidth="3" />

        {/* Broad Muscular Rear Fenders & Bumper */}
        <path
          d="M 190 240
             C 140 260, 100 310, 95 380
             L 115 440
             L 165 445
             C 175 420, 200 405, 225 405
             L 475 405
             C 500 405, 525 420, 535 445
             L 585 440
             L 605 380
             C 600 310, 560 260, 510 240
             Z"
          fill="url(#porscheRed)"
        />

        {/* Continuous Full-Width LED Rear Lightbar (992 Signature) */}
        <path
          d="M 125 315 
             C 210 305, 490 305, 575 315
             L 580 326
             C 490 316, 210 316, 120 326 Z"
          fill="#FF0820"
          filter="drop-shadow(0 0 8px #FF1E38)"
        />
        <path
          d="M 130 318 
             C 220 310, 480 310, 570 318"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          opacity="0.9"
        />

        {/* P O R S C H E 3D Letters */}
        <text
          x="350"
          y="342"
          fill="#3A0207"
          fontSize="11"
          fontWeight="bold"
          fontFamily="sans-serif"
          textAnchor="middle"
          letterSpacing="12"
          opacity="0.95"
        >
          PORSCHE
        </text>

        {/* License Plate Recess */}
        <rect x="270" y="360" width="160" height="42" rx="4" fill="#0D0E10" stroke="#2B0508" strokeWidth="2" />
        
        {/* UK Yellow License Plate: "RK71 AEC" exactly as seen in reference image! */}
        <rect x="276" y="365" width="148" height="32" rx="3" fill="#FACC15" />
        <rect x="278" y="367" width="14" height="28" fill="#1D4ED8" rx="1.5" />
        <text x="285" y="384" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">GB</text>
        <text
          x="355"
          y="388"
          fill="#000000"
          fontSize="20"
          fontWeight="800"
          fontFamily="'Space Grotesk', 'Syne', sans-serif"
          textAnchor="middle"
          letterSpacing="2.5"
        >
          RK71 AEC
        </text>

        {/* Rear Lower Diffuser & Dual Sport Exhausts */}
        <path d="M 160 440 L 540 440 L 520 465 L 180 465 Z" fill="#121518" />
        {/* Left Quad Exhaust Tip */}
        <ellipse cx="220" cy="452" rx="18" ry="11" fill="#1C1E22" stroke="#9CA3AF" strokeWidth="2.5" />
        <ellipse cx="220" cy="452" rx="13" ry="7" fill="#000000" />
        {/* Right Quad Exhaust Tip */}
        <ellipse cx="480" cy="452" rx="18" ry="11" fill="#1C1E22" stroke="#9CA3AF" strokeWidth="2.5" />
        <ellipse cx="480" cy="452" rx="13" ry="7" fill="#000000" />

        {/* Wide Rear Track Tires */}
        <rect x="92" y="390" width="35" height="60" rx="6" fill="#111315" />
        <rect x="573" y="390" width="35" height="60" rx="6" fill="#111315" />
      </svg>
    </div>
  );
}

// Card 1: Electrifying Cockpit Steering Wheel & Interior
export function CockpitInteriorImage({ className = "w-full h-48" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-lg bg-neutral-950 ${className}`}>
      <img
        src="/mercedes-amg-cockpit.jpg"
        alt="Mercedes-AMG Carbon Fiber Cockpit Steering Wheel"
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
      />
    </div>
  );
}

// Card 2: Flexible Hire For Business (Classic Muscle Car at Sunset)
export function RedPorscheRoadImage({ className = "w-full h-48" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-lg bg-neutral-900 ${className}`}>
      <img
        src="/red-mustang-sunset.jpg"
        alt="Classic Red Mustang Muscle Car at Sunset"
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
      />
    </div>
  );
}

// Card 3: Single vehicles to entire fleets (Black Camaro Exorcist on Track)
export function SilverPorscheRoadImage({ className = "w-full h-48" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-lg bg-neutral-900 ${className}`}>
      <img
        src="/black-camaro-exorcist.png"
        alt="Black Chevrolet Camaro Hennessey Exorcist"
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
      />
    </div>
  );
}

// Peeking scenic coastal drive card under workshop section
export function ScenicDriveCard() {
  return (
    <div className="relative w-full h-40 rounded-xl overflow-hidden bg-gradient-to-r from-sky-400 via-teal-500 to-indigo-600 shadow-md">
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute bottom-3 left-4 text-white">
        <p className="text-xs font-semibold tracking-wider uppercase text-amber-300">Exclusive Route</p>
        <p className="text-sm font-bold font-display">Pacific Coastline Concierge Delivery</p>
      </div>
    </div>
  );
}
