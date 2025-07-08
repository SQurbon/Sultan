import express from "express";
import http from "http";
import { Server } from "socket.io";
import TelegramBot from "node-telegram-bot-api";
import cors from "cors";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

const BOT_TOKEN = "7631673920:AAEAq3tcOILwz_uThwa7eZb4akETmrkUvTw";
const OWNER_ID = 1940012629;

const bot = new TelegramBot(BOT_TOKEN, { polling: true });

app.use(cors());
app.use(express.json()); // 🟢 JSON qabul qilish uchun kerak

// 🔌 Frontend ulanganini kuzatish
io.on("connection", (socket) => {
  console.log("React frontend ulandi");
});

// 🔁 Telegram botdan oddiy xabar olinsa
bot.on("message", (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;

  if (chatId === OWNER_ID) {
    io.emit("botMessage", text);
  }
});

// ✅ ✅ ✅ ✅ ✅ YANGI QISIM: 3 ta tugmali menyu (start bosilganda)
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "Buyurtma holatini tanlang:", {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "📦 Собирается", callback_data: "status_gathering" },
          { text: "🚚 На доставке", callback_data: "status_delivery" },
          { text: " ", callback_data: "status_done" }
        ]
      ]
    }
  });
});

// ✅ Tugmalar bosilganda ishlovchi qism
bot.on("callback_query", (query) => {
  const chatId = query.message.chat.id;
  const data = query.data;

  let statusText = "";

  if (data === "status_gathering") {
    statusText = "Собирается";
    bot.sendMessage(chatId, "✅ Status: *Собирается*", { parse_mode: "Markdown" });
  } else if (data === "status_delivery") {
    statusText = "На доставке";
    bot.sendMessage(chatId, "🚚 Status: *На доставке*", { parse_mode: "Markdown" });
  } else if (data === "status_done") {
    statusText = "Доставлено";
    bot.sendMessage(chatId, "🎉 Status: *Доставлено*", { parse_mode: "Markdown" });
  }

  // ✅ Har safar tugma bosilganda true va status yuboriladi
  io.emit("orderStatus", {
    status: statusText || "Nomaʼlum",
    success: true
  });

  bot.answerCallbackQuery(query.id);
});







// ✅ YANGI QISIM: Frontend POST yuboradi, botga xabar va rasm boradi
app.post("/send-to-bot", (req, res) => {
  const { title, price, image } = req.body;
  

  const message = `🛒 *Buyurtma!*\n📦 *Mahsulot:* ${title}\n💵 *Narxi:* ${price}\n Rasm: ${image}`;

  if (image && image.startsWith("https")) {
    bot.sendPhoto(OWNER_ID, image, {
      caption: message,
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [
          [
            { text: "📦 Собирается", callback_data: "status_gathering" },
            { text: "🚚 На доставке", callback_data: "status_delivery" },
            { text: "✅ Доставлено", callback_data: "status_done" }
          ]
        ]
      }
    }).catch(err => {
      console.error("❌ sendPhoto error:", err.message);
    });
  } else {
    bot.sendMessage(OWNER_ID, message, {
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [
          [
            { text: "📦 Собирается", callback_data: "status_gathering" },
            { text: "🚚 На доставке", callback_data: "status_delivery" },
            { text: "✅ Доставлено", callback_data: "status_done" }
          ]
        ]
      }
    });
  }

  res.send({ success: true });
});

server.listen(5000, () => {
  console.log("Server http://localhost:5000 da ishlayapti");
});






