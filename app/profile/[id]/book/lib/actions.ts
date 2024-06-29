"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";
import { z } from "zod";

const formSchema = z.object({
  userid: z.string({ message: "username is required" }),
  date: z.string(),
  time: z.string({ message: "time is required" }),
  note: z.string(),
});

export async function book(userId: string, formData: FormData) {
  const supabase = createClient();

  const data = {
    userid: userId,
    date: formData.get("date"),
    time: formData.get("time"),
    note: formData.get("note"),
  };

  const parsedFormData = formSchema.safeParse(data);

  if (!parsedFormData.success) {
    console.log("koreha????????");
    return { error: parsedFormData.error };
  }

  const { error } = await supabase
    .from("coffee_chat")
    .insert(parsedFormData.data);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/layout");
  redirect("/home");
}
