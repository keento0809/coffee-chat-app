"use client";

import { InfiniteSlider } from "@/app/home/components/InfiniteSlider/InfiniteSlider";
import { FC } from "react";
import { LinkButton } from "./components/common/button/LinkButton/LinkButton";

export const HeroPage: FC = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Data to enrich your online business
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
        <div className="mt-10 max-w-4xl overflow-x-hidden">
          <InfiniteSlider />
        </div>
        <div className="mt-14 flex items-center justify-center gap-x-6">
          <LinkButton text="Get Started" linkURL="/home" />
        </div>
      </div>
    </div>
  );
};
