"use client";

import {
    ReactNode,
    useState,
    useEffect,
    Fragment
} from "react";
import clsx from "clsx";

import Wrapper from "../components/Wrapper";
import Flex from "../components/Flex";
import Img from "../components/Img";
import Text from "../components/Text";
import Logo from "../components/Logo";
import Cta from "../components/Cta";

type props = {
    className?: string;
    children?: ReactNode;
};

const Hero = ({
    className,
    children
}: props) => {
    const [isResizing, setToIsResizing] = useState<boolean>(false);

    useEffect(() => {
        const setToResize = () => {
            if (window.innerWidth >= 768) {
                setToIsResizing(true);
            } else {
                setToIsResizing(false);
            };
        };

        window.addEventListener("resize", setToResize);

        return () => {
            window.removeEventListener("resize", setToResize);
        };
    }, []);

    return (
        <Fragment>
            <Wrapper className={clsx(className, "p-6 md:p-8 lg:p-10 hero-section-component")}>
                <Flex
                type="flexRowReverseCombo"
                className="justify-evenly">
                    <Wrapper className="w-full md:max-w-1/2 grid grid-cols-1 md:grid-cols-2 md:auto-rows-auto gap-2 md:gap-3 lg:gap-4 mt-2 md:mt-4 lg:mt-4">
                        {
                            [
                                {
                                    src: "/hero-1.avif",
                                    alt: "Výstavba základové desky kompostárny Nové Sedlo-Loučky rok realizace 2025 - Jiří Nesměrák | jinex.cz"
                                },
                                {
                                    src: "/hero-2.avif",
                                    alt: "Realizace koupelnové jádra u manželů Teplých - Jiří Nesměrák | jinex.cz"
                                },
                                {
                                    src: "/hero-3.avif",
                                    alt: "Výstavba bazénu, plotu a komunikací Rodinného domu ve Vintířov - Jiří Nesměrák | jinex.cz"
                                }
                            ].map((picture, idx) => {
                                return (
                                    <Img
                                    key={idx}
                                    width={350}
                                    height={210}
                                    src={picture.src}
                                    alt={picture.alt}
                                    type="instantImage"
                                    className={`${idx === 2 ? "md:col-span-2 md:max-w-full" : "col-span-1"} row-span-1 w-full md:max-w-[350px] md:min-h-[200px] md:h-[205px] md:max-h-[210px] object-cover rounded-md`}
                                    />
                                );
                            })
                        }
                        {
                            !isResizing && (
                                <Cta href="#kontakt">
                                    Zjistit dostupnost řemeslníků
                                </Cta>
                            )
                        }
                    </Wrapper>
                    <Flex type="flexCol"
                    className="mt-2 md:mt-4 lg:mt-6 w-full md:max-w-1/2">
                        {/* <Logo
                        width={500}
                        height={500}
                        /> */}
                        <Text type="heroHeading"
                        style={{
                            fontFamily: "var(--font-kanit)"
                        }}>
                            Široké služby v oblasti stavebních
                            a zámečnických prací v západočeském regionu.
                        </Text>
                        <Text type="bodyText">
                            Jsme tým stavitelů a řemeslníků, kteří Vám pomohou s realizací
                            Vámi požadovaných služeb, jako jsou základové a zemní práce,
                            zámečnické a zednické práce, rekonstrukce bytových jednotek
                            na klíč jedním dodavatelem včetně kuchyňských linek a vestavěných
                            skříní a tak dále, nač si jen vzpomenete.
                        </Text>
                        {
                            isResizing && (
                                <Cta href="#kontakt">
                                Zjistit dostupnost řemeslníků
                            </Cta>
                            )
                        }
                    </Flex>
                </Flex>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default Hero;