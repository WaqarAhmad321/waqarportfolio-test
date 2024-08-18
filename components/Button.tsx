import { cn } from "@/utils/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

const buttonVariants = cva(
  "transition-colors duration-300 capitalize flex flex-row items-center justify-center gap-2 font-bold rounded-md",
  {
    variants: {
      variant: {
        primary:
          "bg-special text-[#F4FFFD] hover:bg-blue-600 text-xl dark:bg-cherry",
        secondary:
          "bg-special rounded-full hover:bg-blue-600 transition-colors w-36 xs:w-52 md:w-40 text-[#F4FFFD] dark:bg-cherry text-base tracking-wide",
        outlined:
          "border border-special dark:border-cherry dark:text-cherry text-special ease-in-out md:ease-in hover:text-blue-600 dark:hover:text-cherry dark:hover:border-cherry text-xl hover:border-blue-600",
      },
      size: {
        sm: "p-1 md:p-2",
        md: "py-3 px-8",
        lg: "p-3 md:p-5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  variant,
  size,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ className, variant, size, ...props }))}
    >
      {children}
    </button>
  );
};
export default Button;
