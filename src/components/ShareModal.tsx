/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  X,
  Share2,
  Copy,
  Check,
  Mail,
  Send,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

export interface SharePayload {
  title: string;
  text: string;
  url?: string;
  image?: string;
  category?: string;
}

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: SharePayload | null;
}

export function ShareModal({ isOpen, onClose, data }: ShareModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !data) return null;

  const currentUrl = typeof window !== 'undefined' ? (data.url || window.location.href) : '';
  const shareTitle = data.title || 'Flex Luxury Car Rental';
  const shareText = data.text || 'Experience next-generation luxury automotive rental.';

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(currentUrl);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = currentUrl;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy link', err);
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: currentUrl,
        });
        onClose();
      } catch (err) {
        // User dismissed native share sheet
      }
    }
  };

  const shareChannels = [
    {
      name: 'WhatsApp',
      color: 'bg-emerald-500 hover:bg-emerald-400 text-white',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      ),
      action: () => {
        const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + '\n' + shareText + '\n' + currentUrl)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
      },
    },
    {
      name: 'X (Twitter)',
      color: 'bg-neutral-800 hover:bg-neutral-700 text-white',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      action: () => {
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(currentUrl)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
      },
    },
    {
      name: 'Facebook',
      color: 'bg-blue-600 hover:bg-blue-500 text-white',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      action: () => {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
      },
    },
    {
      name: 'LinkedIn',
      color: 'bg-[#0A66C2] hover:bg-[#084e96] text-white',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      action: () => {
        const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
      },
    },
    {
      name: 'Telegram',
      color: 'bg-sky-500 hover:bg-sky-400 text-white',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      ),
      action: () => {
        const url = `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareTitle)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
      },
    },
    {
      name: 'Email',
      color: 'bg-amber-600 hover:bg-amber-500 text-white',
      icon: <Mail className="w-5 h-5" />,
      action: () => {
        const url = `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareText + '\n\n' + currentUrl)}`;
        window.location.href = url;
      },
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in text-white">
      <div className="bg-neutral-900/95 border border-white/20 rounded-3xl max-w-lg w-full p-5 sm:p-7 shadow-2xl relative overflow-hidden backdrop-blur-2xl max-h-[92vh] overflow-y-auto">
        {/* Glow accent */}
        <div className="absolute -top-16 -right-16 w-36 h-36 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10 mb-4 sm:mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center border border-amber-400/30 shrink-0">
              <Share2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-heading text-white">
                Share Content
              </h3>
              <p className="text-[10px] sm:text-[11px] text-neutral-400">Share with friends, colleagues & socials</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close share dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Preview Box */}
        <div className="p-3 sm:p-3.5 bg-black/40 border border-white/10 rounded-2xl mb-4 sm:mb-5 flex gap-3 sm:gap-3.5 items-center">
          {data.image && (
            <img
              src={data.image}
              alt={data.title}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover border border-white/15 shrink-0"
            />
          )}
          <div className="min-w-0 flex-1">
            {data.category && (
              <span className="text-[9px] font-bold text-amber-400 uppercase tracking-wider block mb-0.5">
                {data.category}
              </span>
            )}
            <h4 className="text-xs sm:text-sm font-bold text-white truncate">
              {data.title}
            </h4>
            <p className="text-[10px] sm:text-[11px] text-neutral-400 truncate mt-0.5 font-sans">
              {data.text}
            </p>
          </div>
        </div>

        {/* Social Share Grid */}
        <div className="mb-5 sm:mb-6">
          <p className="text-[10px] sm:text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-2.5 sm:mb-3">
            Share directly via
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-2.5">
            {shareChannels.map((channel) => (
              <button
                key={channel.name}
                onClick={channel.action}
                className="flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all hover:scale-105 active:scale-95 group cursor-pointer"
                title={`Share on ${channel.name}`}
              >
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center mb-1.5 shadow-md ${channel.color} transition-transform group-hover:scale-110`}
                >
                  {channel.icon}
                </div>
                <span className="text-[9px] sm:text-[10px] text-neutral-300 font-medium group-hover:text-white truncate max-w-full">
                  {channel.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Copy Link Input Bar */}
        <div>
          <p className="text-[10px] sm:text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-2">
            Or Copy Link
          </p>
          <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 pl-2.5 sm:pl-3 bg-black/60 border border-white/15 focus-within:border-amber-400/80 rounded-xl transition-colors">
            <input
              type="text"
              readOnly
              value={currentUrl}
              className="w-full bg-transparent text-[11px] sm:text-xs text-neutral-300 focus:outline-none select-all truncate font-mono"
            />
            <button
              onClick={handleCopyLink}
              className={`px-3 sm:px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 shrink-0 transition-all shadow-md active:scale-95 cursor-pointer ${
                copied
                  ? 'bg-emerald-500 text-white shadow-emerald-500/20'
                  : 'bg-[#EFA531] hover:bg-amber-400 text-neutral-950 shadow-amber-500/20'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Native Web Share Button (if supported) */}
        {typeof navigator !== 'undefined' && 'share' in navigator && (
          <div className="mt-4 pt-4 border-t border-white/10 flex justify-center">
            <button
              onClick={handleNativeShare}
              className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1.5 font-semibold transition-colors py-1 px-3 rounded-lg hover:bg-white/5 cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Use system share menu</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
