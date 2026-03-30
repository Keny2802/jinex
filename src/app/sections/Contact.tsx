"use client";

import {
    useState,
    Fragment
} from "react";
import {
    XMarkIcon
} from "@heroicons/react/24/solid";
import {
    useForm
} from "react-hook-form";
import {
    zodResolver
} from "@hookform/resolvers/zod";
import {
    ContactFormSchema,
    ContactFormProps
} from "@/app/lib/validation";
import Link from "next/link";
import clsx from "clsx";

import Wrapper from "../components/Wrapper";
import Flex from "../components/Flex";
import Text from "../components/Text";
import Relative from "../components/Relative";
import Absolute from "../components/Absolute";

type props = {
    className?: string;
    id?: string;
};

const Contact = ({
    className,
    id
}: props) => {
    // const [inputValue, setInputValue] = useState<string>("");

    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isSubmitting
        },
        reset
    } = useForm<ContactFormProps>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            address: "",
            message: ""
        }
    });

    const handleForm = async (contactFormCredentials: ContactFormProps) => {
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contactFormCredentials)
            });

            if (!res.ok) {
                const errorCredentials = await res.json();
                console.error("Chyba při odesílání zprávy:", errorCredentials);

                return;
            };

            // router.push("/dekujeme");

            reset();
        } catch (catchError) {
            console.error("Chyba při odesílání zprávy:", catchError);
        };
    };

    return (
        <Fragment>
            <Wrapper
                className={clsx(className, "p-6 md:p-8 lg:p-10 border-y border-gray-200 bg-white shadow-lg contact-section-component")}
                id={id}>
                <Flex type="flexRowReverseCombo">
                    <Flex type="flexCol">
                        <Flex type="flexCol">
                            <Text
                                type="sectionHeading"
                                className="text-[#0530a6] uppercase">
                                Pouhý jeden krok do realizace
                            </Text>
                            <Text type="boldText">
                                Máte dotaz? Neváhejte nás kontaktovat.
                            </Text>
                            <Text className="text-[#777777]">
                                Na základě zaslaných informací Vám zašleme odpověď.
                            </Text>
                        </Flex>
                        <Wrapper className="max-w-full p-4 md:p-5 lg:p-6 bg-white shadow-2xl rounded-md">
                            <Text type="boldText">
                                Kontaktní informace
                            </Text>
                            <Flex
                                // type="flexRowOnly"
                                className="mt-2.5 md:mt-3 lg:mt-4 items-start">
                                <Flex type="flexCol">
                                    {
                                        [
                                            "Jiří Nesměrák",
                                            "IČO 18264085",
                                            "DIČ CZ7104022255",
                                            "Zapsán u Finančního úřadu v Sokolově"
                                        ].map((text, idx) => {
                                            return (
                                                <Text key={idx}>
                                                    {text}
                                                </Text>
                                            );
                                        })
                                    }
                                </Flex>
                                <Flex type="flexCol">
                                    {
                                        [
                                            {
                                                href: "https://1url.cz/xei4B",
                                                text: "Vintířov 192, 357 35"
                                            },
                                            {
                                                href: "mailto:jinex@jinex.cz",
                                                text: "jinex@jinex.cz"
                                            },
                                        ].map((link, idx) => {
                                            const {
                                                href,
                                                text
                                            } = link;

                                            return (
                                                <Link
                                                    key={idx}
                                                    href={href}>
                                                    {text}
                                                </Link>
                                            );
                                        })
                                    }
                                </Flex>
                            </Flex>
                        </Wrapper>
                    </Flex>
                    <form
                        onSubmit={handleSubmit(handleForm)}>
                        <Wrapper className="p-4 md:p-5 lg:p-6 bg-white shadow-2xl rounded-md">
                            <Flex type="flexCol">
                                <Text
                                    type="cardHeading"
                                    className="text-center">
                                    Zadejte poptávku či dotaz
                                </Text>
                                <Flex type="flexCol"
                                    className="max-w-full">
                                    {
                                        [
                                            {
                                                inputType: "text",
                                                inputKey: "fullName",
                                                inputPlaceholder: "Radek Férový",
                                                inputIndex: 0,
                                            },
                                            {
                                                inputType: "email",
                                                inputKey: "email",
                                                inputPlaceholder: "radek@ferovy.cz",
                                                inputIndex: 2,
                                            },
                                            {
                                                inputType: "text",
                                                inputKey: "phone",
                                                inputPlaceholder: "+420 601 456789",
                                                inputIndex: 1,
                                            },
                                            {
                                                inputType: "address",
                                                inputKey: "address",
                                                inputPlaceholder: "Místo realizace",
                                                inputIndex: 3,
                                            },
                                            {
                                                inputType: "text-area",
                                                inputKey: "message",
                                                inputPlaceholder: "Zašlete nám poptávku či dotaz.",
                                                inputIndex: 4,
                                            }
                                        ].map((input, idx) => {
                                            const {
                                                inputType,
                                                inputKey,
                                                inputPlaceholder,
                                                inputIndex
                                            } = input;

                                            return (
                                                <Fragment key={idx}>
                                                    {
                                                        inputType !== "text-area" ? (
                                                            <Relative className="w-full">
                                                                <input
                                                                    {...register(inputKey as any)}
                                                                    type={inputType}
                                                                    name={inputKey}
                                                                    autoComplete="on"
                                                                    placeholder={inputPlaceholder}
                                                                    // onChange={(e) => {
                                                                    //     if (idx === inputIndex) {
                                                                    //         setInputValue(e.target.value);
                                                                    //     };
                                                                    // }}
                                                                    // value={inputValue ? inputValue : ""}
                                                                    className="p-2.5 border border-gray-200 rounded-md w-full focus:outline-none focus:border-2 focus:border-[#0530a6] transition-transform duration-100 ease-in-out"
                                                                />
                                                                {/* <Absolute
                                                                variant="rightFive"
                                                                className="bottom-2">
                                                                    <XMarkIcon
                                                                    className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 cursor-pointer"
                                                                    onClick={() => setInputValue("")}/>
                                                                </Absolute> */}
                                                            </Relative>
                                                        ) : (
                                                            <Relative className="w-full">
                                                                <textarea
                                                                    {...register("message")}
                                                                    name="message"
                                                                    placeholder={inputPlaceholder}
                                                                    className="min-h-[120px] p-2.5 border border-gray-200 rounded-md w-full focus:outline-none focus:border-2 focus:border-[#0530a6] resize-none transition-transform duration-100 ease-in-out"
                                                                />
                                                                {/* <Absolute
                                                                variant="rightFive"
                                                                className="top-2">
                                                                    <XMarkIcon
                                                                    className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 cursor-pointer"
                                                                    onClick={() => setInputValue("")} />
                                                                </Absolute> */}
                                                            </Relative>
                                                        )
                                                    }
                                                </Fragment>
                                            );
                                        })
                                    }
                                    <button
                                    type="submit"
                                    className="p-3 md:p-3.5 lg:p-4 min-w-[180px] md:min-w-[200px] bg-[#0530a6] text-white text-center rounded-full cursor-pointer text-base md:text-[17px] lg:text-[17.5px]">
                                        Odeslat poptávku
                                    </button>
                                    <Text>
                                        Odesláním formuláře souhlasíte se zpracováním osobních údajů.
                                        {" "}
                                        <Link
                                            href="/povinne/pouceni-o-zpracovani-osobnich-udaju"
                                            className="text-[#0530a6]">
                                            Poučení o zpracování osobních údajů.
                                        </Link>
                                    </Text>
                                </Flex>
                            </Flex>
                        </Wrapper>
                    </form>
                </Flex>
            </Wrapper>
        </Fragment>
    );
};

export default Contact;