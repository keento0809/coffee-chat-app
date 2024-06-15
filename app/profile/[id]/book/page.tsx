import { createClient } from "@/utils/supabase/server";
import { BookPage } from "./components/BookPage/BookPage";
import { redirect } from "next/navigation";
import { UserProfile } from "@/types";

export default async function Page({ params }: { params: { id: string } }) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user) redirect("/error");

  const { data: userProfiles, error: fetchError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", params.id)
    .returns<UserProfile[]>();

  if (fetchError) {
    console.error(fetchError);
    redirect("/error");
  }

  return <BookPage userProfile={userProfiles[0]} />;
}
