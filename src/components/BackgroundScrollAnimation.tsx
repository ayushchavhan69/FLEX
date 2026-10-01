import React, { useEffect, useRef } from 'react';

const TOTAL_FRAMES = 216;

const getFrameUrl = (index: number) => {
  const frameNumber = String(index + 1).padStart(3, '0');
  return `/frames/ezgif-frame-${frameNumber}.jpg`;
};

export function BackgroundScrollAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    let currentProgress = 0;
    let targetProgress = 0;
    let lastDrawnIndex = -1;
    let needsRedraw = true;
    let animationFrameId: number;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      needsRedraw = true;
    };

    const drawCover = (img: HTMLImageElement) => {
      if (!img || !img.naturalWidth || !img.naturalHeight) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;

      const scale = Math.max(cw / iw, ch / ih);
      const dw = iw * scale;
      const dh = ih * scale;
      const ox = (cw - dw) / 2;
      const oy = (ch - dh) / 2;

      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, cw, ch);
      ctx.drawImage(img, 0, 0, iw, ih, ox, oy, dw, dh);
    };

    const getBestAvailableFrame = (index: number) => {
      if (images[index] && images[index].complete && images[index].naturalWidth > 0) {
        return images[index];
      }

      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const prev = index - offset;
        if (prev >= 0 && images[prev]?.complete && images[prev]?.naturalWidth > 0) {
          return images[prev];
        }
        const next = index + offset;
        if (next < TOTAL_FRAMES && images[next]?.complete && images[next]?.naturalWidth > 0) {
          return images[next];
        }
      }

      return null;
    };

    const calculateProgress = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      return Math.min(Math.max(scrollY / maxScroll, 0), 1);
    };

    const preloadImages = () => {
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        const img = new Image();
        img.src = getFrameUrl(i);
        images[i] = img;

        img.onload = () => {
          if (i === 0 || i === Math.round(currentProgress * (TOTAL_FRAMES - 1))) {
            needsRedraw = true;
          }
        };
      }
    };

    const loop = () => {
      targetProgress = calculateProgress();

      const delta = targetProgress - currentProgress;
      if (Math.abs(delta) > 0.0001) {
        currentProgress += delta * 0.18;
      } else {
        currentProgress = targetProgress;
      }

      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.round(currentProgress * (TOTAL_FRAMES - 1)))
      );

      if (frameIndex !== lastDrawnIndex || needsRedraw) {
        const img = getBestAvailableFrame(frameIndex);
        if (img) {
          drawCover(img);
          lastDrawnIndex = frameIndex;
          needsRedraw = false;
        }
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    window.addEventListener('resize', resizeCanvas, { passive: true });
    window.addEventListener('scroll', () => { targetProgress = calculateProgress(); }, { passive: true });

    resizeCanvas();
    preloadImages();
    animationFrameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none overflow-hidden bg-black">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover block"
      />
      {/* Subtle cinematic gradient vignette to keep luxury text razor-sharp while keeping the video bright & visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
    </div>
  );
}
