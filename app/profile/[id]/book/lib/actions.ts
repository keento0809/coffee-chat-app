"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";
import { z } from "zod";

const formSchema = z.object({
  username: z.string({ message: "username is required" }),
  date: z.string(),
  time: z.string({ message: "time is required" }),
  note: z.string(),
});

type FormType = z.infer<typeof formSchema>;

export async function book(formData: FormData) {
  const supabase = createClient();

  const parsedFormData = formSchema.safeParse(formData);

  if (!parsedFormData.success) {
    return { error: parsedFormData.error };
  }

  const { data, error } = await supabase
    .from("coffee_chat")
    .insert(parsedFormData.data);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/layout");
  redirect("/home");
}
