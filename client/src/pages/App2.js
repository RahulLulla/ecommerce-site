/* eslint-disable react/prop-types */
import React from "react";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HorizontalScroll() {
  const scrollContainerRef = useRef(null);
  const itemRefs = useRef([]);

  const scroll = (direction) => {
    if (!itemRefs.current.length) return;

    const visibleItems = itemRefs.current.filter((item) => {
      if (!item) return false;
      const { left, right } = item.getBoundingClientRect();
      const container = scrollContainerRef.current.getBoundingClientRect();
      return left >= container.left && right <= container.right;
    });

    if (visibleItems.length) {
      const targetIndex =
        direction === "left"
          ? Math.max(0, itemRefs.current.indexOf(visibleItems[0]) - 1)
          : Math.min(
              itemRefs.current.length - 1,
              itemRefs.current.indexOf(visibleItems.at(-1)) + 1
            );

      itemRefs.current[targetIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Left Arrow */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md"
        onClick={() => scroll("left")}
      >
        <ChevronLeft size={24} />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide space-x-4 p-2"
      >
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (itemRefs.current[i] = el)}
            className="min-w-[150px] h-40 bg-blue-500 flex items-center justify-center text-white rounded-lg shadow-md snap-start"
          >
            Item {i + 1}
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md"
        onClick={() => scroll("right")}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
