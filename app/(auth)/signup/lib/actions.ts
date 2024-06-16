"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import type { UserProfile } from "@/types";
import { z } from "zod";
import { EMAIL_PATTERN } from "../../login/hooks/LoginForm/useLoginForm";

const formSchema = z
  .object({
    username: z
      .string({ required_error: "Username is required." })
      .min(2, { message: "Username must be more than 2 words" }),
    email: z
      .string({ required_error: "Email is required." })
      .email({ message: "Please enter correct email address" })
      .regex(EMAIL_PATTERN, { message: "Please enter correct pattern" }),
    password: z
      .string({ required_error: "Password is required." })
      .min(6, { message: "Password must be more than 6 characters" }),
    passwordConfirmation: z
      .string({ required_error: "Password Confirmation is required." })
      .min(6, {
        message: "Password Confirmation must be more than 6 characters",
      }),
  })
  .superRefine(({ password, passwordConfirmation }, ctx) => {
    if (password !== passwordConfirmation) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["passwordConfirmation"],
      });
    }
  });

export async function signup(formData: FormData) {
  const supabase = createClient();

  const parsedFormData = formSchema.safeParse(formData);
  if (!parsedFormData.success) {
    const { username, email, password, passwordConfirmation } =
      parsedFormData.error.flatten().fieldErrors;
    return {
      usernameError: username ? username[0] : "",
      emailError: email ? email[0] : "",
      password: password ? password[0] : "",
      passwordConfirmation: passwordConfirmation ? passwordConfirmation[0] : "",
    };
  }

  const { error, data } = await supabase.auth.signUp(parsedFormData.data);

  if (error) {
    redirect("/error");
  }

  if (data.user) {
    const { id, email } = data.user;
    const username = parsedFormData.data.username;
    const profileData: UserProfile = {
      id,
      email: email ?? "",
      username,
      occupation: "",
      hobby: [],
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
