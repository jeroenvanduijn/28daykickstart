'use client';

import { useState } from 'react';

export function BookingPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  // Expose openPopup globally so CTA buttons can call it
  if (typeof window !== 'undefined') {
    (window as any).openBookingPopup = openPopup;
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4"
      onClick={closePopup}
    >
      <div
        className="relative bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/60 hover:bg-black/80 rounded-full text-white text-2xl transition-colors"
        >
          ×
        </button>
        <iframe
          src="https://kilo.gymleadmachine.com/widget/form/ZTMHpqwf9WGDQN6VGSnU"
          className="w-full h-[600px]"
          style={{ border: 'none' }}
          title="Booking Form"
        />
      </div>
    </div>
  );
}
