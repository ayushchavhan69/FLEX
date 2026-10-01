/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Share2 } from 'lucide-react';
import {
  CockpitInteriorImage,
  RedPorscheRoadImage,
  SilverPorscheRoadImage,
} from './CarArtwork';

export interface StoryArticle {
  id: string;
  day: string;
  dateStr: string;
  title: string;
  excerpt: string;
  fullText: string;
  image?: string;
  component: React.ReactNode;
}

export const STORIES: StoryArticle[] = [
  {
    id: 'story-1',
    day: '25',
    dateStr: 'December\n2023',
    title: 'Electrifying of the Experience',
    excerpt: 'Integrating high performance techno into a new design.',
    image: '/mercedes-amg-cockpit.jpg',
    fullText:
      'The modern luxury cockpit merges high-resolution digital telemetry with handcrafted tactile controls. Our latest fleet vehicles feature twin-turbo hybrid assistance, reactive steering feel, and active suspension dampening designed for effortless high-speed touring and urban elegance alike.',
    component: <CockpitInteriorImage />,
  },
  {
    id: 'story-2',
    day: '04',
    dateStr: 'December\n2022',
    title: 'FLEXIBLE HIRE FOR BUSINESS',
    excerpt: 'When we develop our cars, we always focus on the details.',
    image: '/red-mustang-sunset.jpg',
    fullText:
      'From executive airport transfers in the Lamborghini Urus to high-profile corporate events and VIP hospitality, our flexible corporate accounts offer seamless doorstep delivery, dedicated account managers, and white-glove roadside assistance.',
    component: <RedPorscheRoadImage />,
  },
  {
    id: 'story-3',
    day: '18',
    dateStr: 'November\n2022',
    title: 'Single vehicles to entire fleets',
    excerpt: 'Get in touch if you need expert advice on anything.',
    image: '/black-camaro-exorcist.png',
    fullText:
      'Whether you are looking to experience a weekend track machine or coordinating an entire convoy of exotic performance vehicles for film production or luxury escapes, our bespoke fleet logistics ensure perfection down to the millimeter.',
    component: <SilverPorscheRoadImage />,
  },
];

interface StoriesSectionProps {
  onReadStory: (story: StoryArticle) => void;
  onShareStory?: (story: StoryArticle) => void;
  onOpenBlog?: () => void;
}

export function StoriesSection({ onReadStory, onShareStory, onOpenBlog }: StoriesSectionProps) {
  return (
    <section id="stories-section" className="w-full py-12 sm:py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Headline */}
        <div className="text-center mb-8 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-wide uppercase leading-tight drop-shadow-md">
            STORIES BEHIND
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-amber-400">
              THE WHEEL
            </span>
          </h2>
        </div>

        {/* 3 Story Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {STORIES.map((story) => (
            <article
              key={story.id}
              onClick={() => onReadStory(story)}
              className="flex flex-col justify-between group cursor-pointer bg-black/50 backdrop-blur-2xl border border-white/15 p-4 sm:p-6 rounded-2xl hover:border-amber-400/50 transition-all shadow-2xl hover:scale-[1.02] active:scale-[0.99]"
            >
              {/* Header: Date + Share Button + Title + Excerpt */}
              <div className="space-y-3 mb-5 sm:mb-6">
                {/* Date layout: Big Day Number + Month & Year + Share Button */}
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-4xl font-extrabold font-heading text-white">
                      {story.day}
                    </span>
                    <div className="text-[10px] uppercase font-bold text-amber-400 leading-tight whitespace-pre-line">
                      {story.dateStr}
                    </div>
                  </div>

                  {onShareStory && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onShareStory(story);
                      }}
                      className="p-2 rounded-full text-neutral-400 hover:text-amber-400 hover:bg-white/10 transition-all active:scale-90 border border-white/5 hover:border-white/20 cursor-pointer"
                      title="Share Article"
                      aria-label={`Share ${story.title}`}
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Article Title */}
                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                  {story.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-neutral-300 leading-relaxed font-sans line-clamp-2">
                  {story.excerpt}
                </p>
              </div>

              {/* Visual Card */}
              <div className="w-full rounded-xl overflow-hidden shadow-lg border border-white/10 group-hover:border-white/20 transition-all">
                {story.component}
              </div>
            </article>
          ))}
        </div>

        {/* Center Action Button */}
        <div className="mt-8 sm:mt-14 flex justify-center">
          <button
            onClick={() => {
              if (onOpenBlog) {
                onOpenBlog();
              } else {
                window.location.hash = '#/blog';
              }
            }}
            className="w-full sm:w-auto px-7 py-3 text-xs font-bold text-neutral-950 bg-[#EFA531] hover:bg-amber-400 rounded-xl transition-all shadow-lg active:scale-95 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Explore All Journal Articles</span>
          </button>
        </div>
      </div>
    </section>
  );
}
