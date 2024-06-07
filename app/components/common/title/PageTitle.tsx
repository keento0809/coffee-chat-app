import { FC } from "react";

type PageTitleProps = {
  title: string;
};

export const PageTitle: FC<PageTitleProps> = ({ title }) => {
  return (
    <h2 className="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
      {title}
    </h2>
  );
};
