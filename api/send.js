export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false });
  }

  const { username, complaint } = req.body;

  const BOT_TOKEN = process.env.BOT_TOKEN;
  const CHAT_ID = process.env.CHAT_ID;

  const message = `
📩 NEW COMPLAINT

🌍 Country: ${username}
📝 Complaint: ${complaint}
`;

  try {
    const telegramRes = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message
        })
      }
    );

    const data = await telegramRes.json();

    if (data.ok) {
      return res.json({ success: true });
    } else {
      return res.json({ success: false });
    }

  } catch (error) {
    return res.json({ success: false });
  }
}