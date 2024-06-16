"use client";

import { BackButton } from "@/app/components/common/button/BackButton/BackButton";
import { SignupForm } from "../SignupForm/SignupForm";
import { PageTitle } from "@/app/components/common/title/PageTitle";

export const SignupPage = () => {
  return (
    <div className="text-center">
      <BackButton />
      <PageTitle title="Signup Here!" />
      <div className="py-16 flex flex-col items-center">
        <SignupForm />
      </div>
    </div>
  );
};
