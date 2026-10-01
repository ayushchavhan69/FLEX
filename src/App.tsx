/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BackgroundScrollAnimation } from './components/BackgroundScrollAnimation';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServiceWorkshopSection } from './components/ServiceWorkshopSection';
import { DreamCarSection, FLEET_CARS, CarFleetItem } from './components/DreamCarSection';
import { StoriesSection, StoryArticle } from './components/StoriesSection';
import { BrandLogos } from './components/BrandLogos';
import { MobileAppSection } from './components/MobileAppSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { CarDetailsModal } from './components/CarDetailsModal';
import { StoryModal } from './components/StoryModal';
import { ShareModal, SharePayload } from './components/ShareModal';
import { UserProfileData, DEFAULT_USER } from './components/UserProfileModal';
import { AuthPage } from './components/AuthPage';
import { BlogPage, DetailedBlogPost } from './components/BlogPage';

export default function App() {
  const [selectedCar, setSelectedCar] = useState<CarFleetItem>(FLEET_CARS[0]);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfileData>(() => {
    try {
      const saved = localStorage.getItem('flex_user_profile');
      return saved ? JSON.parse(saved) : DEFAULT_USER;
    } catch {
      return DEFAULT_USER;
    }
  });

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    try {
      return localStorage.getItem('flex_is_logged_in') === 'true';
    } catch {
      return false;
    }
  });

  const [activeStory, setActiveStory] = useState<StoryArticle | null>(null);
  const [shareData, setShareData] = useState<SharePayload | null>(null);
  const [isShareOpen, setIsShareOpen] = useState(false);

  // View state: 'home' | 'auth' | 'blog'
  const [currentView, setCurrentView] = useState<'home' | 'auth' | 'blog'>('home');
  const [authTab, setAuthTab] = useState<'login' | 'register'>('login');

  React.useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      if (hash === '#/login' || hash === '#login') {
        setAuthTab('login');
        setCurrentView('auth');
      } else if (hash === '#/register' || hash === '#register' || hash === '#/signup') {
        setAuthTab('register');
        setCurrentView('auth');
      } else if (
        hash === '#/blog' ||
        hash === '#blog' ||
        hash === '#/journal' ||
        hash === '#journal' ||
        hash.startsWith('#/blog/')
      ) {
        setCurrentView('blog');
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const handleOpenAuth = (tab: 'login' | 'register' = 'login') => {
    setAuthTab(tab);
    setCurrentView('auth');
    window.location.hash = `#/${tab}`;
  };

  const handleOpenBlog = () => {
    setCurrentView('blog');
    window.location.hash = '#/blog';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    if (
      window.location.hash.startsWith('#/login') ||
      window.location.hash.startsWith('#/register') ||
      window.location.hash.startsWith('#/blog') ||
      window.location.hash.startsWith('#/journal')
    ) {
      history.pushState('', document.title, window.location.pathname + window.location.search);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToSection = (id: string) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      history.pushState('', document.title, window.location.pathname + window.location.search);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleLoginSuccess = (userEmail: string, userName?: string) => {
    const derivedName = userName || userEmail.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
    const updated = {
      ...userProfile,
      name: derivedName,
      email: userEmail,
    };
    setUserProfile(updated);
    setIsLoggedIn(true);
    try {
      localStorage.setItem('flex_user_profile', JSON.stringify(updated));
      localStorage.setItem('flex_is_logged_in', 'true');
    } catch (e) {
      console.error(e);
    }
    handleBackToHome();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    try {
      localStorage.removeItem('flex_is_logged_in');
    } catch (e) {
      console.error(e);
    }
  };

  const [searchParams, setSearchParams] = useState({
    vehicleType: 'Car',
    location: 'Dallas, Texas',
    start: 'Oct 16, 11:00 AM',
    stop: 'Oct 18, 5:00 PM',
  });

  const handleSearch = (params: typeof searchParams) => {
    setSearchParams(params);
    const fleetEl = document.getElementById('fleet-section');
    if (fleetEl) {
      fleetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollDown = () => {
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRentNow = (car: CarFleetItem) => {
    setSelectedCar(car);
    setIsBookingOpen(true);
  };

  const handleViewDetails = (car: CarFleetItem) => {
    setSelectedCar(car);
    setIsDetailsOpen(true);
  };

  const handleReadStory = (story: StoryArticle) => {
    setActiveStory(story);
  };

  const handleShareStory = (story: StoryArticle) => {
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    setShareData({
      title: story.title,
      text: story.excerpt,
      url: `${origin}/#stories-section`,
      image: story.image,
      category: `Stories Behind The Wheel · ${story.day} ${story.dateStr.replace('\n', ' ')}`,
    });
    setIsShareOpen(true);
  };

  const handleShareBlogPost = (post: DetailedBlogPost) => {
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    setShareData({
      title: post.title,
      text: post.excerpt,
      url: `${origin}/#/blog/${post.slug}`,
      image: post.image,
      category: `FLEX Journal · ${post.category} (${post.date})`,
    });
    setIsShareOpen(true);
  };

  const handleShareCar = (car: CarFleetItem) => {
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    setShareData({
      title: `${car.name} (${car.model})`,
      text: `Rent the ${car.name} starting from $${car.dailyRate}/day with white-glove doorstep delivery.`,
      url: `${origin}/#fleet-section`,
      image: car.image,
      category: `${car.category} · ${car.topSpeed} · ${car.transmission}`,
    });
    setIsShareOpen(true);
  };

  const handleShareSite = () => {
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    setShareData({
      title: 'FLEX - Luxury Exotic & Performance Car Rental',
      text: 'Experience next-generation exotic and performance vehicle rentals with 24/7 concierge delivery.',
      url: origin,
      image: '/yellow-bmw-m4.png',
      category: 'Luxury Fleet Service',
    });
    setIsShareOpen(true);
  };

  if (currentView === 'auth') {
    return (
      <AuthPage
        onBackToHome={handleBackToHome}
        onLoginSuccess={handleLoginSuccess}
        initialTab={authTab}
      />
    );
  }

  if (currentView === 'blog') {
    return (
      <div className="min-h-screen w-full bg-neutral-950 text-white flex flex-col font-sans selection:bg-amber-400 selection:text-neutral-950 relative overflow-x-hidden">
        <BlogPage
          onBackToHome={handleBackToHome}
          onRentCar={(car) => {
            handleBackToHome();
            setTimeout(() => {
              handleRentNow(car);
            }, 100);
          }}
          onSharePost={handleShareBlogPost}
        />

        <Footer
          onShareSite={handleShareSite}
          onOpenAuth={handleOpenAuth}
          onOpenBlog={handleOpenBlog}
          onNavigateToSection={handleNavigateToSection}
        />

        {/* Modals available while in blog */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          car={selectedCar}
          initialParams={searchParams}
        />

        <ShareModal
          isOpen={isShareOpen}
          onClose={() => setIsShareOpen(false)}
          data={shareData}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-transparent text-white flex flex-col font-sans selection:bg-amber-400 selection:text-neutral-950 relative overflow-x-hidden">
      {/* Background Canvas Scroll Animation */}
      <BackgroundScrollAnimation />

      {/* Top Navigation */}
      <Navbar
        onOpenBooking={() => setIsBookingOpen(true)}
        onShareSite={handleShareSite}
        onOpenAuth={handleOpenAuth}
        onOpenBlog={handleOpenBlog}
        isLoggedIn={isLoggedIn}
        user={isLoggedIn ? userProfile : null}
        onLogout={handleLogout}
      />

      <main className="flex-1 w-full relative z-10">
        {/* Component 1: Hero Section with Yellow Urus, Glass Search Card & Down Indicator */}
        <HeroSection
          onSearch={handleSearch}
          onScrollDown={handleScrollDown}
        />

        {/* Component 2: Workshop & Fleet Feature with Red Porsche 911 (RK71 AEC) */}
        <ServiceWorkshopSection
          onSeeAllCars={() => {
            const el = document.getElementById('fleet-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Component 3: Pick Your Dream Car Today with Green Urus Carousel & Specs */}
        <DreamCarSection
          onRentNow={handleRentNow}
          onViewDetails={handleViewDetails}
          onShareCar={handleShareCar}
        />

        {/* Component 4: Stories Behind the Wheel (3 Editorial Cards) */}
        <StoriesSection
          onReadStory={handleReadStory}
          onShareStory={handleShareStory}
          onOpenBlog={handleOpenBlog}
        />

        {/* Component 5: Brand Trust Logos Row */}
        <BrandLogos />

        {/* Component 6: Mobile App Experience with iPhone Frame */}
        <MobileAppSection />
      </main>

      {/* Component 7: Newsletter & Dark Footer */}
      <Footer
        onShareSite={handleShareSite}
        onOpenAuth={handleOpenAuth}
        onOpenBlog={handleOpenBlog}
        onNavigateToSection={handleNavigateToSection}
      />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        car={selectedCar}
        initialParams={searchParams}
      />

      <CarDetailsModal
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        car={selectedCar}
        onRentNow={handleRentNow}
        onShareCar={handleShareCar}
      />

      <StoryModal
        isOpen={!!activeStory}
        onClose={() => setActiveStory(null)}
        story={activeStory}
        onShare={handleShareStory}
      />

      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        data={shareData}
      />
    </div>
  );
}
