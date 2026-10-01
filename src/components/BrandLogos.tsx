/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function BrandLogos() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 my-4 sm:my-8 bg-black/40 backdrop-blur-xl border-y border-white/10 rounded-2xl">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 md:gap-12 items-center justify-items-center opacity-85 hover:opacity-100 transition-opacity">
        {/* Porsche */}
        <div className="h-10 flex items-center justify-center grayscale hover:grayscale-0 transition-all hover:scale-105 cursor-pointer">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <img
              src="/porsche-crest-logo.png"
              alt="Porsche Crest Logo"
              className="h-8 sm:h-10 w-auto object-contain drop-shadow-md"
            />
            <span className="font-heading text-sm sm:text-lg font-bold tracking-wider text-white">Porsche</span>
          </div>
        </div>

        {/* Lamborghini Shield */}
        <div className="h-10 flex items-center justify-center grayscale hover:grayscale-0 transition-all hover:scale-105 cursor-pointer">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <img
              src="/lamborghini-shield-logo.png"
              alt="Lamborghini Shield Logo"
              className="h-8 sm:h-10 w-auto object-contain drop-shadow-md"
            />
            <span className="font-heading text-sm sm:text-lg font-bold tracking-wider text-white">Lamborghini</span>
          </div>
        </div>

        {/* Ferrari */}
        <div className="h-10 flex items-center justify-center grayscale hover:grayscale-0 transition-all hover:scale-105 cursor-pointer">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <img
              src="/ferrari-shield-logo.png"
              alt="Ferrari Scuderia Shield Logo"
              className="h-8 sm:h-10 w-auto object-contain drop-shadow-md"
            />
            <span className="font-heading text-sm sm:text-lg font-bold tracking-wider text-white">Ferrari</span>
          </div>
        </div>

        {/* BMW */}
        <div className="h-10 flex items-center justify-center grayscale hover:grayscale-0 transition-all hover:scale-105 cursor-pointer">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <img
              src="/bmw-roundel-logo.png"
              alt="BMW Roundel Emblem Logo"
              className="h-8 sm:h-10 w-auto object-contain drop-shadow-md"
            />
            <span className="font-heading text-sm sm:text-lg font-bold tracking-wider text-white">BMW</span>
          </div>
        </div>
      </div>
    </section>
  );
}
