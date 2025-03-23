/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["picsum.photos", "images.ctfassets.net", "ahphong.vercel.app"], // Thêm domain ảnh
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" }, // Cho phép tất cả domain gọi API
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PATCH, DELETE",
          }, // Cho phép các phương thức
          { key: "Access-Control-Allow-Headers", value: "Content-Type" }, // Cho phép gửi dữ liệu JSON
        ],
      },
    ];
  },
};

export default nextConfig;
