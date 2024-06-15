import { createClient } from "@/utils/supabase/server";
import { HomePage } from "./components/HomePage/HomePage";
import { UserProfile } from "@/types";
import { redirect } from "next/navigation";

export default async function Page() {
  const supabase = createClient();
  const { data: userProfiles, error: fetchError } = await supabase
    .from("profiles")
    .select("*")
    .returns<UserProfile[]>();

  if (fetchError) {
    console.error(fetchError);
    redirect("/error");
  }

  return <HomePage userProfiles={userProfiles} />;
}
