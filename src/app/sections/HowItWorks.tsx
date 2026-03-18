import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

type props = {
    className?: string;
    children?: ReactNode;
};

import Wrapper from "../components/Wrapper";
import Flex from "../components/Flex";
import Text from "../components/Text";

const HowItWorks = ({
    className,
    children
}: props) => {
    return (
        <Fragment>
            <Wrapper className={clsx(className, "p-6 md:p-8 lg:p-10 border-t border-gray-200 bg-white shadow-lg how-it-works-section-component")}>
                <Flex
                type="flexCol"
                className="justify-center items-center text-center">
                    <Text type="sectionHeading">
                        Jak to s nám funguje a probíhá?
                    </Text>
                    <Text>
                        Ať máte přehled o každém našem kroku v procesu.
                    </Text>
                    {/* <Flex>
                        {
                            [
                                {
                                    heading: "Zadejte poptávku",
                                    text: "Po zadání poptávky, vypracujeme pro Vás cenovou nabídku na míru, podle Vašeho zadání."
                                },
                                {
                                    heading: "Schválení cenové nabídky",
                                    text: "Po Vámi schválení cenové nabídky, navrhneme termín realizace."
                                },
                                {
                                    heading: "Jdeme makat!",
                                    text: "Po dohodnutí termínu realizace, přijedeme a pouštíme se do realizace projektu."
                                }
                            ].map((card, idx) => {
                                const {
                                    heading,
                                    text
                                } = card;

                                return (
                                    <Wrapper
                                    key={idx}
                                    className="p-2.5 md:p-3 lg:p-4 bg-[#00A335] rounded-md">
                                        <Flex type="flexRowOnly">
                                            <Wrapper className="p-2.5 md:p-3 lg:p-4 bg-white rounded-full">
                                                <Text type="boldText">
                                                    {idx + 1}
                                                </Text>
                                            </Wrapper>
                                            <Text type="cardHeading">
                                                {heading}
                                            </Text>
                                        </Flex>
                                        <Text>
                                            {text}
                                        </Text>
                                    </Wrapper>
                                );
                            })
                        }
                    </Flex> */}
                    <Wrapper className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 lg:gap-4 mt-2 md:mt-3 lg:mt-4">
                        {
                            [
                                {
                                    heading: "Zadejte poptávku",
                                    text: "Po zadání poptávky, vypracujeme pro Vás cenovou nabídku na míru, podle Vašeho zadání."
                                },
                                {
                                    heading: "Schválení cenové nabídky",
                                    text: "Po Vámi schválení cenové nabídky, navrhneme termín realizace."
                                },
                                {
                                    heading: "Jdeme makat!",
                                    text: "Po dohodnutí termínu realizace, přijedeme a pouštíme se do realizace projektu."
                                }
                            ].map((card, idx) => {
                                const {
                                    heading,
                                    text
                                } = card;

                                return (
                                    <Flex
                                    key={idx}
                                    type="flexCol"
                                    className="p-2.5 md:p-4 lg:p-6 bg-[#00A335] text-white rounded-md"
                                    id="jak-to-funguje">
                                        <Flex
                                        type="flexRowOnly"
                                        className="justify-center">
                                            <Flex
                                            type="flexRowOnly"
                                            className="justify-between w-full">
                                                <Wrapper className="w-[50px] h-[50px] md:max-w-[60px] p-2.5 md:p-3 lg:p-4 bg-white rounded-full">
                                                    <Text
                                                    type="boldText"
                                                    className="md:-mt-1 text-black">
                                                        {idx + 1}
                                                    </Text>
                                                </Wrapper>
                                                <Text type="cardHeading">
                                                    {heading}
                                                </Text>
                                            </Flex>
                                        </Flex>
                                        <Text className="max-w-[500px]">
                                            {text}
                                        </Text>
                                    </Flex>
                                );
                            })
                        }
                    </Wrapper>
                </Flex>
            </Wrapper>
        </Fragment>
    );
};

export default HowItWorks;