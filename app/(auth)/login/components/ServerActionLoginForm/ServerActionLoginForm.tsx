"use client";

import { useServerActionLoginForm } from "../../hooks/ServerActionLoginForm/useServerActionLoginForm";
import React from "react";
import { Input } from "@/app/components/shadcn/input/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/shadcn/form/form";
import { BaseButton } from "@/app/components/common/button/BaseButton/BaseButton";
import { cn } from "@/lib/utils";

export const ServerActionLoginForm = () => {
  const { form, pending, errors, clientAction, handleClick, router } =
    useServerActionLoginForm();

  return (
    <Form {...form}>
      <form
        action={clientAction}
        className="w-full space-y-6 max-w-[450px] md:px-0 px-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className={cn(
                  "block pl-1.5 text-left",
                  errors.email && "text-red-500"
                )}
              >
                Email
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  {...field}
                  name="email"
                  placeholder="Email"
                  className={cn("block mb-8", errors.email && "border-red-500")}
                />
              </FormControl>
              <FormMessage>{errors.email && errors.email}</FormMessage>
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
                  errors.password && "text-red-500"
                )}
              >
                Password
              </FormLabel>
              <FormControl>
                <Input
                  type="Password"
                  {...field}
                  name="password"
                  placeholder="password"
                  className={cn(
                    "block mb-8",
                    errors.password && "border-red-500"
                  )}
                />
              </FormControl>
              <FormMessage>{errors.password && errors.password}</FormMessage>
            </FormItem>
          )}
        />
        <BaseButton
          aria-disabled={pending}
          type="submit"
          className="w-1/2 mt-0"
          onClick={handleClick}
        >
          Login
        </BaseButton>
        <div className="pb-6 text-xs w-full flex justify-center items-center">
          New to Coffee Chat App?{" "}
          <span
            className="text-blue-400 inline-block px-1 underline cursor-pointer"
            onClick={() => router.push("/signup")}
          >
            signup
          </span>{" "}
          here
        </div>
      </form>
    </Form>
  );
};
