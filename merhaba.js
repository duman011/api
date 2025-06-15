// api/merhaba.js

export default function handler(req, res) {
  // CORS header'ı ekle
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  const cevap = { mesaj: "Merhaba Abdullah" };
  res.status(200).json(cevap);
}
