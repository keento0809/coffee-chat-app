"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import {
  SelectItem,
  TimeSelector,
} from "@/app/components/common/select/TimeSelector/TimeSelector";
import { generateTimeOptions } from "@/utils";
import { Textarea } from "@/app/components/shadcn/textarea/textarea";

const formSchema = z.object({
  username: z.string({ message: "username is required" }),
  date: z.string(),
  time: z.string({ message: "time is required" }),
  note: z.string().nullable(),
});

type FormType = z.infer<typeof formSchema>;

export const BookCoffeeChatForm = () => {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      date: "",
      time: "",
    },
  });

  const timeOptions = generateTimeOptions();
  const selectableTimeOptions = (item: SelectItem) => {
    const idx = timeOptions.indexOf(item);
    console.log("idx: ", idx);
  };

  const onSubmit = () => {
    console.log("vals: ", form.getValues());
  };

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
                <Input readOnly defaultValue={"testname"} disabled {...field} />
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
                    {...field}
                  />
                  <div>〜</div>
                  <TimeSelector
                    placeholderText="To"
                    selectItems={timeOptions}
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
          render={({}) => (
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
