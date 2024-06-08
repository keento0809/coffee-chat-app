import { MyPage } from "./components/MyPage";
import { redirect } from "next/navigation";
import { supabase } from "@/utils/supabase/server";

export default async function Page() {
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) redirect("/login");

  return <MyPage user={data.user} />;
}
