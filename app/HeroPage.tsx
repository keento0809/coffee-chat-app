"use client";

import { InfiniteSlider } from "@/app/home/components/InfiniteSlider/InfiniteSlider";
import Link from "next/link";
import { FC } from "react";
import { Button } from "./components/shadcn/button/button";

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
          <Button asChild>
            <Link
              href="/home"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
