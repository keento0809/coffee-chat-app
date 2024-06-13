"use client";

import { BackButton } from "@/app/components/common/button/BackButton/BackButton";
import { PageTitle } from "@/app/components/common/title/PageTitle";
import { FC } from "react";
import { EditProfileDialog } from "../EditProfileDialog/EditProfileDialog";
import { UserProfile } from "@/types";
import { ProfileList } from "../ProfileList/ProfileList";

type MyPageProps = {
  userProfile: UserProfile;
};

export const MyPage: FC<MyPageProps> = ({ userProfile }) => {
  return (
    <div className="text-center">
      <BackButton />
      <PageTitle title="My Page" />
      <div className="py-10 flex flex-col gap-8 items-center">
        <ProfileList useProfile={userProfile} />
        <EditProfileDialog userProfile={userProfile} />
      </div>
    </div>
  );
};
