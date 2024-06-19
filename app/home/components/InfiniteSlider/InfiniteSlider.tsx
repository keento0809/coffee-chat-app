import { FC } from "react";
import { DummyUserCard } from "@/app/components/common/card/DummyUserCard/DummyUserCard";

export const DUMMY_ARRAY = Array.from({ length: 10 }, (_, i) => i + 1);

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
            <DummyUserCard className="cursor-not-allowed" />
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
