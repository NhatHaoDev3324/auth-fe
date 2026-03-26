# 🛡️ Advanced Authentication System (VNS Auth)

Hệ thống xác thực toàn diện, bảo mật và hiện đại được xây dựng bằng **Next.js 15+**, **React 19** và **Tailwind CSS 4**. Dự án này không chỉ là một hệ thống đăng nhập thông thường mà còn tích hợp các hiệu ứng thị giác cao cấp và kiến trúc mã nguồn tối ưu.

---

## ✨ Tính năng nổi bật

- 🔐 **Xác thực đa phương thức**: 
  - Đăng ký/Đăng nhập truyền thống qua Email & Password.
  - Đăng nhập nhanh với **Google OAuth 2.0**.
  - Quy trình xác thực mã **OTP** để kích hoạt tài khoản.
- 🛣️ **Dynamic Routing Architecture**: Sử dụng cấu trúc [app/(auth)/[route]/page.tsx](cci:7://file:///d:/myProject/Auth/auth/app/%28auth%29/%5Broute%5D/page.tsx:0:0-0:0) giúp quản lý tập trung tất cả các logic (Sign-in, Sign-up, v.v.) trong một file duy nhất, giảm thiểu lặp code và dễ dàng bảo trì.
- 🌓 **Chế độ giao diện (Theming)**: Hỗ trợ Full Dark/Light mode mượt mà với `next-themes` và icons từ `Lucide`.
- 🎨 **Visual Excellence**:
  - Background động **ColorBends** (Three.js/Warp effect) mang lại cảm giác premium.
  - Hệ thống thông báo **Sonner** trực quan.
  - Các micro-animations cho Button và Input.
- 📦 **State Management**: Sử dụng **Zustand** với một bộ Store chuẩn hóa, quản lý thông tin người dùng tập trung và dọn dẹp dữ liệu thông minh khi Logout.
- 🛡️ **Bảo mật & Tối ưu**:
  - **Axios Interceptors**: Tự động đính kèm Token và xử lý logout khi token hết hạn (401).
  - **Race Condition Protection**: Sử dụng `useRef` guards để ngăn chặn việc gọi API trùng lặp.
  - **Standalone Output**: Sẵn sàng cho việc triển khai Docker/Production.

---

## 🛠️ Công nghệ sử dụng (Tech Stack)

| Thành phần | Công nghệ |
| :--- | :--- |
| **Frontend Framework** | Next.js 15.2 (Turbopack) |
| **Library** | React 19 (với API [use](cci:2://file:///d:/myProject/Auth/goAuth/internal/modules/auth/service/user_service.go:28:0-30:1) mới nhất) |
| **Styling** | Tailwind CSS 4.0 |
| **State Management** | Zustand |
| **UI Components** | Shadcn UI & Radix UI |
| **API Client** | Axios (với Request/Response Interceptors) |
| **Graphics** | Three.js & Lucide Icons |

---

## 📁 Cấu trúc thư mục (Project Structure)

```text
auth/
├── @types/             # Định nghĩa Interface & Types (UserType, v.v.)
├── api/                # Cấu hình API endpoints (auth.ts)
├── app/
│   ├── (auth)/         # Group route dành cho xác thực
│   │   └── [route]/    # Dynamic routing cho Sign-in, Sign-up, Forgot-pass
│   │       ├── layout.tsx  # Layout chung với hiệu ứng ColorBends
│   │       └── page.tsx    # Logic xử lý render Form tương ứng
│   ├── layout.tsx      # Root layout (Providers, Fonts)
│   └── page.tsx        # Dashboard/Home page sau khi đăng nhập
├── components/         # Chứa Forms, UI atomics và hiệu ứng Customs
├── config/             # Hằng số cấu hình (Path constants)
├── lib/                # Utils & Axios Instance
├── store/              # Zustand Auth Store
└── public/             # Assets (Logos, Images)

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
