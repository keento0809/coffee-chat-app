"use client";

import { BackButton } from "@/app/components/common/button/BackButton/BackButton";
import { BaseButton } from "@/app/components/common/button/BaseButton/BaseButton";
import { PageTitle } from "@/app/components/common/title/PageTitle";
import { FC } from "react";
import { signOut } from "@/app/(auth)/signout/lib/actions";
import { EditProfileDialog } from "../EditProfileDialog/EditProfileDialog";
import { UserProfile } from "@/types";

type MyPageProps = {
  userProfile?: UserProfile;
};

export const MyPage: FC<MyPageProps> = ({ userProfile }) => {
  return (
    <div className="text-center">
      <BackButton />
      <PageTitle title="My Page" />
      <div className="py-10 flex flex-col gap-8 items-center">
        <p>Email: {userProfile?.email ?? ""}</p>
        <EditProfileDialog />
      </div>
      <div className="py-10">
        <BaseButton
          className="bg-white text-slate-600 border-indigo-600 border w-1/4"
          onClick={() => signOut()}
        >
          SignOut
        </BaseButton>
      </div>
    </div>
  );
};
