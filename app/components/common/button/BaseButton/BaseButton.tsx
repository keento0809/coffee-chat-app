import { Button } from "@/app/components/shadcn/button/button";
import { FC, ReactNode } from "react";
import { ButtonProps } from "@/app/components/shadcn/button/button";
import { cn } from "@/lib/utils";

type BaseButtonProps = {
  className?: string;
  children: ReactNode;
} & ButtonProps;

export const BaseButton: FC<BaseButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Button
      className={cn(
        "rounded-md bg-indigo-600 px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};
