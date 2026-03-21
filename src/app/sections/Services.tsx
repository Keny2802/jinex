import {
    Fragment
} from "react";
import Link from "next/link";
import clsx from "clsx";

import Wrapper from "../components/Wrapper";
import Flex from "../components/Flex";
import Text from "../components/Text";
import Grid from "../components/Grid";
import Img from "../components/Img";

const Services = ({
    className,
    id
} : {
    className?: string;
    id?: string;
}) => {
    return (
        <Fragment>
            <Wrapper
            className={clsx("p-6 md:p-8 lg:p-10 border-t border-gray-200 bg-white shadow-lg services-section-component", className)}
            id={id}>
                <Flex
                type="flexCol"
                className="justify-center items-center text-center">
                    <Text type="sectionHeading">
                        Jaké práce provádíme
                    </Text>
                    <Text>
                        Z našeho širokého výběru stavebních a řemeslných prací si rozhodně vyberete.
                    </Text>
                </Flex>
                <Grid
                className="mt-2.5 md:mt-3 lg:mt-4 w-full mx-auto">
                    {
                        [
                            {
                                src: "/vykopove-prace.avif",
                                alt: "Služba výkopové práce - Jinex.cz | Jiří Nesměrák",
                                href: "/sluzby/vykopove-prace",
                                heading: "Výkopové práce"
                            },
                            {
                                src: "/stavebni-a-zamecnicke-konstrukce.avif",
                                alt: "Služba stavební a zámečnické konstrukce - Jinex.cz | Jiří Nesměrák",
                                href: "/sluzby/stavebni-a-zamecnicke-kontrukce",
                                heading: "Stavební a zámečnické konstrukce"
                            },
                            {
                                src: "/spolecne-prostory-bytovych-domu.avif",
                                alt: "Služba společné prostory bytových prostorů - Jinex.cz | Jiří Nesměrák",
                                href: "/sluzby/spolecne-prostory-bytovych-domu",
                                heading: "Společné prostory bytových prostorů"
                            },
                            {
                                src: "/rekonstrukce-a-odizolovani-zakladu-a-kanalizace.avif",
                                alt: "Služba rekonstrukce a odizolování základů a kanalizace - Jinex.cz | Jiří Nesměrák",
                                href: "/sluzby/rekonstrukce-a-odizolovani-zakladu-a-kanalizace",
                                heading: "Rekonstrukce a odizolování základů a kanalizace"
                            },
                            {
                                src: "/rekonstrukce-fasad-a-lodzii.avif",
                                alt: "Služba rekonstrukce fasád a lodžií - Jinex.cz | Jiří Nesměrák",
                                href: "/sluzby/rekonstrukce-fasad-a-lodzii",
                                heading: "Rekonstrukce fasád a lodžií"
                            },
                            {
                                src: "/rekonstrukce-socialnich-bytu.avif",
                                alt: "Služba Rekonstrukce sociálních bytů - Jinex.cz | Jiří Nesměrák",
                                href: "/sluzby/rekonstrukce-socialnich-bytu",
                                heading: "Rekonstrukce sociálních bytů"
                            },
                            {
                                src: "/ploty-a-terasy.avif",
                                alt: "Služba ploty a terasy - Jinex.cz | Jiří Nesměrák",
                                href: "/sluzby/ploty-a-terasy",
                                heading: "Ploty a terasy"
                            },
                            {
                                src: "/koupelny.avif",
                                alt: "Služba koupelny - Jinex.cz | Jiří Nesměrák",
                                href: "/sluzby/koupelny",
                                heading: "Koupelny"
                            },
                        ].map(((service, idx) => {
                            const {
                                src,
                                alt,
                                href,
                                heading
                            } = service;

                            return (
                                <Link
                                key={idx}
                                href={href}>
                                    <Wrapper
                                    className="relative">
                                        <Img
                                        width={500}
                                        height={500}
                                        src={src}
                                        alt={alt}
                                        className="w-full md:max-w-full md:h-[350px] rounded-2xl object-cover"
                                        />
                                        {/* [500px] */}
                                        <Wrapper className="absolute inset-0 w-full md:max-w-full md:h-[350px] rounded-2xl bg-black/30" />
                                        <Wrapper className="absolute bottom-8 left-5 md:max-w-[400px] text-white">
                                            <Text type="cardHeading">
                                                {heading}
                                            </Text>
                                        </Wrapper>
                                    </Wrapper>
                                </Link>
                            );
                        }))
                    }
                </Grid>
            </Wrapper>
        </Fragment>
    );
};

export default Services;