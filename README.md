**Guide**
1. Clone repo về:
git clone https://github.com/dinhbaokhanh/git-practice.git
cd git-practice

3. Tạo branch cá nhân (ghi tên vào để chị check cho dễ):
git checkout -b <ten>

4. Chỉnh sửa file và commit: mở app.js, thêm comment hoặc chỉnh sửa nội dung, rồi:
git add .
git commit -m "feat: <mô tả ngắn>"

5. Push branch lên remote:
git push origin <ten>

6. Merge vào main:
git checkout main
git pull origin main
git merge <ten>

7. Xử lý conflict (nếu có)
Khi merge bị conflict, mở file bị conflict, tìm đoạn:
<<<<<<< HEAD
...nội dung của main...
=======
...nội dung của bạn...
>>>>>>> <tên-của-bạn>

Chỉnh sửa giữ lại nội dung đúng, xóa các ký hiệu <<<<<<< ======= >>>>>>>, rồi:
git add .
git commit -m "fix: resolve conflict"
git push origin main

**Note**
Không làm trực tiếp trên main, check branch kỹ vào.
