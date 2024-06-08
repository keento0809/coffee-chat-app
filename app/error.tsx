"use client";

import { useEffect } from "react";
import { BaseButton } from "./components/common/button/BaseButton/BaseButton";

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
      <BaseButton onClick={() => reset()}>Back</BaseButton>
    </div>
  );
}
