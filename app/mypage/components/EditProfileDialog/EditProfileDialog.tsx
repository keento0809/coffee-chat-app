import { BaseButton } from "@/app/components/common/button/BaseButton/BaseButton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/shadcn/dialog/dialog";
import { Input } from "@/app/components/shadcn/input/input";
import { Label } from "@/app/components/shadcn/label/label";
import { UserProfile } from "@/types";
import { Dispatch, SetStateAction, useState } from "react";
import { ensureIsArray } from "@/lib/utils";
import { updateProfile } from "../../lib/actions";

type EditProfileDialogProps = {
  userProfile: UserProfile;
};

export const EditProfileDialog = ({ userProfile }: EditProfileDialogProps) => {
  const [hobbies, setHobbies] = useState<string[]>(
    ensureIsArray(userProfile.hobby)
  );
  const [socialmedialinks, setSocialmedialinks] = useState<string[]>(
    ensureIsArray(userProfile.socialmedialinks)
  );
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

  return (
    <Dialog>
      <DialogTrigger asChild>
        <BaseButton>Edit Profile</BaseButton>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={updateProfile}>
          <DialogHeader>
            <DialogTitle className="text-center">Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&rsquo;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-center">
                Name
              </Label>
              <Input
                id="name"
                defaultValue={userProfile.username ? userProfile.username : ""}
                className="col-span-3 border border-slate-600"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-center">
                Email
              </Label>
              <Input
                id="username"
                defaultValue={userProfile.email ? userProfile.email : ""}
                className="col-span-3 pointer-events-none cursor-not-allowed opacity-20"
                readOnly
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-center">
                Occupation
              </Label>
              <Input
                id="username"
                defaultValue={
                  userProfile.occupation ? userProfile.occupation : ""
                }
                className="col-span-3 border border-slate-600"
              />
            </div>
            <div className="grid grid-cols-4 items-baseline gap-4">
              <Label htmlFor="username" className="text-center">
                Hobby
              </Label>
              <div className="flex flex-col gap-2 col-span-3">
                <div className="flex flex-col gap-1">
                  {hobbies?.map((hobby, idx) => {
                    return (
                      <div
                        key={hobby + idx}
                        className="flex items-center gap-1"
                      >
                        <Input
                          defaultValue={hobby}
                          className="w-full col-span-3 border border-slate-600"
                        />
                        <BaseButton
                          className="w-1/4"
                          onClick={() =>
                            handleRemoveItemFromArray({
                              index: idx,
                              array: hobbies,
                              dispatch: setHobbies,
                            })
                          }
                        >
                          Delete
                        </BaseButton>
                      </div>
                    );
                  })}
                </div>
                <BaseButton
                  className="inline-block self-end w-1/4 px-0"
                  onClick={() => setHobbies([...hobbies, ""])}
                >
                  Add
                </BaseButton>
              </div>
            </div>
            <div className="grid grid-cols-4 items-baseline gap-4">
              <Label htmlFor="username" className="text-right">
                SocialMedia
              </Label>
              <div className="flex flex-col gap-2 col-span-3">
                <div className="flex flex-col gap-1">
                  {socialmedialinks?.map((socialM, idx) => {
                    return (
                      <div
                        key={socialM + idx}
                        className="flex items-center gap-1"
                      >
                        <Input
                          defaultValue={socialM}
                          className="w-full col-span-3 border border-slate-600"
                        />
                        <BaseButton
                          className="w-1/4"
                          onClick={() =>
                            handleRemoveItemFromArray({
                              index: idx,
                              array: socialmedialinks,
                              dispatch: setSocialmedialinks,
                            })
                          }
                        >
                          Delete
                        </BaseButton>
                      </div>
                    );
                  })}
                </div>
                <BaseButton
                  className="inline-block self-end w-1/4 px-0"
                  onClick={() => setSocialmedialinks([...socialmedialinks, ""])}
                >
                  Add
                </BaseButton>
              </div>
            </div>
          </div>
          <DialogFooter className="sm:justify-center pt-4">
            <BaseButton type="submit">Save changes</BaseButton>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
