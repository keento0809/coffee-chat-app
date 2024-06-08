import { HeroPage } from "./HeroPage";
import { redirect } from "next/navigation";
import { supabase } from "@/utils/supabase/server";

export default async function Home() {
  const { data } = await supabase.auth.getUser();
  if (data?.user) redirect("/home");

  return (
    <main>
      <HeroPage />
    </main>
  );
}
