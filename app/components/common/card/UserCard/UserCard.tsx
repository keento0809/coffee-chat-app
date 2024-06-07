"use client";

import Image from "next/image";
import testImg from "@/public/images/avatar-test.jpg";

export const UserCard = () => {
  return (
    <div className="p-5 mx-1 border rounded text-center text-gray-500 max-w-sm lg:min-w-[300px]">
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
    </div>
  );
};
