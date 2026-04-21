import { useEffect, useState, useRef } from "react";
import { Text } from "../ui/Text";

const stats = [
  { label: "Years in Business", end: 15, suffix: "+" },
  { label: "Global Partners", end: 1000, suffix: "" },
  { label: "Projects Completed", end: 100, suffix: "" },
  { label: "Products Supplied", end: 60000, suffix: "" },
];

function AnimatedStat({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center">
      <span className="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-2">
        {count.toLocaleString()}{suffix}
      </span>
      <Text className="text-white font-medium tracking-wide uppercase text-sm">
        {label}
      </Text>
    </div>
  );
}

export function StatsBlock() {
  return (
    <div className="bg-primary py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 divide-x divide-white text-center">
          
          {stats.map((stat, index) => (
            <AnimatedStat 
              key={index} 
              end={stat.end} 
              suffix={stat.suffix} 
              label={stat.label} 
            />
          ))}

        </div>
      </div>
    </div>
  );
}