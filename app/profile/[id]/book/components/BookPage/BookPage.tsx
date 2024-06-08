import { BackButton } from "@/app/components/common/button/BackButton/BackButton";
import { BookCoffeeChatForm } from "@/app/profile/[id]/book/components/BookCoffeeChatForm/BookCoffeeChatForm";
import { PageTitle } from "@/app/components/common/title/PageTitle";
import { Form } from "@/app/components/shadcn/form/form";

export const BookPage = () => {
  return (
    <div className="text-center">
      <BackButton />
      {/* TODO: Add user name in the title later */}
      <PageTitle title="Book Coffee Chat" />
      <div className="py-10">
        <BookCoffeeChatForm />
      </div>
    </div>
  );
};
