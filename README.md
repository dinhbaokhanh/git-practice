# Git Practice

## Guide

**1. Clone repo về:**
```bash
git clone https://github.com/dinhbaokhanh/git-practice.git
cd git-practice
```

**2. Tạo branch cá nhân (ghi tên để chị check cho dễ):**
```bash
git checkout -b <ten>
```

**3. Chỉnh sửa `app.js`, thêm comment hoặc sửa nội dung, rồi:**
```bash
git add .
git commit -m "feat: <mô tả ngắn>"
```

**4. Push branch lên remote:**
```bash
git push origin <ten>
```

**5. Merge vào main:**
```bash
git checkout main
git pull origin main
git merge <ten>
git push origin main
```

**6. Xử lý conflict (nếu có)**

Conflict xảy ra khi nhiều người cùng sửa **một dòng** trong `app.js`. Khi đó mở file, tìm đoạn:

```
<<<<<<< HEAD
...nội dung của main...
=======
...nội dung của bạn...
>>>>>>> <ten>
```

Giữ lại nội dung đúng, xóa các ký hiệu `<<<<<<<` `=======` `>>>>>>>`, rồi:

```bash
git add .
git commit -m "fix: resolve conflict"
git push origin main
```

---

## Note
- Không làm trực tiếp trên `main`
- Check branch kỹ trước khi commit:
```bash
git branch
```
