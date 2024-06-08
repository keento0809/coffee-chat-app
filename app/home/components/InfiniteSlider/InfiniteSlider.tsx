import Image from "next/image";
import { FC } from "react";
import testImgURL from "@/public/images/test-img.jpg";
import { UserCard } from "@/app/components/common/card/UserCard/UserCard";

export const DUMMY_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8];

type SliderCompProps = {
  array: number[];
};

const SliderComp: FC<SliderCompProps> = ({ array }) => {
  return (
    <ul
      className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll"
      aria-hidden="true"
    >
      {array.map((num) => {
        return (
          <li
            key={num}
            className="p-5 block border rounded text-center text-gray-500 lg:min-w-[300px]"
          >
            <UserCard className="cursor-not-allowed" />
          </li>
        );
      })}
    </ul>
  );
};

export const InfiniteSlider: FC = () => {
  return (
    <div className="w-full inline-flex flex-nowrap">
      <SliderComp array={DUMMY_ARRAY} />
      <SliderComp array={DUMMY_ARRAY} />
    </div>
  );
};
