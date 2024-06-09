"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { EMAIL_PATTERN } from "../LoginForm/useLoginForm";

export const loginUserSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Please enter correct email address" })
    .regex(EMAIL_PATTERN, { message: "Please enter correct pattern" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be more than 6 characters" }),
});

type LoginForm = z.infer<typeof loginUserSchema>;

export const useServerActionLoginForm = () => {
  const { pending } = useFormStatus();

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginUserSchema),
  });

  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (pending) {
      event.preventDefault();
    }
  };

  return {
    router,
    form,
    pending,
    handleClick,
  };
};
