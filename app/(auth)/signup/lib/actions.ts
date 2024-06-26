"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import type { UserProfile } from "@/types";

export async function signup(formData: FormData) {
  const supabase = createClient();

  const signUpUserData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error, data } = await supabase.auth.signUp(signUpUserData);

  if (error) {
    console.error(error);
    redirect("/error");
  }

  if (data.user) {
    const { id, email } = data.user;
    const profileData: UserProfile = {
      id,
      email: email ?? "",
      username: null,
      occupation: null,
      hobby: null,
      socialmedialinks: [],
    };
    const { error } = await supabase.from("profiles").insert(profileData);

    if (error) {
      console.error(error);
      redirect("/error");
    }
  }

  revalidatePath("/", "layout");
  redirect("/home");
}
