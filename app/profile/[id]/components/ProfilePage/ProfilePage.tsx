"use client";

import { BackButton } from "@/app/components/common/button/BackButton/BackButton";
import { LinkButton } from "@/app/components/common/button/LinkButton/LinkButton";
import { PageTitle } from "@/app/components/common/title/PageTitle";
import { Button } from "@/app/components/shadcn/button/button";
import Link from "next/link";
import { FC } from "react";

type ProfilePageProps = {
  userId: string;
};

export const ProfilePage: FC<ProfilePageProps> = ({ userId }) => {
  return (
    <div className="text-center">
      <BackButton />
      <PageTitle title="Profile" />
      <p className="pt-16">{userId}</p>
      <div className="py-16">
        <LinkButton text="Book" linkURL={`/profile/${userId}/book`} />
      </div>
    </div>
  );
};
