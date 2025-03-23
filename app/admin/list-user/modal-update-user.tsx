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
import { toast } from "react-toastify";

interface User {
  _id: string;
  email: string;
  password: string;
}
export function DialogUpdate({
  open,
  setOpen,
  dataDelete,
}: // fetchUser,
Readonly<{
  open: boolean;
  setOpen: (open: boolean) => void;
  dataDelete?: User;
  // fetchUser: () => void;
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
      const req = await res.json();
      if (res.ok) {
        setIsOpen(false);
        toast.success(req.message);
        // fetchUser();
      } else {
        toast.error(req.message);
      }
    };
    fetchDelete();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {/* <Button variant="outline">Edit Profile</Button> */}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update User</DialogTitle>
          <DialogDescription>
            Are you sure you want to update this user? The changes will
            overwrite the current user details.
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
            className="bg-blue-600 text-sm"
            onClick={() => handleDelete()}
          >
            Update
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
