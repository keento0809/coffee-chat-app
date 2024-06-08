"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/shadcn/form/form";
import { Input } from "@/app/components/shadcn/input/input";
import { useSignupForm } from "@/app/(auth)/signup/hooks/SignupForm/useSignupForm";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { signup } from "@/app/(auth)/signup/lib/actions";
import { BaseButton } from "@/app/components/common/button/BaseButton/BaseButton";

export const SignupForm = () => {
  const {
    form,
    onSubmit,
    usernameError,
    emailError,
    passwordError,
    passwordConfirmationError,
  } = useSignupForm();
  const router = useRouter();

  return (
    <Form {...form}>
      <form
        // onSubmit={onSubmit}
        action={signup}
        className="w-full max-w-[450px] space-y-6 px-4 md:px-0"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className={cn(
                  "block pl-1.5 text-left",
                  usernameError && "text-red-500"
                )}
              >
                Username
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="username"
                  {...field}
                  className={cn(usernameError && "border-red-500")}
                />
              </FormControl>
              <FormMessage>
                {usernameError && usernameError.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className={cn(
                  "block pl-1.5 text-left",
                  emailError && "text-red-500"
                )}
              >
                Email
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="email"
                  {...field}
                  className={cn(emailError && "border-red-500")}
                />
              </FormControl>
              <FormMessage>{emailError && emailError.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className={cn(
                  "block pl-1.5 text-left",
                  passwordError && "text-red-500"
                )}
              >
                Password
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="password"
                  {...field}
                  className={cn(passwordError && "border-red-500")}
                />
              </FormControl>
              <FormMessage>
                {passwordError && passwordError.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="passwordConfirmation"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className={cn(
                  "block pl-1.5 text-left",
                  passwordConfirmationError && "text-red-500"
                )}
              >
                Password Confirmation
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="password confirmation"
                  {...field}
                  className={cn(passwordConfirmationError && "border-red-500")}
                />
              </FormControl>
              <FormMessage>
                {passwordError && passwordError.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <BaseButton type="submit" className="w-full">
          Submit
        </BaseButton>
      </form>
      <div className="py-6 text-xs w-full flex justify-center items-center">
        Already TechMarche member?{" "}
        <span
          className="text-blue-400 inline-block px-1 underline cursor-pointer"
          onClick={() => router.push("/login")}
        >
          login
        </span>{" "}
        here
      </div>
    </Form>
  );
};
