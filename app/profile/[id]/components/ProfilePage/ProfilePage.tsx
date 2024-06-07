"use client";

import { BackButton } from "@/app/components/common/button/BackButton";
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
        <Button asChild>
          <Link
            href="#"
            className="rounded-md bg-indigo-600 px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Book
          </Link>
        </Button>
      </div>
    </div>
  );
};
