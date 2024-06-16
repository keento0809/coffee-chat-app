import { FC } from "react";
import Link from "next/link";
import { UserProfile } from "@/types";
import { UserCard } from "@/app/components/common/card/UserCard/UserCard";

type UsersListProps = {
  userProfiles: UserProfile[];
};

export const UsersList: FC<UsersListProps> = ({ userProfiles }) => {
  return (
    <ul className="my-10 flex items-center gap-1">
      {userProfiles?.map((profile) => {
        return (
          <li
            key={profile.id}
            className="p-5 block mx-1 border rounded text-center text-gray-500 max-w-sm lg:min-w-[300px] hover:border-slate-600 transition-all hover:scale-105 cursor-pointer"
          >
            <Link href={`/profile/${profile.id}`}>
              <UserCard userProfile={profile} linkURL={`/profile/${profile}`} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
