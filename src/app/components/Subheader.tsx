import {
    ReactNode,
    Fragment
} from "react";
import Link from "next/link";
import clsx from "clsx";

import Wrapper from "./Wrapper";
import Flex from "./Flex";
import Cta from "./Cta";

type props = {
    className?: string;
    children?: ReactNode;
};

const Subheader = (props: props) => {
    return (
        <Fragment>
            <Wrapper className={clsx(props.className, "hidden md:block p-2.5 md:p-3 lg:p-4 bg-white text-black shadow-lg border-t border-gray-200 sub-header-component")}>
                <Flex
                type="flexRowOnly"
                className="justify-center">
                    <Flex
                    type="flexRowOnly"
                    className="justify-between w-full">
                        <ul>
                            <Flex type="flexRowOnly">
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
                                            // href: "#:~:text=Rekonstrukce%20a%20odizolování%20základů%20a%20kanalizace"
                                        },
                                        {
                                            text: "O nás",
                                            href: "/o-nas"
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
                        </ul>
                        <Cta href="#jak-to-funguje">
                            Jak to funguje
                        </Cta>
                    </Flex>
                </Flex>
            </Wrapper>
        </Fragment>
    );
};

export default Subheader;