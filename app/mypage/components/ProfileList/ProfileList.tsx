import { UserProfile } from "@/types";
import { FC } from "react";

type ProfileListProps = {
  userProfile: UserProfile;
};

export const ProfileList: FC<ProfileListProps> = ({ userProfile }) => {
  const userProfileArray = Object.entries(userProfile).slice(1);
  return (
    <ul className="list-none py-10 w-full md:max-w-[450px] md:mx-auto">
      {userProfileArray.map(([key, value], idx) => {
        if (Array.isArray(value)) {
          const joinedValue = value.join(",");
          const displayValue =
            joinedValue.lastIndexOf(",") === joinedValue.length - 1
              ? joinedValue.substring(0, joinedValue.length - 1)
              : joinedValue;

          return (
            <li
              className="py-2 border-b border-slate-400 flex items-center gap-2"
              key={displayValue}
            >
              <span className="min-w-[150px] block text-wrap px-1.5 text-left">
                {key}:{" "}
              </span>
              <span>{displayValue}</span>
            </li>
          );
        } else if (typeof value === "string") {
          return (
            <li
              className="py-2 border-b border-slate-400 flex items-center gap-2"
              key={idx}
            >
              <span className="min-w-[150px] block px-1.5 text-left">
                {key}:{" "}
              </span>
              <span>{value}</span>
            </li>
          );
        } else
          return (
            <li
              key={idx}
              className="py-2 border-b border-slate-400 flex items-center gap-2"
            >
              <span className="min-w-[150px] block px-1.5 text-left">
                {key}:{" "}
              </span>
            </li>
          );
      })}
    </ul>
  );
};
