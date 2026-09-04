// Black Belt Karate Academy Master Data Structure

export const GALLERY_CATEGORIES = [
  { id: 'all', name: 'All Gallery' },
  { id: 'kata', name: 'Kata & Forms' },
  { id: 'kumite', name: 'Sparring (Kumite)' },
  { id: 'graduation', name: 'Belt Graduations' },
  { id: 'youth', name: 'Youth Dojo' },
  { id: 'tournaments', name: 'Tournaments & Medals' }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Gallery 1',
    category: 'kata',
    categoryName: 'Kata & Forms',
    image: '/gallery1.jpg',
    description: 'Dojo training photo from the academy gallery collection.',
    tags: ['Karate', 'Dojo'],
    photographer: 'Academy',
    date: '2026-07-15'
  },
  {
    id: 2,
    title: 'Gallery 2',
    category: 'kumite',
    categoryName: 'Sparring (Kumite)',
    image: '/gallery2.jpg',
    description: 'Kumite-focused practice session captured in the academy hall.',
    tags: ['Kumite', 'Practice'],
    photographer: 'Academy',
    date: '2026-06-20'
  },
  {
    id: 3,
    title: 'Gallery 3',
    category: 'graduation',
    categoryName: 'Belt Graduations',
    image: '/gallery3.jpg',
    description: 'A graduation moment from the dojo belt ceremony.',
    tags: ['Graduation', 'Belt'],
    photographer: 'Academy',
    date: '2026-05-10'
  },
  {
    id: 4,
    title: 'Gallery 4',
    category: 'youth',
    categoryName: 'Youth Dojo',
    image: '/gallery4.jpg',
    description: 'Youth class focus and discipline in motion.',
    tags: ['Youth', 'Kids'],
    photographer: 'Academy',
    date: '2026-07-28'
  },
  {
    id: 5,
    title: 'Gallery 5',
    category: 'tournaments',
    categoryName: 'Tournaments & Medals',
    image: '/gallery5.jpg',
    description: 'Competitive-ready posture and confidence in the tournament space.',
    tags: ['Tournament', 'Confidence'],
    photographer: 'Academy',
    date: '2026-04-18'
  },
  {
    id: 6,
    title: 'Gallery 6',
    category: 'kata',
    categoryName: 'Kata & Forms',
    image: '/gallery6.jpg',
    description: 'A classic dojo performance captured from the academy gallery.',
    tags: ['Kata', 'Performance'],
    photographer: 'Academy',
    date: '2026-06-05'
  },
  {
    id: 7,
    title: 'Gallery 7',
    category: 'kumite',
    categoryName: 'Sparring (Kumite)',
    image: '/gallery7.jpg',
    description: 'Training intensity and movement in a kumite drill session.',
    tags: ['Kumite', 'Drills'],
    photographer: 'Academy',
    date: '2026-07-02'
  },
  {
    id: 8,
    title: 'Gallery 8',
    category: 'graduation',
    categoryName: 'Belt Graduations',
    image: '/gallery8.jpg',
    description: 'Belt progression and respect celebrated at the academy.',
    tags: ['Graduation', 'Respect'],
    photographer: 'Academy',
    date: '2026-03-30'
  },
  {
    id: 9,
    title: 'Gallery 9',
    category: 'kata',
    categoryName: 'Kata & Forms',
    image: '/gallery9.jpg',
    description: 'Traditional form practice with discipline and control.',
    tags: ['Kata', 'Traditional'],
    photographer: 'Academy',
    date: '2026-02-14'
  },
  {
    id: 10,
    title: 'Gallery 10',
    category: 'youth',
    categoryName: 'Youth Dojo',
    image: '/gallery10.jpg',
    description: 'Young athletes working on stances, technique, and confidence.',
    tags: ['Youth', 'Technique'],
    photographer: 'Academy',
    date: '2026-08-01'
  },
  {
    id: 11,
    title: 'Gallery 11',
    category: 'tournaments',
    categoryName: 'Tournaments & Medals',
    image: '/gallery11.jpg',
    description: 'Competition action and team spirit during the tournament day.',
    tags: ['Tournament', 'Team'],
    photographer: 'Academy',
    date: '2026-08-05'
  },
  {
    id: 12,
    title: 'Gallery 12',
    category: 'kata',
    categoryName: 'Kata & Forms',
    image: '/gallery12.jpg',
    description: 'Final training pose capturing the focus of authentic karate form.',
    tags: ['Kata', 'Focus'],
    photographer: 'Academy',
    date: '2026-08-10'
  }
];

export const BELT_RANKS = [
  {
    rank: 'White Belt',
    japanese: 'Shiro Obi (9th Kyu)',
    color: '#ffffff',
    textColor: '#1e293b',
    duration: '0 - 3 Months',
    requirements: ['Rei (Dojo Etiquette & Respect)', 'Seiken Tsuki (Straight Punch)', 'Zenkutsu Dachi (Forward Stance)', 'Taikyoku Shodan Kata'],
    motto: 'The journey of a thousand miles begins with a single step.'
  },
  {
    rank: 'Yellow Belt',
    japanese: 'Kiiro Obi (8th Kyu)',
    color: '#eab308',
    textColor: '#0f172a',
    duration: '3 - 6 Months',
    requirements: ['Mae Geri (Front Kick)', 'Age Uke (Rising Block)', 'Heian Shodan Kata', 'Basic Gohon Kumite (5-Step Sparring)'],
    motto: 'Sunlight awakening the seed of martial spirit.'
  },
  {
    rank: 'Orange Belt',
    japanese: 'Daidairo Obi (7th Kyu)',
    color: '#f97316',
    textColor: '#ffffff',
    duration: '6 - 9 Months',
    requirements: ['Mawashi Geri (Roundhouse Kick)', 'Soto Uke (Outside Block)', 'Heian Nidan Kata', 'Basic Sanbon Kumite (3-Step Sparring)'],
    motto: 'Growing strength like the rising sun.'
  },
  {
    rank: 'Green Belt',
    japanese: 'Midori Obi (6th-5th Kyu)',
    color: '#22c55e',
    textColor: '#ffffff',
    duration: '9 - 15 Months',
    requirements: ['Yoko Geri (Side Kick)', 'Shuto Uke (Knife Hand Block)', 'Heian Sandan & Yondan Katas', 'Light Jiyu Ippon Kumite'],
    motto: 'Stems growing firm, branching into technical precision.'
  },
  {
    rank: 'Blue & Purple Belt',
    japanese: 'Murasaki Obi (4th-3rd Kyu)',
    color: '#a855f7',
    textColor: '#ffffff',
    duration: '15 - 24 Months',
    requirements: ['Ushiro Geri (Back Kick)', 'Kokutsu Dachi (Back Stance)', 'Heian Godan & Tekki Shodan Katas', 'Controlled Free Sparring'],
    motto: 'Reaching toward the sky, refining internal focus.'
  },
  {
    rank: 'Brown Belt',
    japanese: 'Chairo Obi (2nd-1st Kyu)',
    color: '#854d0e',
    textColor: '#ffffff',
    duration: '2 - 3 Years',
    requirements: ['Advanced Combination Striking', 'Bassai Dai & Jion Katas', 'Full Speed Jiyu Kumite', 'Assisting Junior Belt Instruction'],
    motto: 'Ripening fruit ready for harvest, master of fundamentals.'
  },
  {
    rank: 'Black Belt (1st Dan)',
    japanese: 'Kuro Obi (Shodan)',
    color: '#000000',
    textColor: '#f59e0b',
    border: '2px solid #f59e0b',
    duration: '3 - 4+ Years',
    requirements: ['Kanku Dai & Empi Katas', '50-Man Kumite Test', 'Full Bunkai Application', 'Dojo Leadership & Spirit'],
    motto: 'A Black Belt is a White Belt who never gave up.'
  }
];

export const PROGRAMS = [
  {
    id: 'little-tigers',
    title: 'Little Tigers Karate',
    ageGroup: 'Ages 4 - 7',
    badge: 'Foundation',
    image: 'https://images.unsplash.com/photo-1508215885820-4585e56135c8?auto=format&fit=crop&w=800&q=80',
    description: 'Fun, structured martial arts training designed to boost focus, motor balance, respect, and confidence in young children.',
    features: ['Focus & Attention Drills', 'Basic Stances & Kicks', 'Anti-Bullying Awareness', 'Motor Skill Coordination']
  },
  {
    id: 'junior-warriors',
    title: 'Junior Warriors Dojo',
    ageGroup: 'Ages 8 - 12',
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    description: 'Empowering youth with self-discipline, traditional kata, point sparring rules, and character leadership development.',
    features: ['Shotokan Kata Mastery', 'Point & Light Sparring', 'Leadership & Discipline', 'Rank Belt Advancement']
  },
  {
    id: 'teen-adult',
    title: 'Teens & Adults Karate',
    ageGroup: 'Ages 13+',
    badge: 'Core Program',
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80',
    description: 'Comprehensive martial arts conditioning, authentic self-defense, traditional kata forms, and stress relief for all fitness levels.',
    features: ['Full Body Fitness & Flexibility', 'Practical Self-Defense', 'Traditional Bunkai Kata', 'Black Belt Track']
  },
  {
    id: 'competition-team',
    title: 'Black Belt Competition Squad',
    ageGroup: 'Invited / Advanced',
    badge: 'Elite',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    description: 'High-intensity coaching for state, national, and international WKF style Kumite and Kata tournaments.',
    features: ['WKF Championship Rules', 'Explosive Speed Drills', 'Tactical Fight Strategy', 'Mental Toughness Prep']
  }
];

export const INSTRUCTORS = [
  {
    name: 'Hanshi Marcus Vance',
    rank: '8th Dan Black Belt',
    title: 'Chief Grandmaster & Founder',
    experience: '35+ Years Experience',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    bio: 'Former World Kumite Champion and certified Okinawan Karate Grandmaster. Trained over 400 national black belts.',
    specialty: 'Shotokan Kata & Advanced Bunkai'
  },
  {
    name: 'Sensei Elena Rostova',
    rank: '5th Dan Black Belt',
    title: 'Head Youth & Female Self-Defense Coach',
    experience: '18 Years Experience',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    bio: 'National Gold Medalist in Female Kumite. Dedicated to empowering young athletes with unyielding confidence.',
    specialty: 'Kumite Strategy & Youth Leadership'
  },
  {
    name: 'Sensei Kenji Takahashi',
    rank: '4th Dan Black Belt',
    title: 'Senior Dojo Instructor',
    experience: '14 Years Experience',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    bio: 'Specialist in traditional Okinawan weapon forms (Kobudo) and biomechanical strike precision.',
    specialty: 'Kobudo & Conditioning'
  }
];

export const SCHEDULE_DAYS = [
  { id: 'mon', label: 'Monday' },
  { id: 'tue', label: 'Tuesday' },
  { id: 'wed', label: 'Wednesday' },
  { id: 'thu', label: 'Thursday' },
  { id: 'fri', label: 'Friday' },
  { id: 'sat', label: 'Saturday' }
];

export const TIMETABLE = {
  mon: [
    { time: '04:30 PM - 05:30 PM', program: 'Little Tigers (Ages 4-7)', instructor: 'Sensei Elena', hall: 'Dojo Main Hall' },
    { time: '05:30 PM - 06:45 PM', program: 'Junior Warriors (Ages 8-12)', instructor: 'Sensei Kenji', hall: 'Dojo Main Hall' },
    { time: '07:00 PM - 08:30 PM', program: 'Teen & Adult Black Belt Track', instructor: 'Hanshi Marcus', hall: 'Dojo Main Hall' }
  ],
  tue: [
    { time: '05:00 PM - 06:15 PM', program: 'Junior Warriors Kumite Drills', instructor: 'Sensei Elena', hall: 'Ring A' },
    { time: '06:30 PM - 08:00 PM', program: 'Advanced Kata & Bunkai (Brown/Black)', instructor: 'Hanshi Marcus', hall: 'Dojo Main Hall' }
  ],
  wed: [
    { time: '04:30 PM - 05:30 PM', program: 'Little Tigers (Ages 4-7)', instructor: 'Sensei Elena', hall: 'Dojo Main Hall' },
    { time: '05:30 PM - 06:45 PM', program: 'Junior Warriors (Ages 8-12)', instructor: 'Sensei Kenji', hall: 'Dojo Main Hall' },
    { time: '07:00 PM - 08:30 PM', program: 'Adult Martial Conditioning & Sparring', instructor: 'Sensei Kenji', hall: 'Dojo Main Hall' }
  ],
  thu: [
    { time: '05:30 PM - 06:45 PM', program: 'Women Self-Defense & Fitness', instructor: 'Sensei Elena', hall: 'Studio B' },
    { time: '07:00 PM - 08:30 PM', program: 'Elite Competition Team Prep', instructor: 'Hanshi Marcus', hall: 'Dojo Main Hall' }
  ],
  fri: [
    { time: '04:30 PM - 05:30 PM', program: 'Little Tigers Belt Test Prep', instructor: 'Sensei Elena', hall: 'Dojo Main Hall' },
    { time: '05:30 PM - 07:00 PM', program: 'All Grades Open Mat & Kata', instructor: 'Sensei Kenji', hall: 'Dojo Main Hall' }
  ],
  sat: [
    { time: '09:00 AM - 10:30 AM', program: 'Saturday Morning Family Karate', instructor: 'Hanshi Marcus', hall: 'Dojo Main Hall' },
    { time: '11:00 AM - 01:00 PM', program: 'Black Belt Masterclass & Testing', instructor: 'Full Master Board', hall: 'Dojo Main Hall' }
  ]
};

export const TESTIMONIALS = [
  {
    name: 'David Miller',
    role: 'Parent of Junior Black Belt Student',
    quote: 'Black Belt Karate Academy transformed my 9-year-old son into a disciplined, respectful, and confident young boy. The Senseis are world-class mentors.',
    rating: 5,
    belt: 'Junior Black Belt Parent'
  },
  {
    name: 'Sarah Jenkins',
    role: 'Adult Student (Green Belt)',
    quote: 'I joined at 32 with zero martial arts experience. The supportive community and clear belt progression map kept me motivated every single week!',
    rating: 5,
    belt: 'Green Belt Student'
  },
  {
    name: 'Coach Robert Chen',
    role: 'National WKF Referee',
    quote: 'The technical accuracy and spirit shown by Black Belt Karate Academy students in regional tournaments is second to none.',
    rating: 5,
    belt: 'Grandmaster Visitor'
  }
];

export const PRICING_PLANS = [
  {
    id: 'starter',
    name: 'Beginner Karate',
    price: '$89',
    period: '/ month',
    badge: 'Popular Entry',
    description: 'Perfect for beginners starting their white belt journey.',
    features: [
      '2 Classes Per Week',
      'Free Official Karate Gi Uniform',
      'White Belt Progression Syllabus',
      'Monthly Belt Evaluation Access',
      'Dojo App Portal Access'
    ]
  },
  {
    id: 'unlimited',
    name: 'Black Belt Club',
    price: '$129',
    period: '/ month',
    badge: 'Most Popular',
    featured: true,
    description: 'Unlimited training access for dedicated students aiming for Black Belt mastery.',
    features: [
      'UNLIMITED Weekly Classes',
      'Free Premium Gi + Fighting Gloves',
      'All Belt Progression Seminars',
      'Sparring & Tournament Team Access',
      '1-on-1 Quarterly Sensei Review',
      'Family Discount 15% Off'
    ]
  },
  {
    id: 'elite',
    name: 'Competition Elite',
    price: '$179',
    period: '/ month',
    badge: 'Champion Level',
    description: 'For national team contenders and advanced Dan rank candidates.',
    features: [
      'Everything in Black Belt Club',
      'Exclusive WKF Sparring Drills',
      'Private 1-on-1 Monthly Coaching',
      'Video Analysis & Speed Biomechanics',
      'National Tournament Sponsorship'
    ]
  }
];
