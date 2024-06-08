"use client";

import { InfiniteSlider } from "@/app/home/components/InfiniteSlider/InfiniteSlider";
import { FC } from "react";
import { LinkButton } from "./components/common/button/LinkButton/LinkButton";

export const HeroPage: FC = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Expand Your NetWork
        </h1>
        <p className="mt-6 text-lg leading-6 text-gray-600">
          This application enables you to connect people online through coffee
          chat.
        </p>
        <p className="text-lg leading-6 text-gray-600">
          Let&#39;s escape from your comfort zone and broaden your network!
        </p>
        <div className="mt-10 max-w-4xl overflow-x-hidden">
          <InfiniteSlider />
        </div>
        <div className="mt-14 flex items-center justify-center gap-x-6">
          <LinkButton text="Get Started" linkURL="/login" />
        </div>
      </div>
    </div>
  );
};
