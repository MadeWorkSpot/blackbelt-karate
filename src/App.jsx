import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import BeltProgression from './components/BeltProgression';
import Programs from './components/Programs';
import Instructors from './components/Instructors';
import Testimonials from './components/Testimonials';
import BookingModal from './components/BookingModal';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  return (
    <div className="app-root">
      <Navbar onOpenBooking={handleOpenBooking} />
      <main>
        <Hero onOpenBooking={handleOpenBooking} />
        <Stats />
        <Gallery />
        <BeltProgression />
        <Programs onOpenBooking={handleOpenBooking} />
        <Instructors />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      {/* Trial Class Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}
