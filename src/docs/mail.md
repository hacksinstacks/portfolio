
---

## 📄 `docs/mailer.md` — Mailer / Email Feature

```md
# 📧 Mailer (Email Sending)

## ✅ What It Does
- Sends confirmation or contact emails from the backend
- Uses nodemailer (Node.js) or external service like EmailJS / Resend

## 🧩 Files Involved
| File                      | Purpose                           |
|---------------------------|-----------------------------------|
| `src/server/mailer.ts`    | Email sending logic               |
| `src/api/contact.ts`      | API route to send email           |
| `.env`                    | Secure SMTP/API credentials       |

## ⚙️ Setup (Using Nodemailer)
```ts
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export const sendMail = async ({ to, subject, text }) => {
  return transporter.sendMail({
    from: process.env.MAIL_USER,
    to,
    subject,
    text,
  });
};
