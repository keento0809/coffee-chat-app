"use client";

import { FC } from "react";
import { LoginForm } from "@/app/(auth)/login/components/LoginForm/LoginForm";
import { ServerActionLoginForm } from "../ServerActionLoginForm/ServerActionLoginForm";
import { PageTitle } from "@/app/components/common/title/PageTitle";
import { BackButton } from "@/app/components/common/button/BackButton/BackButton";

export const LoginPage: FC = () => {
  return (
    <div className="text-center">
      <BackButton />
      <PageTitle title="Login Here!" />
      <div className="py-16 flex justify-center items-center">
        <ServerActionLoginForm />
      </div>
    </div>
  );
};
