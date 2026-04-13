"use client";

import { Slider as SliderPrimitive } from "radix-ui";
import * as React from "react";

import { cn } from "@repo/ui/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className,
    )}
    ref={ref}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    {(props.value ?? props.defaultValue)?.map((_, index) => (
      <SliderPrimitive.Thumb
        className="block h-4 w-4 rounded bg-primary border-2 border-foreground bg-background shadow-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        key={index}
      />
    ))}
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

interface DynamicSliderProps {
  value: number[];
  onValueChange: React.Dispatch<React.SetStateAction<number[]>>;
  min?: number;
  max?: number;
  step?: number;
}

export function DynamicSlider({
  max = 100,
  min = 1,
  step = 1,
  value,
  onValueChange,
}: DynamicSliderProps) {
  return (
    <div className="mx-auto w-full max-w-sm">
      <div className="flex w-full items-center justify-between gap-2">
        <span className="text-muted-foreground text-base font-semibold font-heading tracking-wide">
          {min}
        </span>
        <Slider
          min={min}
          max={max}
          onValueChange={onValueChange}
          step={step}
          value={value}
        />
        <span className="text-muted-foreground text-base font-semibold font-heading tracking-wide">
          {max}
        </span>
      </div>
    </div>
  );
}
