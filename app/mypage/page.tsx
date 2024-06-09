import { MyPage } from "./components/MyPage/MyPage";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { UserProfile } from "@/types";

export default async function Page() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) redirect("/login");

  const { data: userProfile, error: fetchError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", data.user.id)
    .returns<UserProfile[]>();

  if (fetchError) {
    console.error(fetchError);
    redirect("/error");
  }

  return <MyPage userProfile={userProfile[0]} />;
}
