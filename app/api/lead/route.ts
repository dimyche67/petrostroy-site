import { NextRequest, NextResponse } from "next/server";

async function sendToSheets({ name, phone, message, source }: { name: string; phone: string; message?: string; source?: string }) {
  const url = "https://script.google.com/macros/s/AKfycbxyq6mrwjbbADG2Bm_5FPFLa-tZxrWnUIsSV0AI6ihsYdlnjKHuGLx_Tgun_ScsZv5O/exec";
  const params = new URLSearchParams({
    name: encodeURIComponent(name),
    phone: encodeURIComponent(phone),
    message: encodeURIComponent(message || ""),
    source: encodeURIComponent(source || "Сайт"),
  });
  await fetch(`${url}?${params.toString()}`, { redirect: "follow" }).catch(() => {});
}

async function sendTelegram({ name, phone, message, source }: { name: string; phone: string; message?: string; source?: string }) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;
  const text = [
    "📥 *Новая заявка с сайта*",
    `👤 Имя: ${name}`,
    `📞 Телефон: ${phone}`,
    message ? `💬 ${message}` : null,
    `🏷 Источник: ${source || "Сайт"}`,
  ].filter(Boolean).join("\n");
  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: "Markdown" }),
  }).catch(() => {});
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, message, source = "Сайт" } = body;

    if (!name || !phone) {
      return NextResponse.json({ ok: false, error: "Заполните имя и телефон" }, { status: 400 });
    }

    const webhookUrl = process.env.BITRIX24_WEBHOOK_URL;

    if (!webhookUrl) {
      // Dev mode — log and return success without sending to Bitrix24
      console.log("[Bitrix24] BITRIX24_WEBHOOK_URL не задан. Данные заявки:", { name, phone, message, source });
      await sendTelegram({ name, phone, message, source });
      await sendToSheets({ name, phone, message, source });
      return NextResponse.json({ ok: true, dev: true });
    }

    const url = webhookUrl.replace(/\/$/, "") + "/crm.lead.add.json";

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields: {
          TITLE: `Заявка с сайта: ${name}`,
          NAME: name,
          PHONE: [{ VALUE: phone, VALUE_TYPE: "WORK" }],
          COMMENTS: message || "",
          SOURCE_ID: "WEB",
          STATUS_ID: "NEW",
          UF_CRM_SOURCE_DETAIL: source,
        },
      }),
    });

    const data = await res.json();

    if (data.result) {
      await sendTelegram({ name, phone, message, source });
      await sendToSheets({ name, phone, message, source });
      return NextResponse.json({ ok: true, id: data.result });
    }

    console.error("[Bitrix24] Ошибка:", data);
    return NextResponse.json({ ok: false, error: "Ошибка CRM" }, { status: 500 });
  } catch (e) {
    console.error("[Bitrix24] Exception:", e);
    return NextResponse.json({ ok: false, error: "Внутренняя ошибка" }, { status: 500 });
  }
}
