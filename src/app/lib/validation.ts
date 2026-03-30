import {
    z
} from "zod";

export const ContactFormSchema = z.object({
    fullName: z.string().trim().min(2, "Vaše jméno musí obsahovat více jak 2 znaky."),
    email: z.string().trim().email("Nesprávná emailová adresa."),
    phone: z.string().trim().optional(),
    address: z.string().trim().optional(),
    message: z.string().trim().min(10, "Vaše zpráva musí obsahovat alespoň 10 znaků.")
});

export type ContactFormProps = z.infer<typeof ContactFormSchema>;