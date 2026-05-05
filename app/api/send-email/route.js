import nodemailer from "nodemailer";

const EMAIL_USER = process.env.EMAIL_USERNAME;
const EMAIL_PASS = process.env.EMAIL_PASSWORD;
const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

export async function POST(request) {
  if (!EMAIL_USER || !EMAIL_PASS || !RECEIVER_EMAIL) {
    console.error("Missing email env vars", {
      EMAIL_USER: Boolean(EMAIL_USER),
      EMAIL_PASS: Boolean(EMAIL_PASS),
      RECEIVER_EMAIL: Boolean(RECEIVER_EMAIL),
    });
    return new Response(JSON.stringify({ message: "Email configuration is missing on the server." }), { status: 500 });
  }

  try {
    const { firstName, email } = await request.json();

    if (!firstName || !email) {
      return new Response(JSON.stringify({ message: "Missing required fields" }), { status: 400 });
    }

    await transporter.sendMail({
      from: `"Ticktock Guide" <${EMAIL_USER}>`,
      to: RECEIVER_EMAIL,
      subject: "New Ticktock Guide Form Submission",
      text: `First Name: ${firstName}\nEmail: ${email}`,
      replyTo: email,
    });

    return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ message: process.env.NODE_ENV === "development" ? message : "Error sending email" }),
      { status: 500 }
    );
  }
}
