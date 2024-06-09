"use server";

import { UserProfile } from "@/types";
import { redirect } from "next/navigation";

export async function updateProfile(formData: FormData, userId: string) {
  const data: UserProfile = {
    id: userId,
    username: formData.get("username") as string,
    email: formData.get("email") as string,
    occupation: formData.get("occupation") as string,
    hobby: formData.getAll("hobby") as string[],
    socialmedialinks: formData.getAll("socialmedialinks") as string[],
  };

  redirect("/home");
}
