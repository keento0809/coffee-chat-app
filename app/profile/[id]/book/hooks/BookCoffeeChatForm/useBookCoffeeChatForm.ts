"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { generateTimeOptions } from "@/utils";
import { useMemo, useState } from "react";

const formSchema = z.object({
  username: z.string({ message: "username is required" }),
  date: z.string(),
  time: z.string({ message: "time is required" }),
  note: z.string().nullable(),
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

  const timeOptions = generateTimeOptions();

  const selectableTimeOptions = useMemo(() => {
    return timeOptions.slice(optIndex + 1);
  }, [optIndex, timeOptions]);

  const handleChangeTimeOption = (val: string) => {
    const idx = timeOptions.map((opt) => opt.value).indexOf(val);
    setOptIndex(idx);
  };

  const onSubmit = () => {
    console.log("vals: ", form.getValues());
  };

  return {
    form,
    timeOptions,
    selectableTimeOptions,
    handleChangeTimeOption,
    onSubmit,
  };
};
