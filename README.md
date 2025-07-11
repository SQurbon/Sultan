## 🔁 1. Fake Authentication (Login/Signup) va User State Management
Nega kerak? Backend bo‘lmasa ham foydalanuvchi login qilgandek bo‘ladi.

localStorage orqali foydalanuvchi ma’lumotlarini saqlang.

Agar foydalanuvchi login qilgan bo‘lsa, Navbarda Welcome, User! deb ko‘rsating.

Agar login qilmagan bo‘lsa, savatga mahsulot qo‘shishga ruxsat bermang.

## 🛒 2. Shopping Cart with LocalStorage (Real Time)
Nega kerak? Backend bo‘lmasa ham, foydalanuvchi mahsulotlarni savatga qo‘sha oladi.

Har bir mahsulot kartasida "Add to Cart" tugmasi bo‘lsin.

Qo‘shilgan mahsulotlar localStorageda saqlansin.

Savat sahifasida mahsulotlar ro‘yxati, soni, narxi va umumiy summasi ko‘rinsin.

####  💡 3. Filter va Sort funksiyasi
Nega kerak? Foydalanuvchi kerakli mahsulotni tez topa oladi.

Narx bo‘yicha sort: pastdan yuqoriga, yuqoridan pastga.

Kategoriya, brend, reyting bo‘yicha filtr.

Frontendda array.filter() va array.sort() bilan ishlasa bo‘ladi.

## 🔎 4. Search with Instant Result
Nega kerak? Mahsulot qidirishni real va qulay qiladi.

Input yozilishi bilan onChange orqali searchQueryni yangilab, natijani real vaqtda ko‘rsating.

Debounce bilan ishlash – typing tugagandan 300ms keyin natijani chiqarish.

## ❤️ 5. Like/Favorite funksiyasi (wishlist)
Nega kerak? Foydalanuvchi yoqtirgan mahsulotlarni saqlab qo‘ya oladi.

Har bir mahsulot kartasida "❤️" bo‘lsin.

Yoqtirilgan mahsulotlar localStoragega saqlansin.

Wishlist sahifasi bo‘lsin.

## 📦 6. Mahsulotga sharh yozish (review) – Frontend only
Nega kerak? Foydalanuvchi "feedback" qoldirayotgan kabi his qiladi.

Har bir mahsulot sahifasida sharh yozish formasi bo‘lsin.

Sharhlar vaqtinchalik localStorageda saqlansin.

Har bir mahsulotga sharhlar ajratilsin.

## 🧾 7. Fake Payment Modal / Checkout simulation
Nega kerak? To‘liq checkout tajribasini simulyatsiya qilish.

Savatdan to‘lov bosilganda, modal ochilsin.

To‘lov shakli: karta raqami, amal qilish muddati, CVV (hech narsa yuborilmaydi).

Tugmani bosganda "Order Placed" yozuvi chiqsin va savat bo‘shatilsin.

## 📊 8. Mahsulot statistikasi (Frontendda hisoblash)
Nega kerak? Admin yoki foydalanuvchi uchun foydali.

Eng ko‘p sotilgan mahsulot (savatga qo‘shilish soniga qarab).

Eng ko‘p like olingan mahsulot.

Mahsulot soni, umumiy narx, o‘rtacha reyting – barchasi frontendda hisoblanadi.

## 🧠 9. Offline mode + Reconnect
Nega kerak? Sayt kuchli ko‘rinadi.

Agar internet uzilib qolsa (navigator.onLine), banner chiqsin: "Siz hozir offline moddasiz".

Reconnect bo‘lsa, yana yuklash.

## ✍️ 10. Admin panel – frontend-only
Nega kerak? Siz loyihani kengaytirayotganingizni ko‘rsatadi.

Mahsulot qo‘shish formasi (form validation).

Mahsulotlar ro‘yxati, har birini tahrirlash, o‘chirish (localStorage).

Bu orqali React bilan CRUD prinsiplarini mashq qilasiz.

<!-- ----------------------------------------------------------------------- -->


















🔐 1. Foydalanuvchi autentifikatsiyasi (login/ro‘yxatdan o‘tish)
Google yoki telefon raqam bilan kirish

Foydalanuvchi o‘z buyurtmalarini ko‘rishi uchun

📦 2. Buyurtmalar tarixi (My Orders)
Foydalanuvchi o‘zining oldingi buyurtmalarini ko‘ra oladi

Har bir buyurtmada: status (qabul qilindi, tayyorlanmoqda, yetkazildi)

📊 3. Admin Panel
Mahsulot qo‘shish/o‘chirish/tahrirlash

Buyurtmalarni ko‘rish va statusini o‘zgartirish

Statistikalar: eng ko‘p sotilgan mahsulotlar, umumiy savdo hajmi

⭐ 4. Fikr va baholash tizimi
Foydalanuvchilar mahsulotlarga ⭐ berishlari va izoh qoldirishlari mumkin

🔍 5. Mahsulotlar uchun qidiruv va filtrlash
Narx bo‘yicha filtrlash

Kategoriya/brand bo‘yicha saralash

Qidiruv input orqali mahsulot topish

❤️ 6. "Sevimlilar" ro‘yxati (Wishlist)
Foydalanuvchi yoqtirgan mahsulotlarini saqlab qo‘yadi

🧾 7. PDF hisob-faktura (invoice)
Har bir buyurtmadan so‘ng avtomatik ravishda PDF invoice yuklab olish

🌐 8. Ko‘p tillilik (O‘zbekcha / Ruscha / Inglizcha)
Sayt interfeysini foydalanuvchi tiliga mos ravishda o‘zgartirish

📍 9. Xaritada yetkazib berish manzilini tanlash (Google Maps API bilan)
Foydalanuvchi manzilini xaritada belgilanadi

Admin panelda xaritada buyurtma joyi ko‘rinadi

🧠 10. AI tavsiyalar (shunga o‘xshash mahsulotlar)
Savatchaga qo‘shilgan mahsulot asosida boshqa mahsulotlarni tavsiya qilish

💬 11. Live chat (real-time qo‘llab-quvvatlash)
Admin va mijoz o‘rtasida chat (Firebase bilan yoki WebSocket bilan)

🧑‍🤝‍🧑 12. Referal tizimi
Do‘stini taklif qilgan foydalanuvchi chegirma yoki bonus oladi

