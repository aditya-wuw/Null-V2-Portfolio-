// utils.ts
import { ScrollSmoother } from 'gsap/all'

export const scrollToSection = (targetId: string) => {
  // 2. Safely trigger the smoother instance
  const target = document.getElementById(targetId);
  const smoother = ScrollSmoother.get();
  if (smoother) {
    smoother.scrollTo(target, true, "top top");
  }
};