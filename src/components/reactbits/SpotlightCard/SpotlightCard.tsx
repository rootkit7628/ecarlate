import React, { useRef, useState, useEffect, useCallback } from "react";

interface Position {
  x: number;
  y: number;
}

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
  autoAnimate?: boolean;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.25)",
  autoAnimate = false
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);
  const animationRef = useRef<number>();
  const targetPosition = useRef<Position>({ x: 0, y: 0 });
  const currentPosition = useRef<Position>({ x: 0, y: 0 });

  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  };

  const animateSpotlight = useCallback(() => {
    if (!divRef.current) return;
    
    const rect = divRef.current.getBoundingClientRect();
    
    // Generate new target position every 3 seconds
    if (!animationRef.current || Date.now() % 3000 < 16) {
      targetPosition.current = {
        x: Math.random() * rect.width,
        y: Math.random() * rect.height
      };
    }
    
    // Smooth interpolation between current and target position
    currentPosition.current = {
      x: lerp(currentPosition.current.x, targetPosition.current.x, 0.02),
      y: lerp(currentPosition.current.y, targetPosition.current.y, 0.02)
    };
    
    setPosition(currentPosition.current);
    setOpacity(0.6);
    
    animationRef.current = requestAnimationFrame(animateSpotlight);
  }, []);

  useEffect(() => {
    if (autoAnimate) {
      animateSpotlight();
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [autoAnimate, animateSpotlight]);

  return (
    <div ref={divRef} className={`relative rounded-lg border border-neutral-800 bg-neutral-900 overflow-hidden p-8 ${className}`}>
      <div
        className="pointer-events-none absolute inset-0 opacity-0"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
          transition: 'opacity 0.3s ease-out',
        }}
      />
      {children}
    </div>
  );
};

export default SpotlightCard;
