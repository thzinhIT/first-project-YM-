import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

export default function LoginModal() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Hàm kiểm tra đăng nhập
    const checkLogin = () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsOpen(true);
      }
    };

    checkLogin(); // Kiểm tra ngay khi mở trang

    const interval = setInterval(() => {
      checkLogin();
    }, 10000); // Kiểm tra mỗi 10 giây

    return () => clearInterval(interval); // Cleanup khi unmount
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Bạn chưa đăng nhập</DialogTitle>
          <DialogDescription>Vui lòng đăng nhập để tiếp tục</DialogDescription>
        </DialogHeader>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
          onClick={() => router.push("/login")}
        >
          Đăng nhập
        </button>
      </DialogContent>
    </Dialog>
  );
}
