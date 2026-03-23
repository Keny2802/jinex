import {
    Fragment
} from "react";
import Link from "next/link";
import clsx from "clsx";

import Wrapper from "../components/Wrapper";
import Flex from "../components/Flex";
import Text from "../components/Text";

type props = {
    className?: string;
    id?: string;
};

const Contact = ({
    className,
    id
}: props) => {
    return (
        <Fragment>
            <Wrapper
            className={clsx(className, "p-6 md:p-8 lg:p-10 border-y border-gray-200 bg-white shadow-lg contact-section-component")}
            id={id}>
                <Flex>
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
                        <Wrapper className="md:max-w-3/4 p-4 md:p-5 lg:p-6 bg-white shadow-2xl rounded-md">
                            <Text type="boldText">
                                Kontaktní informace
                            </Text>
                            <Flex
                            type="flexRowOnly"
                            className="mt-2.5 md:mt-3 lg:mt-4">
                                <Flex type="flexCol">
                                    {
                                        [
                                            "Jiří Nesměrák",
                                            "IČO 18264085"
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
                    <Wrapper className="p-4 md:p-5 lg:p-6 bg-white shadow-2xl rounded-md">
                        <Flex type="flexCol">
                            <Text
                            type="cardHeading"
                            className="text-center">
                                Zadejte poptávku či dotaz
                            </Text>
                            <Flex type="flexCol">
                                {
                                    [
                                        {
                                            inputType: "text",
                                            inputName: "full-name",
                                            inputPlaceholder: "Radek Férový"
                                        },
                                        {
                                            inputType: "text",
                                            inputName: "phone-number",
                                            inputPlaceholder: "+420 601 456789"
                                        },
                                        {
                                            inputType: "email",
                                            inputName: "email",
                                            inputPlaceholder: "radek@ferovy.cz"
                                        },
                                        {
                                            inputType: "address",
                                            inputName: "address",
                                            inputPlaceholder: "Místo realizace"
                                        },
                                        {
                                            inputType: "text-area",
                                            inputName: "message",
                                            inputPlaceholder: "Zašlete nám poptávku či dotaz."
                                        }
                                    ].map((input, idx) => {
                                        const {
                                            inputType,
                                            inputName,
                                            inputPlaceholder
                                        } = input;

                                        return (
                                            <Fragment key={idx}>
                                                {
                                                    inputType !== "text-area" ? (
                                                        <input
                                                        type={inputType}
                                                        name={inputName}
                                                        autoComplete="on"
                                                        placeholder={inputPlaceholder}
                                                        className="p-2.5 border border-gray-200 rounded-md focus:outline-none focus:border-2 focus:border-[#0530a6] transition-transform duration-100 ease-in-out"
                                                        />
                                                    ) : (
                                                        <textarea
                                                        name={inputName}
                                                        placeholder={inputPlaceholder}
                                                        className="min-h-[120px] p-2.5 border border-gray-200 rounded-md focus:outline-none focus:border-2 focus:border-[#0530a6] resize-none transition-transform duration-100 ease-in-out"
                                                        />
                                                    )
                                                }
                                            </Fragment>
                                        );
                                    })
                                }
                                <button className="p-3 md:p-3.5 lg:p-4 min-w-[180px] md:min-w-[200px] bg-[#0530a6] text-white text-center rounded-full cursor-pointer text-base md:text-[17px] lg:text-[17.5px]">
                                    Odeslat poptávku
                                </button>
                                <Text>
                                    Odesláním formuláře souhlasíte se zpracováním osobních údajů.
                                    {" "}
                                    <Link
                                    href="/pravni-podstranky/pouceni-o-zpracocani-osobnich-udaju"
                                    className="text-[#0530a6]">
                                        Poučení o zpracování osobních údajů.
                                    </Link>
                                </Text>
                            </Flex>
                        </Flex>
                    </Wrapper>
                </Flex>
            </Wrapper>
        </Fragment>
    );
};

export default Contact;