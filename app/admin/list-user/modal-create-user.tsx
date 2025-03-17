import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect } from "react";

interface User {
  _id: string;
  email: string;
  password: string;
}
export function DialogCreate({
  open,
  setOpen,
  dataDelete,
  fetchUser,
}: Readonly<{
  open: boolean;
  setOpen: (open: boolean) => void;
  dataDelete?: User;
  fetchUser: () => void;
}>) {
  const isOpen = open;
  console.log("<<<<check isOpen", isOpen);
  const setIsOpen = setOpen;
  const handleDelete = () => {
    const fetchDelete = async () => {
      const res = await fetch("http://localhost:3000/api/deleteuser", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: dataDelete?.email ?? "",
          password: dataDelete?.password ?? "",
        }),
      });
      console.log("1234545", res);
    };
    fetchDelete();
    setIsOpen(false);
    fetchUser();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {/* <Button variant="outline">Edit Profile</Button> */}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete User</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this user? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Email:
            </Label>
            <Input
              id="name"
              value={dataDelete?.email || ""}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Password:
            </Label>
            <Input
              id="username"
              value={dataDelete?.password || ""}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="bg-red-600 text-sm"
            onClick={() => handleDelete()}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
