/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, Calendar, Clock, Share2 } from 'lucide-react';
import { StoryArticle } from './StoriesSection';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  story: StoryArticle | null;
  onShare?: (story: StoryArticle) => void;
}

export function StoryModal({ isOpen, onClose, story, onShare }: StoryModalProps) {
  if (!isOpen || !story) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in text-white">
      <div className="bg-neutral-900/95 backdrop-blur-2xl rounded-2xl max-w-2xl w-full p-5 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto border border-white/20">
        <div className="absolute top-4 right-4 sm:top-5 sm:right-5 flex items-center gap-1.5">
          {onShare && (
            <button
              onClick={() => onShare(story)}
              className="p-2 rounded-full text-neutral-400 hover:text-amber-400 hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Share article"
              title="Share Article"
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
          <div className="flex items-center gap-2 sm:gap-3 text-xs text-amber-400 font-bold uppercase tracking-wider mb-2">
            <span>Stories Behind the Wheel</span>
            <span>·</span>
            <span>{story.day} {story.dateStr.replace('\n', ' ')}</span>
          </div>

          <h3 className="text-xl sm:text-3xl font-black text-white font-heading leading-tight mb-3 sm:mb-4">
            {story.title}
          </h3>

          <div className="w-full rounded-xl overflow-hidden mb-5 sm:mb-6 shadow-md border border-white/15">
            {story.component}
          </div>

          <div className="prose text-neutral-300 text-xs sm:text-sm leading-relaxed space-y-3.5 sm:space-y-4">
            <p className="font-semibold text-white text-sm sm:text-base">{story.excerpt}</p>
            <p>{story.fullText}</p>
            <p>
              Each vehicle in our exclusive fleet undergoes rigorous 150-point precision checks before any delivery.
              Whether cruising through coastal canyons or commanding attention at city galas, experience automotive engineering at its pinnacle.
            </p>
          </div>

          <div className="mt-6 sm:mt-8 pt-4 border-t border-white/10 flex items-center justify-between gap-2.5">
            <button
              onClick={onClose}
              className="px-4 sm:px-5 py-2 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors cursor-pointer"
            >
              Back to Stories
            </button>
            <button
              onClick={() => {
                if (onShare) {
                  onShare(story);
                } else if (navigator.clipboard) {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Article link copied to clipboard!');
                }
              }}
              className="flex items-center gap-1.5 text-xs font-semibold text-neutral-300 hover:text-amber-400 transition-colors py-2 px-3 rounded-xl hover:bg-white/5 active:scale-95 cursor-pointer"
            >
              <Share2 className="w-4 h-4 text-amber-400" />
              <span>Share Article</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
