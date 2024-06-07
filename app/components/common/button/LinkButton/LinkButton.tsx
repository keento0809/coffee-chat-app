import { Button } from "@/app/components/shadcn/button/button";
import Link from "next/link";
import { FC } from "react";

type LinkButtonProps = {
  text: string;
  linkURL: string;
};

export const LinkButton: FC<LinkButtonProps> = ({ text, linkURL = "#" }) => {
  return (
    <Button asChild>
      <Link
        href={linkURL}
        className="rounded-md bg-indigo-600 px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {text}
      </Link>
    </Button>
  );
};
