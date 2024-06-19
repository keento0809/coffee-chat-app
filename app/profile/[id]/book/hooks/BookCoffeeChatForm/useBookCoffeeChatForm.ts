"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { generateTimeOptions } from "@/utils";
import { useMemo, useState } from "react";
import { book } from "../../lib/actions";
import { toast } from "@/app/components/shadcn/toast/use-toast";

const formSchema = z.object({
  username: z.string({ message: "username is required" }),
  date: z.string(),
  time: z.string({ message: "time is required" }),
  note: z.string(),
});

type FormType = z.infer<typeof formSchema>;

export const useBookCoffeeChatForm = () => {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      date: "",
      time: "",
    },
  });
  const [optIndex, setOptIndex] = useState(0);
  const [date, setDate] = useState<Date>();

  const timeOptions = generateTimeOptions();

  // const updateBookWithUserId = book.bind(null,'ID')

  const selectableTimeOptions = useMemo(() => {
    return timeOptions.slice(optIndex + 1);
  }, [optIndex, timeOptions]);

  const handleChangeTimeOption = (val: string) => {
    const idx = timeOptions.map((opt) => opt.value).indexOf(val);
    setOptIndex(idx);
  };

  const clientAction = async (formData: FormData) => {
    await book(formData);

    toast({
      description: "New coffee chat successfully booked!",
    });
  };

  return {
    date,
    setDate,
    form,
    timeOptions,
    selectableTimeOptions,
    handleChangeTimeOption,
  };
};
