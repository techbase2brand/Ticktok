import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { firstName, email } = await request.json();

    if (!firstName || !email) {
      return new Response(JSON.stringify({ message: "Missing required fields" }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Ticktock Guide" <${process.env.EMAIL_USERNAME}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: "New Ticktock Guide Form Submission",
      text: `First Name: ${firstName}\nEmail: ${email}`,
    });

    return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Error sending email" }), { status: 500 });
  }
}