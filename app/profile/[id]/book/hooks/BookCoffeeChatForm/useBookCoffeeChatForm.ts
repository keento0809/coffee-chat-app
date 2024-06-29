"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { generateTimeOptions } from "@/utils";
import { useMemo, useState } from "react";
import { book } from "../../lib/actions";
import { toast } from "@/app/components/shadcn/toast/use-toast";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import { UserProfile } from "@/types";

const formSchema = z.object({
  userid: z.string({ message: "userId is required" }),
  date: z.string(),
  time: z.string({ message: "time is required" }),
  note: z.string(),
});

type SelectedTime = {
  from: string;
  to: string;
};

type FormType = z.infer<typeof formSchema>;

export const useBookCoffeeChatForm = () => {
  const pathname = usePathname();
  const userId = pathname.split("/")[2];

  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userid: userId,
      date: "",
      time: "",
      note: "",
    },
  });
  const [optIndex, setOptIndex] = useState(0);
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<SelectedTime>({
    from: "",
    to: "",
  });

  const timeOptions = generateTimeOptions();

  const selectableTimeOptions = useMemo(() => {
    return timeOptions.slice(optIndex + 1);
  }, [optIndex, timeOptions]);

  const handleChangeTimeOption = (val: string) => {
    const idx = timeOptions.map((opt) => opt.value).indexOf(val);
    setSelectedTime({ ...selectedTime, from: val });
    setOptIndex(idx);
  };

  const clientAction = async (formData: FormData) => {
    const updatedBook = book.bind(null, userId);
    const result = await updatedBook(formData);

    if (result?.error) {
      console.error(result.error);
      redirect("/error");
    }

    toast({
      description: "New coffee chat successfully booked!",
    });
  };

  return {
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
  };
};
