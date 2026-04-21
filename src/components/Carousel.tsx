import React, { useEffect, useState } from "react";

interface CarouselProps {
  items: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // troca a cada 2 segundos

    return () => clearInterval(interval); // limpa intervalo ao desmontar
  }, [items.length]);

  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-lg border shadow-lg">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${items.length * 100}%` }}
      >
        {items.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
