"use client";

import { useEffect } from "react";
import { Button } from "@/app/components/shadcn/button/button";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="text-center">
      <h4 className="text-lg lg:text-xl">Something went wrong!</h4>
      <Button onClick={() => reset()}>Back</Button>
    </div>
  );
}
