"use client";

import { FC } from "react";
import { LoginForm } from "@/app/(auth)/login/components/LoginForm/LoginForm";

export const LoginPage: FC = () => {
  return (
    <div className="min-h-[calc(100svh_-_80px)] flex flex-col justify-center items-center gap-8 pb-10 lg:pb-20">
      <LoginForm />
    </div>
  );
};
