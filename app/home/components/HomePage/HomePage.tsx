import { PageTitle } from "@/app/components/common/title/PageTitle";
import { LinkButton } from "@/app/components/common/button/LinkButton/LinkButton";
import { UsersList } from "@/app/home/components/UsersList/UsersList";
import { UserProfile } from "@/types";
import { FC } from "react";

type HomePageProps = {
  userProfiles: UserProfile[];
};

export const HomePage: FC<HomePageProps> = ({ userProfiles }) => {
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
        <UsersList userProfiles={userProfiles} />
      </div>
      <div className="py-10 text-center">
        <LinkButton text="Learn More" linkURL="/about" />
      </div>
    </div>
  );
};
