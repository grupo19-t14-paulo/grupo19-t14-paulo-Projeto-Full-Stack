import Mailgen from "mailgen";
import { createTransport } from "nodemailer";
import AppError from "../errors/AppError";
import { IEmailRequest } from "../interfaces/sendEmail.interfaces";

const sendEmailUtils = async ({ to, subject, text }: IEmailRequest) => {
    const transporter = createTransport({
        host: "smtp.gmail.com",
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    await transporter
        .sendMail({
            from: "franklmarins@gmail.com",
            to,
            subject,
            html: text,
        })
        .then(() => {
            console.log("your email has been sent");
        })
        .catch((error) => {
            console.log(error);
            throw new AppError("Error sending email, try again later", 500);
        });
};

const resetPasswordTemplateUtils = (
    userName: string,
    userEmail: string,
    resetToken: string
) => {
    const mailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "Motors Shop",
            link: "https://motors-shop-g19-front.web.app",
        },
    });
    const email = {
        body: {
            name: userName,
            intro: "You have received this email because a password reset request for your account was received.",
            action: {
                instructions: "Click the button below to reset your password:",
                button: {
                    color: "#4529E6",
                    text: "Reset your password",
                    link: `https://motors-shop-g19-front.web.app/resetPassword/${resetToken}`,
                },
            },
            outro: "If you did not request a password reset, no further action is required on your part.",
        },
    };

    const emailBody = mailGenerator.generate(email);

    const emailTemplate = {
        to: userEmail,
        subject: "Password Reset",
        text: emailBody,
    };

    return emailTemplate;
};

export { sendEmailUtils, resetPasswordTemplateUtils };
