# 🛡️ Advanced Authentication System (VNS Auth)

Hệ thống xác thực toàn diện, bảo mật và hiện đại được xây dựng bằng **Next.js 15+**, **React 19** và **Tailwind CSS 4**. Dự án này cung cấp một quy trình xác thực người dùng hoàn chỉnh từ Đăng ký, OTP, Đăng nhập đến Quên mật khẩu với trải nghiệm người dùng cao cấp.

---

## ✨ Tính năng nổi bật

- 🔐 **Xác thực đa phương thức**: 
  - **Đăng ký/Đăng nhập truyền thống**: Qua Email & Password với validate chặt chẽ.
  - **Google OAuth 2.0**: Đăng nhập nhanh chóng, tự động đồng bộ tài khoản.
  - **Xác thực OTP**: Dialog xác thực mã OTP chuyên nghiệp (3-3 grouping) ngay sau khi đăng ký, có bộ đếm ngược gửi lại mã.
- 🛣️ **Dynamic Routing Architecture**: Sử dụng [app/(auth)/[route]/page.tsx](file:///d:/myProject/Auth/auth/app/%28auth%29/%5Broute%5D/page.tsx) quản lý tập trung toàn bộ logic chuyển đổi giữa các Form (Sign-in, Sign-up, Forgot-pass, Reset-pass).
- 🌓 **Chế độ giao diện (Theming)**: 
  - Hỗ trợ Full Dark/Light mode với `next-themes`.
  - Component `LogoTheme` tự động chuyển đổi logo SVG theo theme hệ thống.
  - Nút chuyển theme tích hợp linh hoạt trong Auth Layout.
- 🎨 **Visual Excellence**:
  - Background động **ColorBends** mang lại cảm giác premium.
  - Hệ thống thông báo **Sonner** trực quan, mượt mà.
  - **Input OTP**: Trải nghiệm nhập liệu mã xác nhận hiện đại với hiệu ứng focus và caret tùy chỉnh.
- 📦 **State Management**: Sử dụng **Zustand** quản lý `accessToken` và thông tin người dùng (`userName`, `avatar`).
- 🛡️ **Bảo mật & Tối ưu**:
  - **Axios Interceptors**: Tự động đính kèm `accessToken` vào header và xử lý logout khi token hết hạn (401).
  - **Race Condition Protection**: Ngăn chặn gọi API trùng lặp trong quá trình xác thực Google.

---

## 🛠️ Công nghệ sử dụng (Tech Stack)

| Thành phần | Công nghệ |
| :--- | :--- |
| **Frontend Framework** | Next.js 15.2 (Turbopack) |
| **Library** | React 19 |
| **Styling** | Tailwind CSS 4.0 |
| **State Management** | Zustand |
| **UI Components** | Shadcn UI, Radix UI, Lucide Icons |
| **OTP Input** | `input-otp` (for professional OTP UX) |
| **Notifications** | Sonner |
| **API Client** | Axios |

---

## 📁 Cấu trúc thư mục (Project Structure)

```text
auth/
├── api/                # Cấu hình API endpoints (register, login, verify-otp, Google auth)
├── app/
│   ├── (auth)/         # Group route dành cho xác thực (Sign-in, Sign-up, OTP Dialog)
│   │   └── [route]/    # Dynamic routing linh hoạt
│   ├── layout.tsx      # Root layout (Providers, Fonts)
│   └── page.tsx        # Dashboard page (Yêu cầu accessToken để truy cập)
├── components/
│   ├── customs/        # Components đặc thù: LogoTheme, DialogVerifyOTP, ColorBends
│   ├── forms/          # Logic xử lý Form: FormSignIn, FormSignUp, FormResetPassword
│   └── ui/             # Các nguyên tử UI: Button, Input, Dialog, InputOTP
├── config/             # Hằng số cấu hình (PATH constants)
├── lib/                # Utils (cn helper) & Axios Instance
├── store/              # Zustand Auth Store (quản lý accessToken)
└── public/             # Assets (logo-dark.svg, logo-light.svg)
```

---

## 📝 Luồng xác thực (Flow)

1. **Đăng ký**: Nhập thông tin -> Gọi API Register -> Nhận thông báo thành công.
2. **Xác thực OTP**: Dialog tự động mở -> Check Email lấy mã -> Nhập 6 chữ số -> Xác thực thành công -> Chuyển hướng Sign-in.
3. **Đăng nhập**: 
   - **Email**: Nhập tài khoản -> Lưu `accessToken` vào LocalStorage -> Chuyển vào Dashboard.
   - **Google**: Click login Google -> Backend callback -> Nhận token -> Vào hệ thống.
4. **Dashboard**: Tự động gọi API `/me` để lấy thông tin người dùng mới nhất dựa trên `accessToken`.

---

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

3. **Cấu hình biến môi trường** (`.env`):
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:8080
   NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
   ```

4. **Chạy môi trường phát triển**:
   ```bash
   npm run dev
   ```

---
Phát triển bởi **NhatHaoDev3324**
