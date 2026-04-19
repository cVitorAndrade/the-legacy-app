"use client";

import { useEffect, useRef, useState } from "react";

type NumberTickerProps = {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  locale?: string; // Adicionado para flexibilidade, padrão pt-BR
};

export function NumberTicker({
  end,
  start = 0,
  duration = 2,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
  locale = "pt-BR", // Padrão brasileiro (ex: 14.285,00)
}: NumberTickerProps) {
  const [value, setValue] = useState(start);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    let frame: number;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;

      const progress = timestamp - startTimeRef.current;
      const percent = Math.min(progress / (duration * 1000), 1);

      const eased = 1 - Math.pow(1 - percent, 3);

      const current = start + (end - start) * eased;
      setValue(current);

      if (percent < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [start, end, duration]);

  const formattedValue = new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);

  return (
    <span className={className}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
}
