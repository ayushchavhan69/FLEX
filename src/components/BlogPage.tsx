/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Bookmark,
  Search,
  ChevronRight,
  Sparkles,
  Car,
  ShieldCheck,
  TrendingUp,
  Award,
  Eye,
  Heart,
  MessageSquare,
  X,
  Send,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import {
  CockpitInteriorImage,
  RedPorscheRoadImage,
  SilverPorscheRoadImage,
  StarAccent,
} from './CarArtwork';
import { FLEET_CARS, CarFleetItem } from './DreamCarSection';

export interface DetailedBlogPost {
  id: string;
  slug: string;
  category: 'Supercars' | 'Road Trips' | 'Technology' | 'VIP Lifestyle' | 'Guides';
  title: string;
  subtitle: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  views: string;
  likes: number;
  featured?: boolean;
  image: string;
  componentArtwork?: React.ReactNode;
  tags: string[];
  specs?: {
    vehicleName: string;
    engine: string;
    power: string;
    topSpeed: string;
    accel: string;
  };
  chapters: {
    heading: string;
    content: string[];
    quote?: string;
    keyPoints?: string[];
  }[];
  relatedCarId?: string;
}

export const BLOG_POSTS: DetailedBlogPost[] = [
  {
    id: 'post-1',
    slug: 'electrifying-the-exotic-experience',
    category: 'Technology',
    featured: true,
    title: 'Electrifying the Exotic Experience: Hybrid V8s & Telemetric Mastery',
    subtitle: 'How instant electric torque is transforming 200+ mph supercar dynamics without sacrificing acoustic soul.',
    excerpt: 'The modern exotic cockpit merges high-resolution digital telemetry with handcrafted tactile controls, yielding breathtaking track capability and effortless cruising.',
    author: {
      name: 'Marcus Vance',
      role: 'Chief Fleet Curator & Test Driver',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
    date: 'Oct 01, 2026',
    readTime: '6 min read',
    views: '4.8k',
    likes: 342,
    image: '/mercedes-amg-cockpit.jpg',
    componentArtwork: <CockpitInteriorImage />,
    tags: ['Hybrid Powertrain', 'Telemetry', 'Cockpit Design', 'Performance'],
    specs: {
      vehicleName: 'Ferrari 296 GTB Hybrid',
      engine: '3.0L Twin-Turbo V6 + Electric Motor',
      power: '819 HP / 546 lb-ft',
      topSpeed: '205 MPH',
      accel: '0-60 in 2.7s',
    },
    chapters: [
      {
        heading: '1. The Convergence of High-Voltage Power and Internal Combustion',
        content: [
          'For decades, exotic automotive engineering relied solely on displacement and atmospheric induction to create emotional exhilaration. Today, a new renaissance has arrived. By pairing high-revving turbocharged engines with axial-flux electric motors, modern hypercars deliver zero-lag instant torque off the line, followed by a stratospheric top-end rush.',
          'Behind the wheel of our Ferrari and Porsche hybrid units, drivers experience instantaneous throttle response that traditional mechanical drivetrains could never match. The transition between full electric stealth in quiet hotel districts and thunderous quad-exhaust acceleration on the open highway occurs with seamless algorithmic precision.',
        ],
        quote: 'Instant electric torque fills the power curve perfectly, eliminating turbo lag while preserving the intoxicating symphony of a high-revving performance engine.',
      },
      {
        heading: '2. Real-Time Telemetry & Driver Dynamic Mapping',
        content: [
          'Every vehicle in the FLEX fleet is equipped with real-time cloud-linked telemetry. As you navigate twisting mountain passes or coastal switchbacks, active dampers adjust valving hundreds of times per second, calculating yaw rates, tire slip angles, and surface temperatures.',
          'On your central display, drivers can monitor real-time G-forces, tire contact patch heat levels, and active aero blade angles. This provides absolute peace of mind, allowing you to focus on the pure, visceral joy of driving.',
        ],
        keyPoints: [
          'Axial-flux electric assist provides 167+ HP of immediate boost.',
          'Dynamic yaw vectoring ensures surgical cornering grip.',
          'Active cabin noise harmonic tuning amplifies pure mechanical exhaust notes.',
        ],
      },
      {
        heading: '3. The Future of Luxury Rental Mobility',
        content: [
          'At FLEX, our mission is to place you at the leading edge of automotive innovation. Our white-glove concierge delivers these electrified masterpieces fully charged and detailed to showroom perfection, complete with personalized drive-mode calibration tailored to your driving route.',
        ],
      },
    ],
    relatedCarId: 'bmw-m4',
  },
  {
    id: 'post-2',
    slug: 'pacific-coast-highway-porsche-911-gt3',
    category: 'Road Trips',
    title: 'Pacific Coast Highway in a Porsche 911 GT3: The 500-Mile Masterclass',
    subtitle: 'From the cliffs of Big Sur to Monterey Bay: Navigating America’s most iconic scenic highway.',
    excerpt: 'Sharp coastal curves, the howl of a 9,000 RPM naturally aspirated flat-six, and sunset over the Pacific. An unforgettable driving itinerary.',
    author: {
      name: 'Elena Rostova',
      role: 'Luxury Travel & Escapes Editor',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    },
    date: 'Sep 28, 2026',
    readTime: '8 min read',
    views: '6.2k',
    likes: 519,
    image: '/red-mustang-sunset.jpg',
    componentArtwork: <RedPorscheRoadImage />,
    tags: ['California Route 1', 'Porsche 911', 'Scenic Drives', 'Travel Guide'],
    specs: {
      vehicleName: 'Porsche 911 GT3 RS (992)',
      engine: '4.0L Naturally Aspirated Boxer-6',
      power: '518 HP @ 8,500 RPM',
      topSpeed: '184 MPH',
      accel: '0-60 in 3.0s',
    },
    chapters: [
      {
        heading: '1. Departing Carmel-by-the-Sea at Dawn',
        content: [
          'Morning fog still hovers over the pine groves of Carmel as you press the tactile start dial of the 911 GT3. The boxer-six settles into a purposeful, mechanical idle. Route 1 stretches south towards Big Sur with sweeping turns carved into sheer granite cliffs.',
          'With rear-axle steering actively tucking the chassis into high-camber apexes, the car feels weightless. Every crest and elevation change is communicated directly through the Alcantara steering wheel.',
        ],
        quote: 'The 911 GT3 does not simply drive down the Pacific Coast Highway; it carves it like a surgeon with a laser-focused chassis.',
      },
      {
        heading: '2. Waypoints, Fuel Stops & Coastal Havens',
        content: [
          'We recommend pausing at the Bixby Creek Bridge vista point for photography before continuing towards the Post Ranch Inn for cliffside lunch. For fueling, always select 93+ premium octane available at dedicated coastal stations.',
          'FLEX concierges can coordinate luggage transit directly to your resort destination so your cockpit remains lightweight and driver-focused throughout the journey.',
        ],
        keyPoints: [
          'Bixby Creek Bridge: Golden hour arrival for dramatic lighting.',
          'Pfeiffer Beach: Rugged rock arches and coastal breeze.',
          'Ragged Point: Sweeping 180-degree coastal switchbacks.',
        ],
      },
    ],
    relatedCarId: 'porsche-911',
  },
  {
    id: 'post-3',
    slug: 'flexible-vip-hire-for-business',
    category: 'VIP Lifestyle',
    title: 'Flexible VIP Hire for High-Stakes Business, Private Hangars & Events',
    subtitle: 'How modern executives and corporate delegations leverage on-demand exotic fleets for executive impact.',
    excerpt: 'From private jet tarmac handovers to high-profile gala convoys, discover how FLEX corporate membership elevates high-level business mobility.',
    author: {
      name: 'Alexander Grey',
      role: 'Executive Concierge Director',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    },
    date: 'Sep 21, 2026',
    readTime: '5 min read',
    views: '3.1k',
    likes: 218,
    image: '/black-camaro-exorcist.png',
    componentArtwork: <SilverPorscheRoadImage />,
    tags: ['Corporate Fleet', 'Private Aviation', 'Executive Travel', 'Concierge'],
    specs: {
      vehicleName: 'Lamborghini Urus S',
      engine: '4.0L Twin-Turbo V8',
      power: '657 HP / 627 lb-ft',
      topSpeed: '190 MPH',
      accel: '0-60 in 3.3s',
    },
    chapters: [
      {
        heading: '1. Seamless Private Aviation Tarmac Deliveries',
        content: [
          'In modern enterprise leadership, time is the single most valuable currency. With FLEX Private Air Link, your designated supercar or executive performance SUV is waiting on the tarmac as your private jet steps lower.',
          'Keyless digital pairing allows instant departure with zero paperwork delay. Our vehicles feature encrypted in-cabin Wi-Fi hotspots and executive privacy shielding.',
        ],
        quote: 'First impressions are cemented the instant you arrive. An immaculate Lamborghini Urus or Rolls-Royce commands immediate authority.',
      },
      {
        heading: '2. Multi-Vehicle Convoys for VIP Delegations',
        content: [
          'For corporate summits, product launches, or film shoots, our fleet logistics team can synchronize up to a dozen color-matched supercars delivered simultaneously to any luxury resort or private estate in North America.',
        ],
      },
    ],
    relatedCarId: 'lamborghini-urus',
  },
  {
    id: 'post-4',
    slug: 'super-suv-showdown-urus-vs-dbx',
    category: 'Supercars',
    title: 'Super-SUV Showdown: Lamborghini Urus vs Aston Martin DBX707',
    subtitle: 'Comparing two pinnacle super-SUVs that challenge physics on road, track, and mountain passes.',
    excerpt: 'A deep comparative analysis of raw aggressive angularity, twin-turbo V8 character, acoustic presence, and passenger luxury.',
    author: {
      name: 'Marcus Vance',
      role: 'Chief Fleet Curator & Test Driver',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
    date: 'Sep 15, 2026',
    readTime: '7 min read',
    views: '5.9k',
    likes: 476,
    image: '/yellow-bmw-m4.png',
    tags: ['Lamborghini Urus', 'Aston Martin', 'Super SUVs', 'Track Testing'],
    specs: {
      vehicleName: 'Lamborghini Urus Performante',
      engine: '4.0L Twin-Turbo V8',
      power: '657 HP / 627 lb-ft',
      topSpeed: '190 MPH',
      accel: '0-60 in 3.1s',
    },
    chapters: [
      {
        heading: '1. Structural Rigidity Meets Track Calibration',
        content: [
          'Until recently, the concept of a 5,000-pound SUV setting blistering lap times on the Nürburgring felt like science fiction. Both the Urus Performante and the DBX707 have redefined physics through 48-volt active roll stabilization, carbon-ceramic brakes, and rear torque-vectoring differentials.',
          'Tipping the Urus into a tight hairpin reveals virtually zero body roll. The 10-piston front brake calipers haul the machine down from triple-digit speeds with unflinching confidence.',
        ],
        quote: 'The Urus Performante turns like a mid-engine supercar yet carries four adults and luggage in bespoke Italian leather comfort.',
      },
      {
        heading: '2. Exhaust Notes & Emotional Persona',
        content: [
          'In Corsa mode, the titanium Akrapovič exhaust system opens butterfly valves, generating deep, thunderous overrun crackles on downshifts. The DBX707 answers with a refined British AMG-derived rumble. Depending on your destination, FLEX offers both vehicles for discerning renters.',
        ],
      },
    ],
    relatedCarId: 'lamborghini-urus-green',
  },
  {
    id: 'post-5',
    slug: 'inside-the-150-point-inspection-protocol',
    category: 'Guides',
    title: 'Inside Our 150-Point White-Glove Handover & Precision Inspection Protocol',
    subtitle: 'How every FLEX vehicle is maintained to pristine showroom perfection before arriving at your door.',
    excerpt: 'From ceramic nanocoatings to laser wheel alignment and medical-grade interior sanitation, discover the standards behind our 5-star rating.',
    author: {
      name: 'Julian Thorne',
      role: 'Master Fleet Technician',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    },
    date: 'Sep 09, 2026',
    readTime: '4 min read',
    views: '2.4k',
    likes: 189,
    image: '/yellow-challenger-auth.jpg',
    tags: ['Maintenance', 'Quality Assurance', 'Safety Protocol', 'Luxury Service'],
    chapters: [
      {
        heading: '1. The Pre-Delivery Handover Standard',
        content: [
          'Every vehicle undergoing rental dispatch passes through our climate-controlled staging facility. Master technicians inspect tire tread depths down to 0.1mm, verify ceramic brake disc thickness, and test all driver-assist sensors.',
          'The vehicle interior receives a dual-stage steam sanitization and leather conditioning treatment with Swissvax bespoke balsams.',
        ],
        keyPoints: [
          '150-point mechanical & electronic verification before every rental.',
          'Freshly calibrated Pirelli P-Zero / Michelin Pilot Sport Cup 2 tires.',
          'Pre-set cabin temperature, radio favorites, and route navigation.',
        ],
      },
    ],
    relatedCarId: 'bmw-m4',
  },
  {
    id: 'post-6',
    slug: 'the-thrill-of-naturally-aspirated-v12-engines',
    category: 'Supercars',
    title: 'The Golden Era of Naturally Aspirated Engines: Why Pure Mechanical Revs Matter',
    subtitle: 'Exploring the acoustic magic, linear power curves, and unfiltered connection of analog performance.',
    excerpt: 'As the automotive world moves toward forced induction and battery packs, we celebrate the raw visceral sensation of high-revving naturally aspirated exotics.',
    author: {
      name: 'Marcus Vance',
      role: 'Chief Fleet Curator & Test Driver',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
    date: 'Sep 02, 2026',
    readTime: '6 min read',
    views: '4.1k',
    likes: 388,
    image: '/yellow-bmw-m4-side.png',
    tags: ['V12 Engines', 'Exhaust Sound', 'Purist Driving', 'Heritage'],
    chapters: [
      {
        heading: '1. The Linear Symphony Above 8,000 RPM',
        content: [
          'Nothing on earth mimics the spine-tingling crescendo of a naturally aspirated V10 or V12 engine charging toward redline. Without turbochargers muting the exhaust pulses, the sound is unfiltered, resonant, and deeply emotional.',
          'Throttle modulation is razor-sharp. You can adjust the vehicle line mid-corner with millimeter throttle inputs, feeling every combustion cycle vibrate through the monocoque chassis.',
        ],
        quote: 'A naturally aspirated engine doesn’t just accelerate a car; it sings to the driver’s soul.',
      },
    ],
    relatedCarId: 'porsche-911',
  },
];

interface BlogPageProps {
  onBackToHome: () => void;
  onRentCar?: (car: CarFleetItem) => void;
  onSharePost?: (post: DetailedBlogPost) => void;
}

export function BlogPage({ onBackToHome, onRentCar, onSharePost }: BlogPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePost, setActivePost] = useState<DetailedBlogPost | null>(null);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [savedPosts, setSavedPosts] = useState<Record<string, boolean>>({});
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const categories = ['All', 'Supercars', 'Road Trips', 'Technology', 'VIP Lifestyle', 'Guides'];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;
      const matchesQuery =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  const toggleLike = (postId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedPosts((prev) => ({ ...prev, [postId]: !prev[postId] }));
  };

  const toggleSave = (postId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedPosts((prev) => ({ ...prev, [postId]: !prev[postId] }));
  };

  const handleShare = (post: DetailedBlogPost, e: React.MouseEvent) => {
    e.stopPropagation();
    if (onSharePost) {
      onSharePost(post);
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(`${window.location.origin}/#/blog/${post.slug}`);
      alert('Article link copied to clipboard!');
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes('@')) {
      setNewsletterSuccess(true);
      setNewsletterEmail('');
    }
  };

  const getRelatedCar = (carId?: string): CarFleetItem | undefined => {
    if (!carId) return undefined;
    return FLEET_CARS.find((c) => c.id === carId);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-amber-400 selection:text-neutral-950 font-sans pb-20 relative">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-yellow-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 left-1/3 w-[700px] h-[700px] bg-amber-600/5 rounded-full blur-[180px]" />
      </div>

      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={onBackToHome}
              className="flex items-center gap-1.5 text-xs font-bold text-neutral-300 hover:text-amber-400 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#EFA531]" />
              <span className="hidden xs:inline sm:inline">Back to Home</span>
              <span className="xs:hidden sm:hidden">Home</span>
            </button>
            <div className="h-4 w-px bg-white/20 hidden sm:block" />
            <span className="text-xs uppercase font-bold tracking-widest text-amber-400 hidden sm:inline-block">
              FLEX Journal
            </span>
          </div>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onBackToHome();
            }}
            className="text-lg sm:text-xl font-black tracking-widest text-white font-heading select-none hover:text-amber-400 transition-colors uppercase"
          >
            FLEX
          </a>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="mailto:ayushchavhan899@gmail.com"
              className="text-xs font-semibold text-neutral-300 hover:text-amber-400 hidden md:flex items-center gap-1.5 transition-colors"
            >
              <span>Editorial Inquiries</span>
            </a>
            <button
              onClick={onBackToHome}
              className="px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs font-bold text-neutral-950 bg-[#EFA531] hover:bg-amber-400 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
            >
              Explore Fleet
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 animate-fade-in">
            <StarAccent className="w-4 h-4 text-[#EFA531]" />
            <span>Stories Behind the Wheel</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-black text-white font-heading uppercase tracking-wide leading-tight mb-3 sm:mb-4">
            The Pinnacle of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-amber-400">
              Supercar Culture
            </span>
          </h1>
          <p className="text-xs sm:text-base text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            In-depth track chronicles, road trip itineraries, supercar comparisons, and behind-the-scenes engineering from the curators of the world’s most prestigious exotic rental fleet.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-5 mb-12 flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xl">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#EFA531] text-neutral-950 shadow-md shadow-amber-500/20'
                    : 'bg-black/40 text-neutral-300 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles, tags..."
              className="w-full pl-10 pr-4 py-2 text-xs bg-black/50 border border-white/10 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:border-amber-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Featured Big Editorial Post (Shown if no search query & All selected) */}
        {selectedCategory === 'All' && !searchQuery && (
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-4 h-4 text-[#EFA531]" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Featured Editorial Dispatch
              </span>
            </div>

            <article
              onClick={() => setActivePost(featuredPost)}
              className="relative group cursor-pointer rounded-3xl overflow-hidden bg-gradient-to-b from-white/10 to-white/5 border border-white/20 hover:border-amber-400/60 transition-all shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              {/* Left Column: Visual Artwork / Image */}
              <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden bg-black/60 flex items-center justify-center">
                {featuredPost.componentArtwork ? (
                  <div className="w-full h-full p-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                    {featuredPost.componentArtwork}
                  </div>
                ) : (
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                )}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#EFA531] text-neutral-950 shadow-md">
                    {featuredPost.category}
                  </span>
                </div>
              </div>

              {/* Right Column: Metadata & Headline */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between backdrop-blur-xl">
                <div>
                  <div className="flex items-center gap-3 text-xs text-neutral-400 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#EFA531]" />
                      {featuredPost.date}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#EFA531]" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-white font-heading leading-tight mb-3 group-hover:text-amber-300 transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>

                  {/* Specs Quick Banner */}
                  {featuredPost.specs && (
                    <div className="p-3 bg-black/40 border border-white/10 rounded-xl grid grid-cols-3 gap-2 text-center mb-6">
                      <div>
                        <span className="text-[10px] text-neutral-400 block uppercase font-medium">Power</span>
                        <strong className="text-xs text-amber-300 font-mono font-bold">{featuredPost.specs.power.split('/')[0]}</strong>
                      </div>
                      <div className="border-x border-white/10">
                        <span className="text-[10px] text-neutral-400 block uppercase font-medium">Top Speed</span>
                        <strong className="text-xs text-white font-mono font-bold">{featuredPost.specs.topSpeed}</strong>
                      </div>
                      <div>
                        <span className="text-[10px] text-neutral-400 block uppercase font-medium">0-60 MPH</span>
                        <strong className="text-xs text-emerald-400 font-mono font-bold">{featuredPost.specs.accel}</strong>
                      </div>
                    </div>
                  )}
                </div>

                {/* Author & Action Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      className="w-9 h-9 rounded-full object-cover border border-amber-400/40"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-white leading-none">{featuredPost.author.name}</h4>
                      <span className="text-[10px] text-neutral-400">{featuredPost.author.role}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => toggleSave(featuredPost.id, e)}
                      className={`p-2 rounded-lg border transition-colors ${
                        savedPosts[featuredPost.id]
                          ? 'border-amber-400 bg-amber-400/20 text-amber-300'
                          : 'border-white/10 text-neutral-400 hover:text-white hover:bg-white/10'
                      }`}
                      title="Save article"
                    >
                      <Bookmark className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => handleShare(featuredPost, e)}
                      className="p-2 rounded-lg border border-white/10 text-neutral-400 hover:text-amber-400 hover:bg-white/10 transition-colors"
                      title="Share article"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        )}

        {/* All Articles Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg sm:text-xl font-bold font-heading text-white flex items-center gap-2">
              <span>Articles & Dispatches</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-amber-300 font-mono">
                {filteredPosts.length}
              </span>
            </h3>
            {searchQuery && (
              <span className="text-xs text-neutral-400">
                Filtering by "{searchQuery}"
              </span>
            )}
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-white/5 border border-white/10 rounded-3xl p-8">
              <Search className="w-10 h-10 text-neutral-500 mx-auto mb-3" />
              <h4 className="text-base font-bold text-white mb-1">No articles found</h4>
              <p className="text-xs text-neutral-400 max-w-sm mx-auto mb-4">
                We couldn't find any articles matching your search query. Try searching for "Ferrari", "Porsche", or "Itinerary".
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-4 py-2 text-xs font-bold text-neutral-950 bg-[#EFA531] rounded-xl hover:bg-amber-400 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => setActivePost(post)}
                  className="group cursor-pointer flex flex-col justify-between bg-black/45 backdrop-blur-xl border border-white/15 rounded-3xl overflow-hidden hover:border-amber-400/50 transition-all shadow-xl hover:scale-[1.01] hover:shadow-2xl"
                >
                  {/* Visual Header */}
                  <div className="relative h-52 bg-black/60 overflow-hidden flex items-center justify-center">
                    {post.componentArtwork ? (
                      <div className="w-full h-full p-3 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                        {post.componentArtwork}
                      </div>
                    ) : (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute top-3.5 left-3.5">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md border border-white/20 text-amber-300">
                        {post.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3 flex items-center gap-1.5 text-[11px] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-neutral-300">
                      <Clock className="w-3 h-3 text-[#EFA531]" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Date + Views */}
                      <div className="flex items-center justify-between text-[11px] text-neutral-400 mb-2.5">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#EFA531]" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1 text-neutral-400">
                          <Eye className="w-3 h-3 text-neutral-500" />
                          {post.views}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold font-heading text-white group-hover:text-amber-300 transition-colors leading-snug mb-2.5 line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-xs text-neutral-300 leading-relaxed line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>

                      {/* Tag Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-neutral-300"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Author & Footer Actions */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-7 h-7 rounded-full object-cover border border-amber-400/30"
                        />
                        <span className="text-xs font-semibold text-neutral-200">
                          {post.author.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => toggleLike(post.id, e)}
                          className={`p-1.5 rounded-lg border transition-colors flex items-center gap-1 text-[11px] ${
                            likedPosts[post.id]
                              ? 'border-rose-500/40 bg-rose-500/10 text-rose-400'
                              : 'border-white/10 text-neutral-400 hover:text-white'
                          }`}
                          title="Like article"
                        >
                          <Heart className={`w-3.5 h-3.5 ${likedPosts[post.id] ? 'fill-current' : ''}`} />
                          <span>{post.likes + (likedPosts[post.id] ? 1 : 0)}</span>
                        </button>
                        <button
                          onClick={(e) => handleShare(post, e)}
                          className="p-1.5 rounded-lg border border-white/10 text-neutral-400 hover:text-amber-400 transition-colors"
                          title="Share"
                        >
                          <Share2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* VIP Newsletter Subscription Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-amber-500/15 via-amber-400/5 to-white/5 border border-amber-400/30 p-8 sm:p-12 mb-16 relative overflow-hidden backdrop-blur-xl shadow-2xl">
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Exclusive Fleet Intelligence</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-heading text-white mb-3">
              Receive Private Track Chronicles & New Vehicle Drop Dispatches
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mb-6 leading-relaxed">
              Join over 12,000 supercar enthusiasts receiving our curated weekly road trip guides, technical teardowns, and VIP rental discounts.
            </p>

            {newsletterSuccess ? (
              <div className="flex items-center gap-2.5 p-3.5 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 rounded-xl text-xs font-bold">
                <CheckCircle2 className="w-5 h-5" />
                <span>You're subscribed! Check your inbox for the latest FLEX Dispatches.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your VIP email address"
                  required
                  className="flex-1 px-4 py-3 bg-black/60 border border-white/20 rounded-xl text-xs text-white placeholder-neutral-400 focus:outline-none focus:border-amber-400"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#EFA531] hover:bg-amber-400 text-neutral-950 font-bold text-xs rounded-xl transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Subscribe Now</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      {/* In-Depth Article Reader Modal Dialog */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in text-white overflow-y-auto">
          <div className="bg-neutral-900/98 border border-white/20 rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[96vh] sm:max-h-[92vh] flex flex-col shadow-2xl relative overflow-hidden backdrop-blur-2xl">
            {/* Top Bar Header */}
            <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between sticky top-0 bg-neutral-900/95 backdrop-blur-md z-10">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/40">
                  {activePost.category}
                </span>
                <span className="text-xs text-neutral-400 hidden sm:inline-block">
                  {activePost.readTime} · Published {activePost.date}
                </span>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  onClick={(e) => handleShare(activePost, e)}
                  className="p-2 rounded-full text-neutral-400 hover:text-amber-400 hover:bg-white/10 transition-colors cursor-pointer"
                  title="Share Article"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActivePost(null)}
                  className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  title="Close Article"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Reader Content */}
            <div className="p-4 sm:p-10 overflow-y-auto space-y-6 sm:space-y-8">
              {/* Title & Subtitle */}
              <div>
                <h1 className="text-xl sm:text-4xl font-black font-heading text-white leading-tight mb-2 sm:mb-3">
                  {activePost.title}
                </h1>
                <p className="text-xs sm:text-base text-neutral-300 font-medium leading-relaxed">
                  {activePost.subtitle}
                </p>
              </div>

              {/* Author Badge */}
              <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3">
                  <img
                    src={activePost.author.avatar}
                    alt={activePost.author.name}
                    className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-amber-400/50 shrink-0"
                  />
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-white">{activePost.author.name}</h5>
                    <span className="text-[10px] sm:text-xs text-neutral-400">{activePost.author.role}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-neutral-400">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5 text-[#EFA531]" />
                    {activePost.views} Reads
                  </span>
                </div>
              </div>

              {/* Artwork / Media Showcase */}
              <div className="w-full rounded-2xl overflow-hidden border border-white/15 bg-black/60 shadow-xl">
                {activePost.componentArtwork ? (
                  <div className="p-4 sm:p-6 max-h-96 flex items-center justify-center">
                    {activePost.componentArtwork}
                  </div>
                ) : (
                  <img
                    src={activePost.image}
                    alt={activePost.title}
                    className="w-full h-56 sm:h-96 object-cover"
                  />
                )}
              </div>

              {/* Technical Specifications Callout (If applicable) */}
              {activePost.specs && (
                <div className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-amber-400/30 shadow-lg">
                  <div className="flex items-center gap-2 mb-3 text-amber-400 font-bold text-xs uppercase tracking-wider">
                    <Car className="w-4 h-4" />
                    <span>Featured Vehicle Telemetry</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">{activePost.specs.vehicleName}</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                    <div className="p-2.5 sm:p-3 bg-white/5 rounded-xl border border-white/5">
                      <span className="text-[10px] text-neutral-400 uppercase font-medium block">Engine</span>
                      <strong className="text-xs text-white font-mono">{activePost.specs.engine}</strong>
                    </div>
                    <div className="p-2.5 sm:p-3 bg-white/5 rounded-xl border border-white/5">
                      <span className="text-[10px] text-neutral-400 uppercase font-medium block">Power</span>
                      <strong className="text-xs text-amber-300 font-mono">{activePost.specs.power}</strong>
                    </div>
                    <div className="p-2.5 sm:p-3 bg-white/5 rounded-xl border border-white/5">
                      <span className="text-[10px] text-neutral-400 uppercase font-medium block">Top Speed</span>
                      <strong className="text-xs text-white font-mono">{activePost.specs.topSpeed}</strong>
                    </div>
                    <div className="p-2.5 sm:p-3 bg-white/5 rounded-xl border border-white/5">
                      <span className="text-[10px] text-neutral-400 uppercase font-medium block">0-60 MPH</span>
                      <strong className="text-xs text-emerald-400 font-mono">{activePost.specs.accel}</strong>
                    </div>
                  </div>
                </div>
              )}

              {/* In-Depth Chapters */}
              <div className="space-y-6 sm:space-y-8 text-neutral-300 text-xs sm:text-base leading-relaxed">
                {activePost.chapters.map((chap, idx) => (
                  <section key={idx} className="space-y-3 sm:space-y-4">
                    <h3 className="text-lg sm:text-2xl font-bold font-heading text-white border-l-4 border-[#EFA531] pl-3 sm:pl-4">
                      {chap.heading}
                    </h3>

                    {chap.content.map((p, pIdx) => (
                      <p key={pIdx} className="text-neutral-300">
                        {p}
                      </p>
                    ))}

                    {chap.quote && (
                      <blockquote className="my-4 sm:my-6 p-4 sm:p-5 rounded-2xl bg-amber-400/10 border-l-4 border-amber-400 text-amber-200 italic font-medium text-xs sm:text-base">
                        "{chap.quote}"
                      </blockquote>
                    )}

                    {chap.keyPoints && (
                      <div className="my-3 sm:my-4 p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                        <span className="text-xs uppercase font-bold text-amber-400 tracking-wider block">
                          Key Engineering Highlights:
                        </span>
                        <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-neutral-200">
                          {chap.keyPoints.map((kp, kIdx) => (
                            <li key={kIdx}>{kp}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </section>
                ))}
              </div>

              {/* Related Fleet Booking Shortcut */}
              {activePost.relatedCarId && getRelatedCar(activePost.relatedCarId) && (
                <div className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-neutral-900 to-black border border-amber-400/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 shadow-2xl">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                      Experience This Vehicle Firsthand
                    </span>
                    <h4 className="text-base sm:text-xl font-bold text-white">
                      Reserve the {getRelatedCar(activePost.relatedCarId)?.name}
                    </h4>
                    <p className="text-xs text-neutral-400 mt-1">
                      Starting from ${getRelatedCar(activePost.relatedCarId)?.dailyRate}/day with white-glove doorstep delivery.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      const car = getRelatedCar(activePost.relatedCarId);
                      if (car && onRentCar) {
                        setActivePost(null);
                        onRentCar(car);
                      } else {
                        setActivePost(null);
                        onBackToHome();
                      }
                    }}
                    className="w-full sm:w-auto px-6 py-3 bg-[#EFA531] hover:bg-amber-400 text-neutral-950 font-bold text-xs rounded-xl transition-all shadow-md active:scale-95 shrink-0 cursor-pointer text-center"
                  >
                    Rent This Supercar
                  </button>
                </div>
              )}
            </div>

            {/* Sticky Reader Footer */}
            <div className="p-3.5 sm:p-5 border-t border-white/10 bg-neutral-900/95 backdrop-blur-md flex flex-wrap sm:flex-nowrap items-center justify-between gap-2.5">
              <button
                onClick={() => setActivePost(null)}
                className="px-4 py-2 text-xs font-bold text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
              >
                Close Article
              </button>
              <div className="flex items-center gap-2 sm:gap-3 ml-auto">
                <button
                  onClick={(e) => toggleLike(activePost.id, e)}
                  className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                    likedPosts[activePost.id]
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                      : 'bg-white/5 text-neutral-300 hover:text-white border border-white/10'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${likedPosts[activePost.id] ? 'fill-current text-rose-400' : ''}`} />
                  <span>{activePost.likes + (likedPosts[activePost.id] ? 1 : 0)}</span>
                </button>
                <button
                  onClick={(e) => handleShare(activePost, e)}
                  className="px-3.5 sm:px-4 py-2 bg-[#EFA531] hover:bg-amber-400 text-neutral-950 font-bold text-xs rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Story</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
