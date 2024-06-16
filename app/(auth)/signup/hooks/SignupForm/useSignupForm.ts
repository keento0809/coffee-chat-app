"use client";

import { useState } from "react";
import { z } from "zod";
import { EMAIL_PATTERN } from "@/app/(auth)/login/hooks/LoginForm/useLoginForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signup } from "@/app/(auth)/signup/lib/actions";

export const userSchema = z
  .object({
    username: z
      .string({ required_error: "Username is required." })
      .min(2, { message: "Username must be more than 2 words" }),
    email: z
      .string({ required_error: "Email is required." })
      .email({ message: "Please enter correct email address" })
      .regex(EMAIL_PATTERN, { message: "Please enter correct pattern" }),
    password: z
      .string({ required_error: "Password is required." })
      .min(6, { message: "Password must be more than 6 characters" }),
    passwordConfirmation: z
      .string({ required_error: "Password Confirmation is required." })
      .min(6, {
        message: "Password Confirmation must be more than 6 characters",
      }),
  })
  .superRefine(({ password, passwordConfirmation }, ctx) => {
    if (password !== passwordConfirmation) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["passwordConfirmation"],
      });
    }
  });

type SignupForm = z.infer<typeof userSchema>;

type ErrorType = {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export const useSignupForm = () => {
  const [errors, setErrors] = useState<ErrorType>({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const form = useForm<SignupForm>({
    resolver: zodResolver(userSchema),
  });

  const clientAction = async (formData: FormData) => {
    const result = await signup(formData);

    if (
      result.usernameError ||
      result.emailError ||
      result.password ||
      result.passwordConfirmation
    ) {
      setErrors({
        username: result.usernameError,
        email: result.emailError,
        password: result.password,
        passwordConfirmation: result.passwordConfirmation,
      });
    }
  };

  // const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   const signUpUserData = new FormData(event.currentTarget);
  //   const credentials = {
  //     username: signUpUserData.get("username"),
  //     email: signUpUserData.get("email"),
  //     password: signUpUserData.get("password"),
  //   };
  //   const parsedCredentials = userSchema.safeParse(credentials);

  //   if (!parsedCredentials.success) {
  //     setErrors(parsedCredentials.error);
  //     return;
  //   }

  //   try {
  //     const newUser = await fetch("/api/signup", {
  //       method: "POST",
  //       body: JSON.stringify(parsedCredentials.data),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     if (newUser) redirect("/home");
  //     //   toast({
  //     //     description: "Signup completed!",
  //     //   });
  //   } catch (error) {
  //     if (error instanceof Error) console.log(error.message);
  //     //   toast({
  //     //     variant: "destructive",
  //     //     description: "Failed to signup. Please try it again",
  //     //   });
  //   }
  // };

  return {
    form,
    clientAction,
    errors,
  };
};
