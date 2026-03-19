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

const LastDoneWorks = ({
    className,
    id
} : {
    className?: string;
    id?: string;
}) => {
    return (
        <Fragment>
            <Wrapper
            className={clsx("p-6 md:p-8 lg:p-10 border-t border-gray-200 bg-white shadow-lg last-done-works-section-component", className)}
            id={id}>
                <Flex
                type="flexCol"
                className="justify-center items-center text-center">
                    <Text type="sectionHeading">
                        Poslední dokončené práce
                    </Text>
                    <Text>
                        Ukázky našich dosud posledních práci, které jsme úspěšně dokončili.
                    </Text>
                </Flex>
                <Grid
                type="threeGridLayout"
                className="mt-2.5 md:mt-3 lg:mt-4">
                    {
                        [
                            {
                                src: "/rekonstrukce-lodzii-v-habartove.avif",
                                alt: "Poslední dokončená práce - rekonstrukce lodžií v Habartově - Jinex.cz | Jiří Nesměrák",
                                href: "/posledni-dokoncene-prace/rekonstrukce-lodzii-v-habartove",
                                heading: "Rekonstrukce lodžií v Habartově"
                            },
                            {
                                src: "/rekonstrukce-balkonu-v-sokolove.avif",
                                alt: "Poslední dokončená práce - rekonstrukce balkónů v Sokolově - Jinex.cz | Jiří Nesměrák",
                                href: "/posledni-dokoncene-prace/rekonstrukce-balkonu-v-sokolove",
                                heading: "Rekonstrukce balkónů v Sokolově"
                            },
                            {
                                src: "/vyroba-a-montaz-najezdu-v-chodove.avif",
                                alt: "Poslední dokončená práce - výroba a montáž nájezdu v Chodově - Jinex.cz | Jiří Nesměrák",
                                href: "/posledni-dokoncene-prace/vyroba-a-montaz-najezdu-v-chodove",
                                heading: "Výroba a montáž nájezdu v Chodově"
                            }
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
                                        className="w-full md:max-w-[500px] md:h-[350px] rounded-2xl object-cover"
                                        />
                                        <Wrapper className="absolute inset-0 w-full md:max-w-[500px] md:h-[350px] rounded-2xl bg-black/40" />
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

export default LastDoneWorks;