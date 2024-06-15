"use client";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/app/components/shadcn/form/form";
import { Input } from "@/app/components/shadcn/input/input";
import { BaseButton } from "../../../../../components/common/button/BaseButton/BaseButton";
import { DatePicker } from "@/app/components/common/datepicker/DatePicker/DatePicker";
import { TimeSelector } from "@/app/components/common/select/TimeSelector/TimeSelector";
import { Textarea } from "@/app/components/shadcn/textarea/textarea";
import { UserProfile } from "@/types";
import { FC } from "react";
import { useBookCoffeeChatForm } from "../../hooks/BookCoffeeChatForm/useBookCoffeeChatForm";

const formSchema = z.object({
  username: z.string({ message: "username is required" }),
  date: z.string(),
  time: z.string({ message: "time is required" }),
  note: z.string().nullable(),
});

type FormType = z.infer<typeof formSchema>;

type BookCoffeeChatFormProps = {
  userProfile: UserProfile;
};

export const BookCoffeeChatForm: FC<BookCoffeeChatFormProps> = ({
  userProfile,
}) => {
  const {
    form,
    timeOptions,
    selectableTimeOptions,
    handleChangeTimeOption,
    onSubmit,
  } = useBookCoffeeChatForm();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 mx-auto max-w-[450px]"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-left pl-1 block">Username</FormLabel>
              <FormControl>
                <Input
                  readOnly
                  defaultValue={
                    userProfile.username !== null ? userProfile.username : ""
                  }
                  disabled
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-left pl-1 block">Date</FormLabel>
              <FormControl>
                <DatePicker />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-left pl-1 block">Time</FormLabel>
              <FormControl>
                <div className="flex items-center gap-2">
                  <TimeSelector
                    placeholderText="From"
                    selectItems={timeOptions}
                    onValueChange={handleChangeTimeOption}
                    {...field}
                  />
                  <div>〜</div>
                  <TimeSelector
                    placeholderText="To"
                    selectItems={selectableTimeOptions}
                    {...field}
                  />
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="note"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-left pl-1 block">Note</FormLabel>
              <FormControl>
                <Textarea />
              </FormControl>
            </FormItem>
          )}
        />
        <BaseButton type="submit">Submit</BaseButton>
      </form>
    </Form>
  );
};
