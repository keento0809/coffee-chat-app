"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { EMAIL_PATTERN } from "../LoginForm/useLoginForm";
import { login } from "@/app/(auth)/login/lib/actions";
import { useState } from "react";
import { toast } from "@/app/components/shadcn/toast/use-toast";

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
  const [errors, setErrors] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginUserSchema),
  });

  const router = useRouter();

  const clientAction = async (formData: FormData) => {
    const result = await login(formData);

    if (result.emailError || result.passwordError) {
      setErrors({
        email: result.emailError,
        password: result.passwordError,
      });
    }

    toast({
      description: "Successfully logged in!",
    });
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (pending) {
      event.preventDefault();
    }
  };

  return {
    router,
    errors,
    clientAction,
    form,
    pending,
    handleClick,
  };
};
