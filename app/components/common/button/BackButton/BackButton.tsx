"use client";

import React from "react";
import { Button } from "@/app/components/shadcn/button/button";
import { useRouter } from "next/navigation";

export const BackButton = () => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      className="mb-12 block text-left bg-transparent text-slate-600 border-none hover:bg-transparent"
    >
      <span className="inline-block mr-2">&lt;</span>Back
    </Button>
  );
};
