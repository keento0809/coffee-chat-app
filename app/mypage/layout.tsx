import { Metadata } from "next";
import { Toaster } from "@/app/components/shadcn/toast/toaster";

export const metadata: Metadata = {
  title: "MyPage - Coffee Chat App",
  description: "This is my page",
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      {children}
      <Toaster />
    </div>
  );
}
