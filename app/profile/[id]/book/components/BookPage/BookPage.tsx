"use client";

import { BackButton } from "@/app/components/common/button/BackButton/BackButton";
import { BookCoffeeChatForm } from "@/app/profile/[id]/book/components/BookCoffeeChatForm/BookCoffeeChatForm";
import { PageTitle } from "@/app/components/common/title/PageTitle";
import { UserProfile } from "@/types";
import { FC } from "react";

type BookPageProps = {
  userProfile: UserProfile;
};

export const BookPage: FC<BookPageProps> = ({ userProfile }) => {
  return (
    <div className="text-center">
      <BackButton />
      <PageTitle title="Book Coffee Chat" />
      <div className="py-10">
        <BookCoffeeChatForm userProfile={userProfile} />
      </div>
    </div>
  );
};
