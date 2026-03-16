import {
    Fragment
} from "react";
import clsx from "clsx";

import Wrapper from "../components/Wrapper";
import Flex from "../components/Flex";
import Img from "../components/Img";
import Text from "../components/Text";
import Logo from "../components/Logo";
import Cta from "../components/Cta";

const Hero = () => {
    return (
        <Fragment>
            <Wrapper className="p-10">
                <Flex className="justify-evenly">
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
                                    height={350}
                                    src={picture.src}
                                    alt={picture.alt}
                                    className={`${idx === 2 ? "col-span-2 md:max-w-full" : "col-span-1"} row-span-1 w-full md:max-w-[350px] md:min-h-[300px] md:max-h-[350px] object-cover rounded-md`}
                                    />
                                );
                            })
                        }
                    </Wrapper>
                    <Flex type="flexCol"
                    className="mt-2 md:mt-4 lg:mt-6 w-full md:max-w-1/2">
                        <Logo
                        width={500}
                        height={500}
                        />
                        <Text type="heroHeading">
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
                        <Cta href="#kontakt">
                            Zjistit dostupnost řemeslníků
                        </Cta>
                    </Flex>
                </Flex>
            </Wrapper>
        </Fragment>
    );
};

export default Hero;