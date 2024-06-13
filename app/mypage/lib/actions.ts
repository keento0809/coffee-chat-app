"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const formSchema = z.object({
  id: z.string().uuid(),
  username: z.string().nullable(),
  email: z.string().email({ message: "Email is Required" }),
  occupation: z.string().nullable(),
  hobby: z.string().array().nullable(),
  socialmedialinks: z.string().array().nullable(),
});

export async function updateProfile(id: string, formData: FormData) {
  const supabase = createClient();

  const data = {
    id,
    username: formData.get("username"),
    email: formData.get("email"),
    occupation: formData.get("occupation"),
    hobby: formData.getAll("hobby"),
    socialmedialinks: formData.getAll("socialmedialinks"),
  };
  const parsedData = formSchema.safeParse(data);

  if (!parsedData.success) {
    console.error(parsedData.error);
    redirect("/error");
  }

  const { data: updatedData, error } = await supabase
    .from("profiles")
    .update(parsedData.data)
    .eq("id", parsedData.data.id)
    .select();

  if (error) {
    console.error();
    redirect("/error");
  }

  console.log(updatedData);

  revalidatePath("/", "layout");
  redirect("/home");
}
