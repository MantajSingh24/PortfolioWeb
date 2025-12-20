"use client";

export default function ScrollToTop() {
  const scrollToTop = () => {
    // Instant scroll for better performance
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-[100] p-3 bg-yellow-100 hover:bg-yellow-50 text-gray-900 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-150 flex items-center justify-center border-2 border-yellow-200"
      aria-label="Scroll to top"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  );
}

