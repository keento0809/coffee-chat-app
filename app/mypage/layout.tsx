import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MyPage - Coffee Chat App",
  description: "This is my page",
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
