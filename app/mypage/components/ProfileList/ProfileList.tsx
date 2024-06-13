import { UserProfile } from "@/types";
import { FC } from "react";

type ProfileListProps = {
  useProfile: UserProfile;
};

type ProfileItemObj = {
  [x: string]: string | string[] | null;
};

export const ProfileList: FC<ProfileListProps> = ({ useProfile }) => {
  const userProfileArray = Object.entries(useProfile).slice(1);
  return (
    <ul className="list-none py-10 w-full md:max-w-[450px]">
      {userProfileArray.map(([key, value], idx) =>
        typeof value === "string" ? (
          <li
            className="py-2 border-b border-slate-400 flex items-center gap-2"
            key={idx}
          >
            <span className="min-w-[150px] block px-1.5 text-left">
              {key}:{" "}
            </span>
            <span>{value}</span>
          </li>
        ) : null
      )}
    </ul>
  );
};
