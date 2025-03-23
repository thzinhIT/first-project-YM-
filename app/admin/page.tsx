"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Admin() {
  const router = useRouter();

  useEffect(() => {
    const checkRole = () => {
      const role = localStorage.getItem("role");
      if (role !== "admin") {
        toast.error("role  của bạn ko phải admin");
        router.push("/login"); // Chuyển hướng nếu không phải admin
      }
    };
    checkRole();
  }, []);

  return (
    <>
      <div>Vinh đây - Trang Admin</div>
      <div></div>
    </>
  );
}
