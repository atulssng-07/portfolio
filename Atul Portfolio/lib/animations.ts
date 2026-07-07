import type { Variants } from "framer-motion";

export const viewportOnce = {
  once: true,
  margin: "-80px"
};

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.08
    }
  }
};

export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const tagReveal: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.28, ease: "easeOut" }
  }
};

export const hoverLift = {
  y: -6,
  transition: { duration: 0.22, ease: "easeOut" }
};
