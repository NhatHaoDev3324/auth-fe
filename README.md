# Authentication System (auth-fe)

Hệ thống xác thực mạnh mẽ và hiện đại được xây dựng bằng Next.js 16, React 19 và Tailwind CSS 4. Dự án này cung cấp một quy trình đăng ký, đăng nhập và xác thực qua Google chuẩn mực, bảo mật.

## 🚀 Công nghệ sử dụng

- **Framework**: [Next.js 16 (Turbopack)](https://nextjs.org/)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) & [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **API Client**: [Axios](https://axios-http.com/)
- **Notifications**: [Sonner](https://sonner.stevenly.me/)
- **Effects**: [Three.js](https://threejs.org/) (ColorBends Background)

## ✨ Tính năng chính

- [x] **Đăng nhập/Đăng ký**: Theo luồng email và mật khẩu truyền thống.
- [x] **Google OAuth 2.0**: Tích hợp đăng nhập bằng Google với callback chuyên biệt (`/verify`).
- [x] **Quên & Đặt lại mật khẩu**: Quy trình khôi phục tài khoản qua email.
- [x] **Bảo mật**: Cơ chế chống gọi API trùng lặp (Strict Mode Proof) bằng `useRef` và guards.
- [x] **Giao diện hiện đại**: Sử dụng Dark/Light mode linh hoạt với `next-themes`.
- [x] **Hiệu ứng mượt mà**: Hình nền động sử dụng `Three.js` và các micro-animations.

## 📁 Cấu trúc thư mục

```text
├── @types/          # Định nghĩa kiểu dữ liệu (TypeScript)
├── api/             # Các hàm gọi API (Axios configuration)
├── app/             # Next.js App Router
│   ├── (auth)/      # Route group chứa logic xác thực (Login, Signup, Verify)
│   ├── layout.tsx   # Layout gốc
│   └── page.tsx     # Trang chủ (Dashboard demo)
├── components/      # Hệ thống Component
│   ├── customs/     # Các component hiệu ứng đặc biệt (ColorBends)
│   ├── forms/       # Các Form logic (SignIn, SignUp, ForgotPassword...)
│   └── ui/          # Các component nguyên tử từ Shadcn UI
├── config/          # Cấu hình hằng số, đường dẫn (Path constants)
├── lib/             # Các utility functions, axios instance
├── provider/        # Context Providers (Theme, Mount)
└── store/           # Zustand stores quản lý Global State
```

## 🛠️ Hướng dẫn cài đặt

1. **Clone dự án**:
   ```bash
   git clone https://github.com/NhatHaoDev3324/auth-fe.git
   cd auth-fe
   ```

2. **Cài đặt dependencies**:
   ```bash
   npm install
   ```

3. **Cấu hình biến môi trường**:
   Tạo file `.env` ở thư mục gốc và nhập các thông tin sau:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:8080
   NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
   NEXT_PUBLIC_GOOGLE_REDIRECT_URI=http://localhost:3000/verify
   ```

4. **Chạy môi trường phát triển**:
   ```bash
   npm run dev
   ```

5. **Build cho production**:
   ```bash
   npm run build
   ```

## 🔑 Cấu hình Google Console

Để tính năng đăng nhập Google hoạt động, bạn cần cấu hình ứng dụng trong [Google Cloud Console](https://console.cloud.google.com/):
- **Authorized Javascript Origins**: `http://localhost:3000`
- **Authorized redirect URIs**: `http://localhost:3000/verify`

## 📝 Ghi chú phát triển

- Dự án sử dụng **Next.js 16 Canary/Turbopack**, đảm bảo tốc độ hot-reload cực nhanh.
- Luồng Google Auth được tách riêng vào route `/verify` để đảm bảo tính ổn định và tuân thủ quy trình trao đổi code-token an toàn.
- Cache `.next` có thể được xóa nếu gặp lỗi build liên quan đến type generation của Turbopack.

---
Phát triển bởi **NhatHaoDev3324**
