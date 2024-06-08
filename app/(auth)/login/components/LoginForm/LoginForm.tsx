"use client";

import { Button } from "@/app/components/shadcn/button/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/shadcn/form/form";
import { Input } from "@/app/components/shadcn/input/input";
import { useLoginForm } from "@/app/(auth)/login/hooks/LoginForm/useLoginForm";
// import { Loader } from "@/src/components/loader/Loader";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const { form, onSubmit, isLoading, emailError, passwordError } =
    useLoginForm();
  const router = useRouter();

  return (
    <>
      {/* {isLoading && <Loader />} */}
      <Form {...form}>
        <form
          onSubmit={onSubmit}
          className="w-full flex flex-col gap-8 max-w-[450px] px-4 md:px-0"
        >
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
          <Button
            type="submit"
            className="block mt-10 w-[60%] mx-auto rounded-md bg-indigo-600 px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};
