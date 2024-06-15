import { FC } from "react";
import Image from "next/image";
import testImg from "@/public/images/avatar-test.jpg";
import { UserProfile } from "@/types";

type UserCardProps = {
  className?: string;
  linkURL: string;
  userProfile: UserProfile;
};

export const UserCard: FC<UserCardProps> = ({
  className,
  linkURL = "/",
  userProfile,
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
        <span className="font-semibold text-lg leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">
          {userProfile.username}
        </span>
        <p>{userProfile.occupation}</p>
      </div>

      <p className="mt-2 text-xs text-gray-900">hobby: {userProfile.hobby}</p>
      <p className="mt-0.5 text-xs text-gray-900">
        socialMedia: {userProfile.socialmedialinks}
      </p>
    </div>
  );
};
