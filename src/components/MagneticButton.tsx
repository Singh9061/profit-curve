"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: "button" | "a" | "div";
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
}

export function MagneticButton({
  children,
  className = "",
  strength = 0.35,
  as = "div",
  href,
  onClick,
  target,
  rel,
  type,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * strength, y: y * strength });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  const motionProps = {
    onMouseMove: handleMouse,
    onMouseLeave: reset,
    animate: { x: position.x, y: position.y },
    transition: { type: "spring" as const, stiffness: 250, damping: 18, mass: 0.4 },
    className,
    onClick,
  };

  if (as === "a" && href) {
    return (
      <motion.a href={href} target={target} rel={rel} ref={ref as React.Ref<HTMLAnchorElement>} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  if (as === "button") {
    return (
      <motion.button type={type || "button"} ref={ref as React.Ref<HTMLButtonElement>} {...motionProps}>
        {children}
      </motion.button>
    );
  }

  return <motion.div ref={ref as React.Ref<HTMLDivElement>} {...motionProps}>{children}</motion.div>;
}
