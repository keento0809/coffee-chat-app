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

export const EditProfileDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <BaseButton>Edit Profile</BaseButton>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&rsquo;re
            done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <BaseButton type="submit">Save changes</BaseButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
