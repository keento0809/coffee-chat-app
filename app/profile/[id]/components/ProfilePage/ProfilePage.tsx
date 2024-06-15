"use client";

import { BackButton } from "@/app/components/common/button/BackButton/BackButton";
import { LinkButton } from "@/app/components/common/button/LinkButton/LinkButton";
import { PageTitle } from "@/app/components/common/title/PageTitle";
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
      <p className="pt-16">{userProfile.occupation}</p>
      <div className="py-16">
        <LinkButton text="Book" linkURL={`/profile/${userProfile.id}/book`} />
      </div>
    </div>
  );
};
