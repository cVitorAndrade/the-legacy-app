import { cn } from "@repo/ui/lib/utils";
import * as React from "react";
import { Input } from "./input";
import { Euro } from "lucide-react";

export interface MonetaryInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "type" | "value" | "onChange" | "max"
  > {
  currencyFormat?: Intl.NumberFormat;
  onChange?: (value: number) => void;
  value?: number;
  max?: number;
}

const defaultNumberFormat = new Intl.NumberFormat("pt-BR", {
  style: "decimal",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const MonetaryInput = React.forwardRef<HTMLInputElement, MonetaryInputProps>(
  (
    {
      className,
      currencyFormat,
      onChange,
      onFocus,
      value,
      max,
      ...props
    },
    ref,
  ) => {
    const formatCurrency = (val: number) => {
      return (currencyFormat ?? defaultNumberFormat).format(val);
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      const target = e.currentTarget;
      target.setSelectionRange(target.value.length, target.value.length);
      onFocus?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const target = e.currentTarget;
      const numericValue = Number(target.value.replace(/\D/g, "")) / 100;
      if (max !== undefined && numericValue > max) {
        return;
      }

      onChange?.(numericValue);
    };

    const displayValue = value !== undefined ? formatCurrency(value) : "";

    return (
      <div className="relative w-full">
        <Euro className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          className={cn("h-10 bg-card pl-9 text-sm", className)}
          onFocus={handleFocus}
          onChange={handleChange}
          value={displayValue}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
MonetaryInput.displayName = "MonetaryInput";

export { MonetaryInput };
