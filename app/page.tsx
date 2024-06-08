import { HeroPage } from "./HeroPage";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();
  if (data?.user) redirect("/home");

  return (
    <main>
      <HeroPage />
    </main>
  );
}
