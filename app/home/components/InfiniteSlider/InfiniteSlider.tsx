import Image from "next/image";
import { FC } from "react";
import testImgURL from "@/public/images/test-img.jpg";
import { UserCard } from "@/app/components/common/card/UserCard/UserCard";

const DUMMY_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8];

type SliderCompProps = {
  array: number[];
};

const SliderComp: FC<SliderCompProps> = ({ array }) => {
  return (
    <ul
      className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      aria-hidden="true"
    >
      {array.map((num) => {
        return <UserCard key={num} />;
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
