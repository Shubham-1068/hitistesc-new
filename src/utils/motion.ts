export const navVariants: {
  hidden: {
    opacity: number;
    y: number;
    transition: {
      type: string;
      stiffness: number;
      damping: number;
    };
  };
  show: {
    opacity: number;
    y: number;
    transition: {
      type: string;
      stiffness: number;
      delay: number;
    };
  };
} = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0,
    },
  },
};

export const slideIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number,
): {
  hidden: {
    x: string | number;
    y: string | number;
  };
  show: {
    x: number;
    y: number;
    transition: {
      type: string;
      delay: number;
      duration: number;
      ease: string;
    };
  };
} => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay: 0,
      duration: 0.5,
      ease: "easeOut",
    },
  },
});

export const staggerContainer = (
  staggerChildren: number,
  delayChildren: number,
): {
  hidden: {};
  show: {
    transition: {
      staggerChildren: number;
      delayChildren: number;
    };
  };
} => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textVariant = (
  delay: number,
): {
  hidden: {
    y: number;
    opacity: number;
  };
  show: {
    y: number;
    opacity: number;
    transition: {
      type: string;
      duration: number;
      delay: number;
    };
  };
} => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      delay,
    },
  },
});

export const textContainer: {
  hidden: {
    opacity: number;
  };
  show: (i?: number) => {
    opacity: number;
    transition: {
      staggerChildren: number;
      delayChildren: number;
    };
  };
} = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

export const textVariant2: {
  hidden: {
    opacity: number;
    y: number;
  };
  show: {
    opacity: number;
    y: number;
    transition: {
      type: string;
      ease: string;
      duration: number;
    };
  };
} = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
      duration: 0,
    },
  },
};

export const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number,
): {
  hidden: {
    x: number;
    y: number;
    opacity: number;
  };
  show: {
    x: number;
    y: number;
    opacity: number;
    transition: {
      type: string;
      delay: number;
      duration: number;
      ease: string;
    };
  };
} => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const planetVariants = (
  direction: string,
): {
  hidden: {
    x: string;
    rotate: number;
  };
  show: {
    x: number;
    rotate: number;
    transition: {
      type: string;
      duration: number;
      delay: number;
    };
  };
} => ({
  hidden: {
    x: direction === "left" ? "-100%" : "100%",
    rotate: 120,
  },
  show: {
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      delay: 0,
    },
  },
});

export const zoomIn = (
  delay: number,
  duration: number,
): {
  hidden: {
    scale: number;
    opacity: number;
  };
  show: {
    scale: number;
    opacity: number;
    transition: {
      type: string;
      delay: number;
      duration: number;
      ease: string;
    };
  };
} => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration: 0.5,
      ease: "easeOut",
    },
  },
});

export const footerVariants: {
  hidden: {
    opacity: number;
    y: number;
    transition: {
      type: string;
      stiffness: number;
      damping: number;
    };
  };
  show: {
    opacity: number;
    y: number;
    transition: {
      type: string;
      stiffness: number;
      delay: number;
    };
  };
} = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0,
    },
  },
};

// Duplicate declaration removed