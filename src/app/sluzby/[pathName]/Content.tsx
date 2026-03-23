"use client";

import {
    Fragment
} from "react";
import {
    usePathname,
} from "next/navigation";

import servicePagesSet from "@/app/sets/servicePagesSet";
import Header from "@/app/components/Header";
import Subheader from "@/app/components/Subheader";
import Wrapper from "@/app/components/Wrapper";
import Flex from "@/app/components/Flex";
import Text from "@/app/components/Text";
import Img from "@/app/components/Img";
import CtaSect from "@/app/sections/CtaSect";
import Faq from "@/app/sections/FavoriteAndQuestions";
import Contact from "@/app/sections/Contact";
import Footer from "@/app/components/Footer";

const Content = () => {
    const pathName = usePathname();

    const currentPage = servicePagesSet.find((service) => {
        return service.url === pathName;
    });

    return (
        <Fragment>
            <Header />
            <Subheader />
            <Wrapper className="p-6 md:p-8 lg:p-10 border-y border-gray-200 bg-white shadow-lg">
                <Flex
                type="flexCol"
                className="justify-center items-center text-center">
                    <Text type="sectionHeading">
                        {currentPage?.heading}
                    </Text>
                </Flex>
                <Flex
                type="flexCol"
                className="mt-2.5 md:mt-3 lg:mt-4">
                    <Text type="cardHeading">
                        Podívejte na pár ukázek z realizací ({currentPage?.src.length})
                    </Text>
                    <Flex className="justify-center flex-wrap mt-2.5 md:mt-3 lg:mt-4">
                        {
                            currentPage?.src.map((img, idx) => {
                                return (
                                    <Img
                                    key={idx}
                                    height={350}
                                    width={350}
                                    src={img}
                                    alt={`${idx + 1}. ukázka ${currentPage.alt}`}
                                    className="w-full max-h-[375px] md:w-[350px] md:h-[350px] rounded-md object-cover cursor-pointer"
                                    />
                                );
                            })
                        }
                    </Flex>
                </Flex>
            </Wrapper>
            <CtaSect id="jste-z-karlovych-varu-nebo-okoli" />
            <Faq id="casto-kladene-dotazy" />
            <Contact id="kontakt" />
            <Footer id="footer" />
        </Fragment>
    );
};

export default Content;