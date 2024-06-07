"use client";

import { BackButton } from "@/app/components/common/button/BackButton/BackButton";
import { PageTitle } from "@/app/components/common/title/PageTitle";

export const AboutPage = () => {
  return (
    <div className="text-center">
      <BackButton />
      <PageTitle title="About Coffee Chat App" />
      <div className="py-10 text-left">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          voluptas minus alias quisquam molestias repellat. Deleniti, est velit,
          animi vel ut itaque provident aliquid possimus, adipisci ratione
          tempore eius dicta vitae soluta cum quia suscipit nemo minima
          laboriosam consequuntur quis a. Suscipit ex enim alias sequi tempora
          porro maxime aliquid.
        </p>
      </div>
    </div>
  );
};
