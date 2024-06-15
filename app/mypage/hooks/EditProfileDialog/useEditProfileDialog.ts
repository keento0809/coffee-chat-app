"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { ensureIsArray } from "@/lib/utils";
import { updateProfile } from "../../lib/actions";
import { UserProfile } from "@/types";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/app/components/shadcn/toast/use-toast";

type UseEditProfileDialogProps = {
  userProfile: UserProfile;
};

const formSchema = z.object({
  id: z.string().uuid(),
  username: z
    .string()
    .min(3, { message: "username must be more than 3 characters" }),
  email: z.string().email({ message: "Email is Required" }),
  occupation: z
    .string()
    .min(3, { message: "username must be more than 3 characters" }),
  hobby: z.string().array(),
  socialmedialinks: z.string().array(),
});

export const useEditProfileDialog = ({
  userProfile,
}: UseEditProfileDialogProps) => {
  const [hobbies, setHobbies] = useState<string[]>(
    ensureIsArray(userProfile.hobby)
  );
  const [socialmedialinks, setSocialmedialinks] = useState<string[]>(
    ensureIsArray(userProfile.socialmedialinks)
  );
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: userProfile.username ?? "",
      email: userProfile.email ?? "",
      occupation: userProfile.occupation ?? "",
      hobby: userProfile.hobby ?? [],
      socialmedialinks: userProfile.socialmedialinks ?? [],
    },
  });

  const updateProfileWithUserId = updateProfile.bind(null, userProfile.id);

  const handleRemoveItemFromArray = ({
    index,
    array,
    dispatch,
  }: {
    index: number;
    array: string[];
    dispatch: Dispatch<SetStateAction<string[]>>;
  }) => {
    const updatedArray = array.filter((_, idx) => idx !== index);
    dispatch(updatedArray);
  };

  const clientAction = async (formData: FormData) => {
    const result = await updateProfileWithUserId(formData);

    if (result?.error) {
      alert(result.error);
    }

    // TODO: Add toast here
    toast({
      description: "Successfully updated!",
    });
  };

  return {
    form,
    hobbies,
    setHobbies,
    socialmedialinks,
    setSocialmedialinks,
    clientAction,
    handleRemoveItemFromArray,
  };
};
