# Hướng Dẫn Đóng Góp (Contributing Guidelines)

Cảm ơn bạn đã quan tâm và muốn đóng góp cho dự án **Tuấn Tú Wedding**! Dưới đây là một số hướng dẫn để quá trình cộng tác diễn ra nhanh chóng và hiệu quả.

---

## 📌 Quy Trình Đóng Góp (Workflow)

1. **Fork** repository về tài khoản GitHub của bạn.
2. **Clone** repository về máy tính:
   ```bash
   git clone https://github.com/xuancanh04/TUANTU-WEDDING.git
   cd TUANTU-WEDDING
   ```
3. Tạo nhánh mới (branch) mô tả tính năng hoặc lỗi bạn xử lý:
   ```bash
   git checkout -b feature/ten-tinh-nang
   # hoặc
   git checkout -b fix/ten-loi
   ```
4. Cài đặt dependencies và chạy môi trường dev:
   ```bash
   npm install
   npm run dev
   ```
5. Đảm bảo chạy kiểm tra lint trước khi commit:
   ```bash
   npm run lint
   ```
6. Commit thay đổi theo quy chuẩn Conventional Commits:
   ```bash
   git commit -m "feat: bổ sung bộ sưu tập váy cưới mùa thu"
   ```
7. Push code lên nhánh trên repo cá nhân và tạo **Pull Request (PR)** vào nhánh `main`.

---

## 🏷️ Quy Chuẩn Đặt Tên Commit (Conventional Commits)

- `feat`: Thêm tính năng mới (ví dụ: `feat: tích hợp đặt lịch thử váy`)
- `fix`: Sửa lỗi (ví dụ: `fix: sửa hiển thị ảnh album trên thiết bị di động`)
- `docs`: Cập nhật tài liệu (ví dụ: `docs: cập nhật README.md`)
- `style`: Thay đổi định dạng, giao diện CSS/UI không ảnh hưởng logic
- `refactor`: Tái cấu trúc code nhưng không thay đổi tính năng
- `perf`: Tối ưu hiệu năng, tốc độ tải trang
- `chore`: Cập nhật cấu hình, dependencies, script bảo trì

---

## 📝 Quy Chuẩn Code (Coding Standards)

- Sử dụng **TypeScript** với type rõ ràng, hạn chế tối đa sử dụng `any`.
- Tuân thủ cấu trúc thư mục của **Next.js App Router**:
  - `app/components/`: Chứa các UI components dùng chung.
  - `app/data/`: Chứa cấu trúc dữ liệu tĩnh.
  - `public/`: Chứa hình ảnh, icons, assets tĩnh.
- Tận dụng Tailwind CSS / CSS Modules để giữ code tinh gọn và thẩm mỹ cao.

---

## 💬 Hỗ Trợ & Thảo Luận

Nếu bạn phát hiện lỗi hoặc có đề xuất cải tiến, vui lòng tạo một **Issue** mới trên GitHub hoặc tham gia thảo luận qua mục **Discussions**.
