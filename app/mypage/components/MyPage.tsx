import { User } from "@supabase/supabase-js";
import { FC } from "react";

type MyPageProps = {
  user: User;
};

export const MyPage: FC<MyPageProps> = ({ user }) => {
  return <div>MyPage: {user.email}</div>;
};
