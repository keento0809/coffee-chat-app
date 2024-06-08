"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/shadcn/form/form";
import { Input } from "@/app/components/shadcn/input/input";
import { BaseButton } from "../../button/BaseButton/BaseButton";

const formSchema = z.object({
  username: z.string({ message: "username is needed" }),
});

type FormType = z.infer<typeof formSchema>;

export const BookCoffeeChatForm = () => {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = () => {
    console.log("values");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input readOnly defaultValue={"testname"} disabled {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <BaseButton type="submit">Submit</BaseButton>
      </form>
    </Form>
  );
};
