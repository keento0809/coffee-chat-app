import { createClient } from "@/utils/supabase/server";
import { ProfilePage } from "./components/ProfilePage/ProfilePage";
import { UserProfile } from "@/types";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const supabase = createClient();
  const { data: userProfiles, error: fetchError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", params.id)
    .returns<UserProfile[]>();

  // if (error || !data?.user) redirect("/login");

  if (fetchError) {
    console.error(fetchError);
    redirect("/error");
  }

  return <ProfilePage userProfile={userProfiles[0]} />;
}
