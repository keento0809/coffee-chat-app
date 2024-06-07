"use client";

import { PageTitle } from "@/app/components/common/title/PageTitle";
import { DUMMY_ARRAY } from "../InfiniteSlider/InfiniteSlider";
import { UserCard } from "@/app/components/common/card/UserCard/UserCard";

export const HomePage = () => {
  return (
    <div>
      <PageTitle title="Start Coffee Chat Now!" />
      <p className="mt-4 text-center text-md leading-8 text-gray-600">
        Select a person whom you want to coffee chat
      </p>
      <ul className="py-8 flex items-center gap-1 overflow-scroll">
        {DUMMY_ARRAY.map((num) => {
          return (
            <li key={num} className="">
              <UserCard
                linkURL={`/profile/${num}`}
                className="hover:border-slate-600 transition-all hover:scale-105 cursor-pointer"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};