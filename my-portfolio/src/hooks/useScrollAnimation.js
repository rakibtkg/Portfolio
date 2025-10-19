import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered animations
 * @param {Object} options - Animation options
 * @returns {Object} - Ref and animation state
 */
export const useScrollAnimation = (options = {}) => {
  const { threshold = 0.1, triggerOnce = true } = options;
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, triggerOnce]);

  return { ref: elementRef, isVisible };
};

/**
 * Custom hook for stagger animation
 * @param {number} count - Number of items
 * @param {number} delay - Delay between each item (ms)
 * @returns {Array} - Array of visibility states
 */
export const useStaggerAnimation = (count, delay = 100) => {
  const [visibleItems, setVisibleItems] = useState([]);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    if (isVisible && visibleItems.length === 0) {
      for (let i = 0; i < count; i++) {
        setTimeout(() => {
          setVisibleItems((prev) => [...prev, i]);
        }, i * delay);
      }
    }
  }, [isVisible, count, delay, visibleItems.length]);

  return { ref, visibleItems };
};
