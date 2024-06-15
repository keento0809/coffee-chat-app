"use client";

import { BackButton } from "@/app/components/common/button/BackButton/BackButton";
import { LinkButton } from "@/app/components/common/button/LinkButton/LinkButton";
import { PageTitle } from "@/app/components/common/title/PageTitle";
import { ProfileList } from "@/app/mypage/components/ProfileList/ProfileList";
import { UserProfile } from "@/types";
import { FC } from "react";

type ProfilePageProps = {
  userProfile: UserProfile;
};

export const ProfilePage: FC<ProfilePageProps> = ({ userProfile }) => {
  return (
    <div className="text-center">
      <BackButton />
      <PageTitle title={`${userProfile.username}'s Profile`} />
      <ProfileList userProfile={userProfile} />
      <div className="py-16">
        <LinkButton text="Book" linkURL={`/profile/${userProfile.id}/book`} />
      </div>
    </div>
  );
};
