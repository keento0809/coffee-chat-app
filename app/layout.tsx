import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/common/nav/Navbar/Navbar";
import { BgWrapper } from "./components/common/wrapper/BgWrapper/BgWrapper";
import { createClient } from "@/utils/supabase/server";

export const metadata: Metadata = {
  title: "Coffee Chat App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();
  return (
    <html lang="en">
      <body>
        <BgWrapper>
          <Navbar user={data.user} />
          {children}
        </BgWrapper>
      </body>
    </html>
  );
}
