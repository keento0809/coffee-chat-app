"use client";

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
import { UserProfile } from "@/types";
import { useEditProfileDialog } from "../../hooks/EditProfileDialog/useEditProfileDialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/app/components/shadcn/form/form";

type EditProfileDialogProps = {
  userProfile: UserProfile;
};

export const EditProfileDialog = ({ userProfile }: EditProfileDialogProps) => {
  const {
    form,
    hobbies,
    setHobbies,
    socialmedialinks,
    setSocialmedialinks,
    updateProfileWithUserId,
    handleRemoveItemFromArray,
  } = useEditProfileDialog({ userProfile });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <BaseButton>Edit Profile</BaseButton>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form action={updateProfileWithUserId}>
            <DialogHeader>
              <DialogTitle className="text-center">Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click &quot;save
                changes&quot; when you&rsquo;re done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <FormLabel htmlFor="username" className="text-center">
                        Username
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="username"
                          {...field}
                          defaultValue={
                            userProfile.username ? userProfile.username : ""
                          }
                          className="col-span-3 border border-slate-600"
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <div className="grid grid-cols-4 items-center gap-4">
                    <FormLabel htmlFor="username" className="text-center">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        {...field}
                        defaultValue={
                          userProfile.email ? userProfile.email : ""
                        }
                        className="col-span-3 pointer-events-none cursor-not-allowed opacity-20"
                        readOnly
                      />
                    </FormControl>
                  </div>
                )}
              />
              <FormField
                control={form.control}
                name="occupation"
                render={({ field }) => (
                  <div className="grid grid-cols-4 items-center gap-4">
                    <FormLabel htmlFor="occupation" className="text-center">
                      Occupation
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="occupation"
                        {...field}
                        defaultValue={
                          userProfile.occupation ? userProfile.occupation : ""
                        }
                        className="col-span-3 border border-slate-600"
                      />
                    </FormControl>
                  </div>
                )}
              />
              <FormField
                control={form.control}
                name="hobby"
                render={({ field }) => (
                  <div className="grid grid-cols-4 items-baseline gap-4">
                    <FormLabel htmlFor="username" className="text-center">
                      Hobby
                    </FormLabel>
                    <FormControl>
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
                                  {...field}
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
                    </FormControl>
                  </div>
                )}
              />
              <FormField
                control={form.control}
                name="socialmedialinks"
                render={({ field }) => (
                  <div className="grid grid-cols-4 items-baseline gap-4">
                    <FormLabel
                      htmlFor="socialmedialinks"
                      className="text-center"
                    >
                      SocialMediaLinks
                    </FormLabel>
                    <FormControl>
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
                                  {...field}
                                  className="w-full col-span-3 border border-slate-600"
                                />
                                <BaseButton
                                  className="w-1/4"
                                  onClick={() =>
                                    handleRemoveItemFromArray({
                                      index: idx,
                                      array: hobbies,
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
                          onClick={() => setHobbies([...hobbies, ""])}
                        >
                          Add
                        </BaseButton>
                      </div>
                    </FormControl>
                  </div>
                )}
              />
            </div>
            <DialogFooter className="sm:justify-center pt-4">
              <BaseButton type="submit">Save changes</BaseButton>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
