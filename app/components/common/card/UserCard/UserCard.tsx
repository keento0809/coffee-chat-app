"use client";

import Image from "next/image";
import testImg from "@/public/images/avatar-test.jpg";
import { FC } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type UserCardProps = {
  className?: string;
  linkURL?: string;
};

export const UserCard: FC<UserCardProps> = ({ className, linkURL = "#" }) => {
  return (
    <Link
      href={linkURL}
      className={cn(
        "p-5 block mx-1 border rounded text-center text-gray-500 max-w-sm lg:min-w-[300px]",
        className
      )}
    >
      <Image
        className="w-32 h-32 rounded-full mx-auto"
        width={138}
        height={128}
        src={testImg}
        alt="avatarImg"
      />
      <div className="text-sm mt-5">
        <a
          href="#"
          className="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out"
        >
          Jane Doe
        </a>
        <p>Blogger &amp; Youtuber</p>
      </div>

      <p className="mt-2 text-sm text-gray-900">
        Lorem ipsum dolor sit amet, consecte adipisicing elit. Voluptatibus quia
        Maiores et perferendis eaque.
      </p>
    </Link>
  );
};
