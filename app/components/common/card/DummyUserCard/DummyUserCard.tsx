import Image from "next/image";
import testImg from "@/public/images/avatar-test.jpg";
import { FC } from "react";

type DummyUserCardProps = {
  className?: string;
  linkURL?: string;
};

export const DummyUserCard: FC<DummyUserCardProps> = ({
  className,
  linkURL = "#",
}) => {
  return (
    <div>
      <Image
        className="w-32 h-32 rounded-full mx-auto"
        width={138}
        height={128}
        src={testImg}
        alt="avatarImg"
      />
      <div className="text-sm mt-5">
        <span className="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">
          Jane Doe
        </span>
        <p>Blogger &amp; Youtuber</p>
      </div>

      <p className="mt-2 text-sm text-gray-900">
        Lorem ipsum dolor sit amet, consecte adipisicing elit. Voluptatibus quia
        Maiores et perferendis eaque.
      </p>
    </div>
  );
};
