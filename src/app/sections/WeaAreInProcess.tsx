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

const WeaAreInProcess = ({
    className,
    id
} : {
    className?: string;
    id?: string;
}) => {
    return (
        <Fragment>
            <Wrapper
            className={clsx("p-6 md:p-8 lg:p-10 border-t border-gray-200 bg-white shadow-lg we-are-in-process-section-component", className)}
            id={id}>
                <Flex
                type="flexCol"
                className="justify-center items-center text-center">
                    <Text type="sectionHeading">
                        Právě provádíme
                    </Text>
                    <Text>
                        Kompletní rekonstrukce bytu 4+1 v Chodově.
                    </Text>
                </Flex>
                <Grid
                type="oneGridLayout"
                className="mt-2.5 md:mt-3 lg:mt-4">
                    {
                        [
                            {
                                src: "/kompletni-rekonstrukce-bytu-4-1-v-chodove-1.avif",
                                alt: "Právě provádíme kompletní rekonstrukci bytu 4+1 v Chodově, okres Karlovy Vary - Jinex.cz | Jiří Nesměrák",
                                href: "/prave-provadime/kompletni-rekonstrukce-bytu-4-1-v-chodove",
                                heading: "Kompletní rekonstrukce bytu 4+1 v Chodově"
                            }
                        ].map((work, idx) => {
                            const {
                                src,
                                alt,
                                href,
                                heading
                            } = work;

                            return (
                                <Link
                                key={idx}
                                href={href}>
                                    <Wrapper className="relative">
                                        <Img
                                        width={500}
                                        height={500}
                                        src={src}
                                        alt={alt}
                                        className="w-full md:max-w-[500px] md:max-h-[350px] rounded-2xl"
                                        />
                                        <Wrapper className="absolute inset-0 w-full md:max-w-[500px] md:max-h-[350px] rounded-2xl bg-black/40" />
                                        <Wrapper className="absolute bottom-8 left-5 md:max-w-[400px] text-white">
                                            <Text type="cardHeading">
                                                {heading}
                                            </Text>
                                        </Wrapper>
                                    </Wrapper>
                                </Link>
                            );
                        })
                    }
                </Grid>
            </Wrapper>
        </Fragment>
    );
};

export default WeaAreInProcess;