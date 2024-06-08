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

type EditProfileDialogProps = {
  userProfile: UserProfile;
};

export const EditProfileDialog = ({ userProfile }: EditProfileDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <BaseButton>Edit Profile</BaseButton>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
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
              className="col-span-3 cursor-not-allowed opacity-20"
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
              className="col-span-3 cursor-not-allowed border border-slate-600"
              readOnly
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-center">
              Hobby
            </Label>
            <Input
              id="username"
              defaultValue={userProfile.hobby ? userProfile.hobby : ""}
              className="col-span-3 cursor-not-allowed border border-slate-600"
              readOnly
            />
          </div>
          {/* TODO: fix this section later */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              SocialMedia
            </Label>
            <Input
              id="username"
              defaultValue={
                userProfile.socialmedialinks
                  ? userProfile.socialmedialinks[0]
                  : ""
              }
              className="col-span-3 cursor-not-allowed border border-slate-600"
              readOnly
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-center">
          <BaseButton type="submit">Save changes</BaseButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
