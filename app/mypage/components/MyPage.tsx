"use client";

import { BackButton } from "@/app/components/common/button/BackButton/BackButton";
import { BaseButton } from "@/app/components/common/button/BaseButton/BaseButton";
import { PageTitle } from "@/app/components/common/title/PageTitle";
import { User } from "@supabase/supabase-js";
import { FC } from "react";

type MyPageProps = {
  user: User;
};

export const MyPage: FC<MyPageProps> = ({ user }) => {
  return (
    <div className="text-center">
      <BackButton />
      <PageTitle title="My Page" />
      <div className="py-10 flex flex-col gap-8 items-center">
        <p>MyPage: {user.email}</p>
        <BaseButton>Edit Profile</BaseButton>
      </div>
    </div>
  );
};
