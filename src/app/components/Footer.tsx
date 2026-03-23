import {
    Fragment
} from "react";
import Link from "next/link";
import clsx from "clsx";

import Wrapper from "./Wrapper";
import Flex from "./Flex";
import Logo from "./Logo";
import Text from "./Text";

type props = {
    className?: string;
    id?: string;
};

const Footer = ({
    className,
    id
}: props) => {
    const year = new Date().getFullYear();

    return (
        <Fragment>
            <Wrapper
            className={clsx(className, "p-6 md:p-8 lg:p-10 border- border-gray-200 bg-white shadow-l footer-component")}
            id={id}>
                <Flex
                type="flexCol"
                className="justify-center items-center">
                    <Logo />
                    <Flex className="items-start">
                        {
                                [
                                    {
                                        text: "Úvod",
                                        href: "#uvod"
                                    },
                                    {
                                        text: "Jak to funguje",
                                        href: "/jak-to-funguje"
                                    },
                                    {
                                        text: "Služby",
                                        href: "/sluzby"
                                    },
                                    {
                                        text: "Často kladené dotazy",
                                        href: "/casto-kladene-dotazy"
                                    },
                                    {
                                        text: "O nás",
                                        href: "/o-nas"
                                    },
                                    {
                                        text: "Poučení o zpracování osobních údajů",
                                        href: "/pouceni-o-zpracovani-osobnich-udaju"
                                    },
                                    {
                                        text: "Soubory cookies",
                                        href: "/soubory-cookies"
                                    },
                                ].map((link, idx) => {
                                    return (
                                        <Fragment key={idx}>
                                            <li>
                                                <Link href={link.href}>
                                                    {link.text}
                                                </Link>
                                            </li>
                                        </Fragment>
                                    );
                                })
                        }
                    </Flex>
                    <Text>
                        Jinex.cz vlastněna Jiřím Nesměrákem, všechna práva vyhrazena.
                    </Text>
                    <Text>
                        2006-{year}
                    </Text>
                </Flex>
            </Wrapper>
        </Fragment>
    );
};

export default Footer;