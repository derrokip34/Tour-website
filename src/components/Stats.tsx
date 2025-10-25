import { useEffect, useState } from "react";
import { Award, MapPin, Smile, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Stats = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  const stats = [
    { icon: Smile, label: "Happy Travelers", value: 500, suffix: "+" },
    { icon: MapPin, label: "Destinations", value: 50, suffix: "+" },
    { icon: Star, label: "5-Star Reviews", value: 250, suffix: "+" },
    { icon: Award, label: "Years Experience", value: 10, suffix: "+" },
  ];

  return (
    <section ref={ref} className="py-16 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "30px 30px"
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`text-center transition-all duration-700 delay-${index * 100} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Icon size={32} />
                  </div>
                </div>
                <Counter target={stat.value} isVisible={isVisible} suffix={stat.suffix} />
                <p className="text-white/90 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Counter = ({ target, isVisible, suffix }: { target: number; isVisible: boolean; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div className="text-4xl md:text-5xl font-bold mb-2">
      {count}{suffix}
    </div>
  );
};

export default Stats;
