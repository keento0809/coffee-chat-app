"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/app/components/shadcn/button/button";

export const ErrorPage = () => {
  const router = useRouter();
  return (
    <div className="text-center flex flex-col items-center gap-8">
      <h4 className="text-lg lg:text-xl">Something went wrong!</h4>
      <Button className="w-1/2" onClick={() => router.push("/")}>
        Back
      </Button>
    </div>
  );
};
