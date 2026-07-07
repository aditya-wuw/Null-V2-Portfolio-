// utils.ts
import { ScrollSmoother } from 'gsap/all'

export const scrollToSection = (targetId: string) => {
  // 2. Safely trigger the smoother instance
  const smoother = ScrollSmoother.get();
  if (smoother) {
    smoother.scrollTo(`#${targetId}`, true, "top top");
  }
};