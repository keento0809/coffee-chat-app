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
  userId: z.string().uuid(),
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
    userId,
    date,
    setDate,
    form,
    clientAction,
    timeOptions,
    selectableTimeOptions,
    handleChangeTimeOption,
    selectedTime,
    setSelectedTime,
  } = useBookCoffeeChatForm();

  return (
    <Form {...form}>
      <form action={clientAction} className="space-y-8 mx-auto max-w-[450px]">
        <FormField
          control={form.control}
          name="userid"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-left pl-1 block">Username</FormLabel>
              <FormControl>
                <>
                  <Input
                    readOnly
                    defaultValue={
                      userProfile.username !== null ? userProfile.username : ""
                    }
                    disabled
                  />
                  <Input
                    defaultValue={userId}
                    {...field}
                    disabled
                    className="hidden"
                  />
                </>
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
              <DatePicker date={date} setDate={setDate} />
              <FormControl>
                <Input
                  className="hidden"
                  {...field}
                  value={date ? date.toString() : ""}
                />
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
                <>
                  <div className="flex items-center gap-2">
                    <TimeSelector
                      placeholderText="From"
                      selectItems={timeOptions}
                      onValueChange={handleChangeTimeOption}
                    />
                    <div>〜</div>
                    <TimeSelector
                      placeholderText="To"
                      selectItems={selectableTimeOptions}
                      onValueChange={(val: string) =>
                        setSelectedTime({ ...selectedTime, to: val })
                      }
                    />
                  </div>
                  <Input
                    className="hidden"
                    {...field}
                    value={selectedTime.from + "~" + selectedTime.to}
                  />
                </>
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
                <Textarea {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <BaseButton type="submit">Submit</BaseButton>
      </form>
    </Form>
  );
};
