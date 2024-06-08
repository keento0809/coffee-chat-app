import { authenticate } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";

export const useServerActionLoginForm = () => {
  const { pending } = useFormStatus();
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const form = useForm();

  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (pending) {
      event.preventDefault();
    }
  };

  return {
    router,
    form,
    dispatch,
    errorMessage,
    pending,
    handleClick,
  };
};
