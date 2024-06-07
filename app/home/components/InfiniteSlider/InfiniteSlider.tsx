import Image from "next/image";
import { FC } from "react";
import testImgURL from "@/public/images/test-img.jpg";

const SliderComp: FC = () => {
  return (
    <ul
      className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      aria-hidden="true"
    >
      <li>
        <Image width={100} height={100} src={testImgURL} alt="Facebook" />
      </li>
      <li>
        <Image width={100} height={100} src={testImgURL} alt="Disney" />
      </li>
      <li>
        <Image width={100} height={100} src={testImgURL} alt="Airbnb" />
      </li>
      <li>
        <Image width={100} height={100} src={testImgURL} alt="Apple" />
      </li>
      <li>
        <Image width={100} height={100} src={testImgURL} alt="Spark" />
      </li>
      <li>
        <Image width={100} height={100} src={testImgURL} alt="Samsung" />
      </li>
      <li>
        <Image width={100} height={100} src={testImgURL} alt="Quora" />
      </li>
      <li>
        <Image width={100} height={100} src={testImgURL} alt="Sass" />
      </li>
    </ul>
  );
};

export const InfiniteSlider: FC = () => {
  return (
    <div className="w-full inline-flex flex-nowrap">
      <SliderComp />
      <SliderComp />
    </div>
  );
};
