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
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import { Divide } from "lucide-react";
import { toast } from "react-toastify";

interface Blog {
  title: string;
  review: string;
  content: string;
  author: string;
  createdAt: string;
  image: string;
  tag: string[];
}
export function DialogCreateBlog({
  open,
  setOpen,
}: // dataDelete,

Readonly<{
  open: boolean;
  setOpen: (open: boolean) => void;
  // dataDelete?: User;
  //   fetchUser: () => void;
}>) {
  const isOpen = open;
  console.log("<<<<check isOpen", isOpen);
  const setIsOpen = setOpen;

  const validate = z.object({
    title: z.string().min(5, "Tiêu đề phải có ít nhất 5 ký tự"),
    review: z.string().min(10, "Tóm tắt phải có ít nhất 10 ký tự"),
    content: z.string().min(20, "Nội dung bài viết quá ngắn"),
    author: z.string().min(3, "Tên tác giả phải có ít nhất 3 ký tự"),
    createdAt: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/, "Ngày tạo không hợp lệ"),
    image: z.string().url("Link ảnh không hợp lệ"),
    tag: z.array(z.string()).min(1, "Ít nhất một thẻ tag"),
  });
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Blog>({ resolver: zodResolver(validate) });
  const onSubmit: SubmitHandler<Blog> = (data) => {
    // data.tag is already an array, no need to split
    console.log("<<<<<<alo alo", data);
    const fetchCreateBlog = async () => {
      const res = await fetch("http://localhost:3000/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: data.title,
          review: data.review,
          content: data.content,
          author: data.author,
          image: data.image,
          tag: data.tag,
        }),
      });
      const req = await res.json();
      if (res.ok) {
        toast.success(req.message);
        setIsOpen(false);
      } else {
        toast.error(req.error);
      }
    };

    fetchCreateBlog();
  };

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const tagOptions = [
    "Teachnology",
    "Life",
    "CMS",
    "Styling",
    "Algorithm",
    "English",
  ]; // Define your tag options here

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      setSelectedImage(URL.createObjectURL(file)); // Hiển thị ảnh xem trước
      setValue("image", URL.createObjectURL(file)); // Lưu file vào form
    }
  };
  const selectedTags = watch("tag", []); // Theo dõi các tag được chọn

  const handleCheckboxChange = (tag: string, checked: boolean) => {
    setValue(
      "tag",
      checked ? [...selectedTags, tag] : selectedTags.filter((t) => t !== tag)
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[700px] overflow-auto max-h-screen">
        <DialogHeader>
          <DialogTitle>Create Blog</DialogTitle>
          <DialogDescription>
            Please enter the details below to create a new blog post!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title:
            </Label>
            <Input id="title" className="col-span-3" {...register("title")} />
            {errors.title && (
              <p className="text-red-500 w-full col-span-4 text-center">
                {errors.title.message}
              </p>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="review" className="text-right">
              Review:
            </Label>
            <Input id="review" className="col-span-3" {...register("review")} />
            {errors.review && (
              <p className="text-red-500 w-full col-span-4 text-center">
                {errors.review.message}
              </p>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="content" className="text-right">
              Content:
            </Label>
            <Textarea
              id="content"
              className="col-span-3"
              {...register("content")}
            />
            {errors.content && (
              <p className="text-red-500 w-full col-span-4 text-center">
                {errors.content.message}
              </p>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="author" className="text-right">
              Author:
            </Label>
            <Input id="author" className="col-span-3" {...register("author")} />
            {errors.author && (
              <p className="text-red-500 w-full col-span-4 text-center">
                {errors.author.message}
              </p>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="image" className="text-right">
              Image:
            </Label>
            <Input
              id="image"
              type="file"
              className="col-span-3"
              accept="image/*"
              onChange={handleFileChange}
            />
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Preview"
                className="col-span-4 w-[150px] h-[150px] object-cover mt-2 mx-auto"
              />
            )}
            {errors.image && (
              <p className="text-red-500 w-full col-span-4 text-center">
                {errors.image.message}
              </p>
            )}
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label htmlFor="tag" className="text-right">
              Tag:
            </Label>
            <div className="col-span-3 space-y-1">
              {tagOptions.map((tag) => (
                <label key={tag} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={tag}
                    onChange={(e) =>
                      handleCheckboxChange(tag, e.target.checked)
                    }
                    checked={selectedTags.includes(tag)}
                  />
                  {tag}
                </label>
              ))}
              {errors.tag && (
                <p className="text-red-500 text-sm">{errors.tag.message}</p>
              )}
            </div>
          </div>

          {/* Hiển thị các tag đã chọn */}
          {selectedTags.length > 0 && (
            <div className="grid grid-cols-4 items-start gap-4">
              <Label className="text-right">Selected Tags:</Label>
              <div className="col-span-3 flex flex-wrap gap-2">
                {selectedTags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleCheckboxChange(tag, false)}
                      className="text-white hover:text-gray-200"
                    >
                      ❌
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button
            type="submit"
            className="bg-green-500 text-sm"
            onClick={handleSubmit(onSubmit)}
          >
            Create Blog
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
