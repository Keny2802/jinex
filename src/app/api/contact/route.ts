import {
    Resend
} from "resend";
import {
    ContactFormSchema
} from "@/app/lib/validation";
import {
    NextResponse
} from "next/server";

// const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend("re_AhqK3HjT_8RpdhgtUgrCaTWoqup1oGEm8");

export async function POST (request: Request) {
    try {
        const body = await request.json();
        const safeParsedBody = ContactFormSchema.safeParse(body);

        if (!safeParsedBody.success) {
            return (
                NextResponse.json(
                    {
                        errors: "Špatný požadavek HTTP ERROR 400"
                    },
                    {
                        status: 400
                    }
                )
            );
        };

        const {
            fullName,
            email,
            phone,
            message
        } = safeParsedBody.data;

        await resend.emails.create({
            from: "onboarding@resend.dev",
            to: `info.modernizujme@gmail.com`,
            subject: "Nová zpráva / poptávka z www.jinex.cz",
            html: `
            <p>
                Jméno: ${fullName}
            </p>
            <p>
                E-mail: ${email}
            </p>
            <p>
                Telefonní číslo: ${phone?.trim() || "-"}
            </p>
            <p>
                Zpráva: ${message}
            </p>
            `
        });

        return (
            NextResponse.json({
                success: true
            })
        );
    } catch (error) {
        console.error("Něco se nezdařilo při odesílání zprávy:", error);

        return (
            NextResponse.json({
                errors: "Nezdařilo se odeslat zprávu z webového formuláře."
            })
        );
    };
};