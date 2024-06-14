"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { z } from "zod";

const EMAIL_PATTERN = /^[\u0021-\u007e]+$/u;

const formSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Please enter correct email address" })
    .regex(EMAIL_PATTERN, { message: "Please enter correct pattern" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be more than 6 characters" }),
});

export async function login(queryData: FormData) {
  const parsedFormData = formSchema.safeParse({
    email: queryData.get("email"),
    password: queryData.get("password"),
  });

  if (!parsedFormData.success)
    return { errors: parsedFormData.error.flatten().fieldErrors };

  const supabase = createClient();
  const { error } = await supabase.auth.signInWithPassword(parsedFormData.data);

  if (error) {
    return { errors: error };
  }

  revalidatePath("/", "layout");
  redirect("/home");
}
