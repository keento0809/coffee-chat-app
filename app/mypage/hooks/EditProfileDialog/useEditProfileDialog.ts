"use client";

import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { ensureIsArray } from "@/lib/utils";
import { updateProfile } from "../../lib/actions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { UserProfile } from "@/types";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type UseEditProfileDialogProps = {
  userProfile: UserProfile;
};

const formSchema = z.object({
  id: z.string().uuid(),
  username: z.string(),
  email: z.string().email({ message: "Email is Required" }),
  occupation: z.string(),
  hobby: z.string().array(),
  socialmedialinks: z.string().array(),
});

export const useEditProfileDialog = ({
  userProfile,
}: UseEditProfileDialogProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [hobbies, setHobbies] = useState<string[]>(
    ensureIsArray(userProfile.hobby)
  );
  const [socialmedialinks, setSocialmedialinks] = useState<string[]>(
    ensureIsArray(userProfile.socialmedialinks)
  );

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

  const updateProfileWithUserId = updateProfile.bind("id", userProfile.id);

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

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleAddQuery = () => {
    router.push(pathname + "?" + createQueryString("user", userProfile.id));
  };
  return {
    form,
    hobbies,
    setHobbies,
    socialmedialinks,
    setSocialmedialinks,
    updateProfileWithUserId,
    searchParams,
    handleRemoveItemFromArray,
    handleAddQuery,
  };
};
