"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signup(formData: FormData) {
  const supabase = createClient();

  const signUpUserData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error, data } = await supabase.auth.signUp(signUpUserData);

  if (error) redirect("/error");

  if (data.user) {
    const { id, email } = data.user;
    const profileData = {
      id,
      email,
      username: null,
      occupation: null,
      hobby: null,
      socialMedialinks: [],
    };
    const { error } = await supabase.from("profiles").insert(profileData);

    if (error) redirect("/error");
  }

  // TODO: I'd like to insert a new user profile data to profiles table of supabase here

  revalidatePath("/", "layout");
  redirect("/home");
}
