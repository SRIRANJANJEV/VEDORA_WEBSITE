import { useEffect, useRef } from 'react';

interface UseScrollRevealOptions {
  /** When true, the element stays visible after first reveal. Default: true */
  once?: boolean;
  /** IntersectionObserver threshold. Default: 0.1 */
  threshold?: number;
  /** Root margin for the observer. Default: '0px' */
  rootMargin?: string;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollRevealOptions = {},
) {
  const { once = true, threshold = 0.1, rootMargin = '0px' } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Respect reduced-motion preference: make visible immediately
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReducedMotion) {
      element.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            entry.target.classList.remove('is-visible');
          }
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [once, threshold, rootMargin]);

  return ref;
}

export default useScrollReveal;
