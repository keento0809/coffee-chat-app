"use client";

import { PageTitle } from "@/app/components/common/title/PageTitle";
import { DUMMY_ARRAY } from "../InfiniteSlider/InfiniteSlider";
import { UserCard } from "@/app/components/common/card/UserCard/UserCard";
import { LinkButton } from "@/app/components/common/button/LinkButton/LinkButton";
import Link from "next/link";

export const HomePage = () => {
  return (
    <div>
      <PageTitle title="Start Coffee Chat Now!" />
      <p className="mt-4 text-center text-md leading-6 text-gray-600">
        Select a person whom you want to have a coffee chat
      </p>
      <p className="text-center text-md leading-6 text-gray-600">
        Scroll user cards to see all users
      </p>
      <div className="overflow-x-scroll no-scrollbar">
        <ul className="my-10 flex items-center gap-1">
          {DUMMY_ARRAY.map((num) => {
            return (
              <li
                key={num}
                className="p-5 block mx-1 border rounded text-center text-gray-500 max-w-sm lg:min-w-[300px] hover:border-slate-600 transition-all hover:scale-105 cursor-pointer"
              >
                <Link href={`/profile/${num}`}>
                  <UserCard linkURL={`/profile/${num}`} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="py-10 text-center">
        <LinkButton text="Learn More" linkURL="/about" />
      </div>
    </div>
  );
};
